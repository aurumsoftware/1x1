import { Request, Response } from 'express';
import { User } from '../models/User';

class UserController {
  public async all(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    const currentUser = await User.findOne({ email });
    if (currentUser) {
      return res.json(currentUser);
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
