export interface MeetingInterface extends Document {
  meetingTitle?: string;
  meetingDate?: Date;
  checklist?: Array<object>;
  description?: string;
  userId1?: string;
  userId2?: string;
}
