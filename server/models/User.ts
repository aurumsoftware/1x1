import { UserInterface } from './../interfaces/UserInterface';
import { Document, Schema, Model, model } from 'mongoose';

export interface UserModel extends UserInterface, Document {}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
  },
);

export const User: Model<UserModel> = model<UserModel>('User', UserSchema);
