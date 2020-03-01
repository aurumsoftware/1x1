import { Router } from 'express';
import UserController from './controllers/UserController';
import MeetingController from './controllers/MeetingController';
import PrivateNotesController from './controllers/PrivateNotesController';
import SessionController from './controllers/SessionController';

const routes = Router();

//routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/auth', SessionController.store);

routes.get('/meetings/:userId', MeetingController.index);
routes.post('/meetings', MeetingController.store);
routes.put('/meetings/:id', MeetingController.update);
routes.delete('/meetings/:id', MeetingController.remove);

routes.get('/private_notes/:userId', PrivateNotesController.index);
routes.get('/private_notes/:userId/meeting/:meetingId', PrivateNotesController.indexByMeeting);
routes.post('/private_notes', PrivateNotesController.store);
routes.put('/private_notes/:id', PrivateNotesController.update);
routes.delete('/private_notes/:id', PrivateNotesController.remove);

export default routes;
