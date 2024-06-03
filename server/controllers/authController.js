const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const createError = require('../utils/appError');
const jwt = require('jsonwebtoken');



exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            return next(new createError('User already exists', 400));
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);


        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        //JWT Assign
        const token = jwt.sign({ _id: newUser.id }, 'secretkey123', {
            expiresIn: '24h',
        });

        res.status(201).json({
            status: 'success',
            message: 'User registered sucessfully',
            token,
            user: {
                _id: user._id,
                username: user.username,
                role: user.role,
            }
        });

    } catch (error) {
        next(error);
    }
};
exports.login = async (req, res, next) => {

    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) return next(new createError('User not found!', 404));

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return next(new createError('Invalid Credentials', 401));
        }

        const token = jwt.sign({ _id: user.id }, 'secretkey123', {
            expiresIn: '24h',
        });

        res.status(200).json({
            status: 'success',
            token,
            message: 'Logged in sucessfully',
            user: {
                _id: user._id,
                username: user.username,
                role: user.role,
            }
        });

    } catch (error) {
        next(error);
    }
    //res.send('Login successful');
};
