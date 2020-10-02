import { Router } from 'express';
import * as controller from './controller';
import * as validators from './validators';
const routes = Router();

routes.get('/applicants', controller.getAll);
routes.post('/applicants', validators.createApplicant, controller.create);
routes.put('/applicants/:id', validators.changeStatus, controller.updateStatus);
routes.get('/applicants/:id', validators.getOne, controller.getOne);
export default routes;
