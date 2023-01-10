import { Router } from 'express';
import PlantController from '../controllers/PlantController';
import Mysql2PlantModel from '../models/Mysql2PlantModel';

const plantController = new PlantController();
const plantModel = new Mysql2PlantModel();
const plantRouter = Router();

plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));

export default plantRouter;