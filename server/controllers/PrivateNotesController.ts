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
    const { id } = req.params;

    const { description } = req.body;
    try {
      const privateNote = await PrivateNote.findByIdAndUpdate(id, { description }, { new: true });
      return res.json(privateNote);
    } catch (err) {
      return res.status(403).json({ error: 'Falha ao atualizar anotação' });
    }
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await PrivateNote.findByIdAndDelete(id);
      return res.json({ success: 'Note deleted!' });
    } catch (err) {
      return res.status(403).json({ error: 'Falha ao remover reunião' });
    }
  }
}

export default new PrivateNoteController();
