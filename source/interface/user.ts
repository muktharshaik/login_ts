import { Document } from 'mongoose';

export default interface IUser extends Document {
    userName: String;
    password: String;
    firstName: String;
    lastName: String;
    mobile: Number;
    isActive: Boolean;
}
