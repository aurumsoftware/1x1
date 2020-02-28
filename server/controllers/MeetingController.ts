import { Request, Response } from 'express';
import { Meeting } from '../models/Meeting';

class MeetingController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const meetings = await Meeting.find({ $or: [{ userId1: id }, { userId2: id }] });
    return res.json(meetings);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const meeting = await Meeting.create(req.body);

    return res.json(meeting);
  }
}

export default new MeetingController();
