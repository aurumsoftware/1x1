import { Router } from 'express';
import UserController from './controllers/UserController';
import MeetingController from './controllers/MeetingController';

const routes = Router();

//routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/meetings/:userId', MeetingController.index);
routes.post('/meetings', MeetingController.store);
routes.put('/meetings/:id', MeetingController.update);
routes.delete('/meetings/:id', MeetingController.remove);

export default routes;
