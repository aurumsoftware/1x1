import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import { User } from '../models/User';
import bcrypt from 'bcrypt';
import authConfig from '../config/authConfig';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    console.log(req.body);
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('password');

    if (!user) {
      return res.status(401).json({ error: 'User not found ' });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    console.log('here');

    const token = jwt.sign(user._id, '1a0d0f77d15d47f8ea2c96f43788ec5d', {
      expiresIn: authConfig.expiresIn,
    });

    return res.json({
      _id: user._id,
      email,
      //token,
    });
  }
}

export default new SessionController();
