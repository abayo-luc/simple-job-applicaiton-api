import { jsonResponse, statusCodes } from '../utils';
export default (callback) => async (req, res, next) => {
  try {
    await callback(req, res, next);
  } catch (err) {
    const message = err.mesage;
    const status = err.status || statusCodes.INTERNAL_SERVER_ERROR;
    return jsonResponse({
      res,
      status,
      message,
      error: err,
    });
  }
};
