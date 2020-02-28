import { PrivateNote } from '../models/PrivateNote';
import { Request, Response } from 'express';

class PrivateNoteController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json('oi');
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
