const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const app = express();

//midlewares
app.use(cors())
app.use(express.json());

//routes
app.use('/api/auth', authRouter)

//mongo db connection
mongoose
    .connect('mongodb://127.0.0.1:27017/authentication')
    .then(() => console.log('Connected to MongoDB!'))
    .catch((error) => console.error('Failed to connect to MongoDB: ', error));

//global error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    //console.log(res);
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
})

//server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});