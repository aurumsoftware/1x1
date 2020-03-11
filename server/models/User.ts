import { UserInterface } from './../interfaces/UserInterface';
import { Document, Schema, Model, model } from 'mongoose';
import bcrypt from 'bcrypt';

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

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash((this as UserModel).password, 10);
  (this as UserModel).password = hash;
  next();
});

export const User: Model<UserModel> = model<UserModel>('User', UserSchema);
