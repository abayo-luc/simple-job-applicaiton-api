import { Router } from 'express';
import applicants from './applicants/routes';
const router = Router();

router.get('/', (_, res) => res.json({ message: 'Welcome to API' }));
router.use(applicants);
export default router;
