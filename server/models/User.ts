import { UserInterface } from './../interfaces/UserInterface';
import { Document, Schema, Model, model } from 'mongoose';
export interface UserModel extends UserInterface, Document {}

const UserSchema: Schema = new Schema(
  {
    googleId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    imageUrl: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

export const User: Model<UserModel> = model<UserModel>('User', UserSchema);
