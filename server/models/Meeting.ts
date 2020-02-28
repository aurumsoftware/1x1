import { MeetingInterface } from './../interfaces/MettingInterface';
import { Document, Schema, Model, model } from 'mongoose';

export interface MeetingModel extends MeetingInterface, Document {}

const MeetingSchema: Schema = new Schema(
  {
    meetingTitle: { type: String, required: true },
    meetingDate: { type: Date, required: true },
    checklist: { type: Array },
    description: { type: String },
    userId1: { type: Schema.Types.ObjectId, ref: 'users' },
    userId2: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  {
    timestamps: true,
  },
);

export const Meeting: Model<MeetingModel> = model<MeetingModel>('Meeting', MeetingSchema);
