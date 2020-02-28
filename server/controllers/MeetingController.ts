import { MeetingModel } from './../models/Meeting';
import { Request, Response } from 'express';
import { Meeting } from '../models/Meeting';

class MeetingController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;

    const meetings = await Meeting.find({ $or: [{ userId1: userId }, { userId2: userId }] });
    return res.json(meetings);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const meeting = await Meeting.create(req.body);

    return res.json(meeting);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { meetingTitle, meetingDate, checklist, description, userId1, userId2 } = req.body;

    try {
      const meeting = await Meeting.findByIdAndUpdate(
        id,
        {
          meetingTitle,
          meetingDate,
          checklist,
          description,
          userId1,
          userId2,
        },
        { new: true },
      );

      return res.json(meeting);
    } catch (err) {
      return res.status(403).json({ error: 'Falha ao atualizar reunião' });
    }
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await Meeting.findByIdAndDelete(id);
      return res.json({ success: 'Meeting deleted!' });
    } catch (err) {
      return res.status(403).json({ error: 'Falha ao remover reunião' });
    }
  }
}

export default new MeetingController();
