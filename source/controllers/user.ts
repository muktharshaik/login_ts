import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/user';

const createUser = (req: Request, res: Response, next: NextFunction) => {
    let { userName, password, firstName, lastName, mobile, isActive } = req.body;


    
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        userName,
        password,
        firstName,
        lastName,
        mobile,
        isActive
    });
    
    return user
        .save()
        .then((result) => {
            return res.status(201).json({
                user: result
            });
        })
        .catch((error) => {
            console.log("In error function");
            
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const userAuth = (req: Request, res: Response, next: NextFunction) => {
    let { userName, password } = req.body;

    User.find({ userName: userName })
        .exec()
        .then((user) => {
            for (let i = 0; i < user.length; i++) {
                if (user[i].password === password && user[i].isActive) {
                    return res.status(201).json({
                        message: 'User is authenticated'
                    });
                } else {
                    return res.status(201).json({
                        message: 'Invalid Credentials'
                    });
                }
            }
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { createUser, userAuth };
