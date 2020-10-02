import Sequelize from 'sequelize';
import { jsonResponse, statusCodes } from '../utils';
import sequelizeError from '../utils/sequelizeError';
export default (callback) => async (req, res, next) => {
  try {
    await callback(req, res, next);
  } catch (err) {
    let databaseError;
    if (err instanceof Sequelize.UniqueConstraintError) {
      databaseError = sequelizeError(err);
    }
    const message = databaseError || err.mesage;
    const status = err.status || statusCodes.BAD_REQUEST;
    return jsonResponse({
      res,
      status,
      message,
      errors: err?.errors || err,
    });
  }
};
