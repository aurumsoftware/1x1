import { PrivateNote } from '../models/PrivateNote';
import { Request, Response } from 'express';

class PrivateNoteController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;

    const privateNotes = await PrivateNote.find({ userId });
    return res.json(privateNotes);
  }

  public async indexByMeeting(req: Request, res: Response): Promise<Response> {
    const { userId, meetingId } = req.params;

    const privateNotes = await PrivateNote.find({ userId, meetingId });
    return res.json(privateNotes);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const privateNote = await PrivateNote.create(req.body);

    return res.json(privateNote);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    return res.json('');
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    return res.json('');
  }
}

export default new PrivateNoteController();
