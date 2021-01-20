import express from 'express';
import controllers from '../controllers/user';

const router = express.Router();

router.post('/registration', controllers.createUser);
router.post('/login', controllers.userAuth);
// router.get('/user/authentication', controller.getAllUsers);

export = router;
