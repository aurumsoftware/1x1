import { Request, Response } from 'express';
import { Meeting } from '../models/Meeting';

class UserController {
  public async store(req: Request, res: Response): Promise<Response> {
    const meeting = await Meeting.create(req.body);

    return res.json(meeting);
  }
}

export default new UserController();
