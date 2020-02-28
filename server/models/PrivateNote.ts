import { PrivateNoteInterface } from '../interfaces/PrivateNoteInterface';
import { Document, Schema, Model, model } from 'mongoose';

export interface PrivateNoteModel extends PrivateNoteInterface, Document {}

const PrivateNoteSchema: Schema = new Schema(
  {
    meetingId: { type: Schema.Types.ObjectId, ref: 'meetings', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const PrivateNote: Model<PrivateNoteModel> = model<PrivateNoteModel>('PrivateNote', PrivateNoteSchema);
