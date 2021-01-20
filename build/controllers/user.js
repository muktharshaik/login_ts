"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var user_1 = __importDefault(require("../models/user"));
var createUser = function (req, res, next) {
    var _a = req.body, userName = _a.userName, password = _a.password, firstName = _a.firstName, lastName = _a.lastName, mobile = _a.mobile, isActive = _a.isActive;
    var user = new user_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        isActive: isActive
    });
    return user
        .save()
        .then(function (result) {
        return res.status(201).json({
            user: result
        });
    })
        .catch(function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
var userAuth = function (req, res, next) {
    var _a = req.body, userName = _a.userName, password = _a.password;
    user_1.default.find({ userName: userName })
        .exec()
        .then(function (user) {
        for (var i = 0; i < user.length; i++) {
            if (user[i].password === password && user[i].isActive) {
                return res.status(201).json({
                    message: 'User is authenticated'
                });
            }
            else {
                return res.status(201).json({
                    message: 'Invalid Credentials'
                });
            }
        }
    })
        .catch(function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
exports.default = { createUser: createUser, userAuth: userAuth };
