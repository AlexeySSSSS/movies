const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        minlength: 2,
    },
});

userSchema.statics.findUserByCredentials = function (email, password) {
    return this.findOne({ email })
        .then((user) => {
            if (!user) {
                return Promise.reject(new Error('Неправильные почта или пароль'));
            }
            return bcrypt.compare(password, user.password)
                .then((matched) => {
                    if (!matched) {
                        return Promise.reject(new Error('Неправильные почта или пароль'));
                    }
                    return user;
                });
        });
};

module.exports = mongoose.model('user', userSchema);