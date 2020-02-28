import { Router } from 'express';
import UserController from './controllers/UserController';
import MeetingController from './controllers/MeetingController';

const routes = Router();

//routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/meetings', MeetingController.store);

export default routes;
