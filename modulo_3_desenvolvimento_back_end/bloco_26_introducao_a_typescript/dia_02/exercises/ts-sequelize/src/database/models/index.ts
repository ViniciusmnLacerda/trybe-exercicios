import { Sequelize } from "sequelize";
import * as config from '../database';

export default new Sequelize(config);