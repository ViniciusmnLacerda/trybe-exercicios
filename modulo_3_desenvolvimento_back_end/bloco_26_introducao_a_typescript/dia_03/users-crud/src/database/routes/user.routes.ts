import { Router } from 'express';
import * as userController from '../controller/user.controller';
import userMiddleware from '../middlewares/userMiddleware';

const router = Router();

router.post('/login', userController.login);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.delete('/:id', userController.remove);

router.use(userMiddleware);

router.post('/', userController.create);
router.put('/:id', userController.update);

export default router;
