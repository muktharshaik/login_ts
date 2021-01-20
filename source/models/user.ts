import mongoose, { Schema } from 'mongoose';
import logging from '../config/loggin';
import IUser from '../interface/user';

const UserSchema: Schema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: { type: Number, required: true },
    isActive: { type: Boolean, required: true }
});

UserSchema.post<IUser>('save', function () {
    logging.info('Mongo', 'User has been added: ', this);
});

export default mongoose.model<IUser>('user', UserSchema);
