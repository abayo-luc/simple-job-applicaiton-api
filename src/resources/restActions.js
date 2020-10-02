import models from '../database/models';
import { statusCodes } from '../utils';

export default class RestActions {
  static findAll({ model, query }) {
    return models[model].findAndCountAll({
      order: [['updatedAt', 'DESC']],
      ...query,
    });
  }
  static create({ model, data }) {
    return models[model].create({
      ...data,
    });
  }
  static update({ model, data, id }) {
    return models[model]
      .update(data, {
        where: {
          id,
        },
        returning: true,
      })
      .then((res) => res[1][0]);
  }
  static findById({ model, id, options = {} }) {
    return models[model].findByPk(id, options).then((res) => {
      if (!res) {
        const error = new Error();
        error.status = statusCodes.NOT_FOUND;
        error.mesage = 'Record not found';
        throw error;
      }
      return res;
    });
  }
}
