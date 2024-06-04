const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const createError = require('../utils/appError');
const jwt = require('jsonwebtoken');



exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            return next(new createError('Потребителят вече съществува!', 400));
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
            message: 'Потребителят успешно създаден!',
            token,
            user: {
                _id: newUser._id,
                username: newUser.username,
                role: newUser.role,
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

        if (!user) return next(new createError('Потребителят не е намерен!', 404));

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return next(new createError('Невалидни данни', 401));
        }

        const token = jwt.sign({ _id: user.id }, 'secretkey123', {
            expiresIn: '24h',
        });

        res.status(200).json({
            status: 'success',
            token,
            message: 'Успешен вход',
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
