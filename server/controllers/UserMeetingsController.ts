import { Request, Response } from 'express';
import { Meeting } from '../models/Meeting';
import { User } from './../models/User';

class UserMeetingsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;

    const meetings = await Meeting.find({
      $or: [{ userId1: userId }, { userId2: userId }],
    });

    return res.json(meetings);
  }

  public async indexMeetingUsers(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;

    const meetingUsers = await Meeting.find({
      $or: [{ userId1: userId }, { userId2: userId }],
    }).select('userId1 userId2');

    const allUsers: string[] = [];
    meetingUsers.forEach(meeting => {
      if (meeting.userId1?.toString() === userId.toString()) {
        if (meeting.userId2) allUsers.push(meeting.userId2.toString());
      } else {
        if (meeting.userId1) allUsers.push(meeting.userId1.toString());
      }
    });

    const usersList = await User.find()
      .where('_id')
      .in(allUsers);

    return res.json(usersList);
  }
}

export default new UserMeetingsController();
