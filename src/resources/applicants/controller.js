import asyncHandler from '../../middleware/asyncHandler';
import { jsonResponse, statusCodes } from '../../utils';
import RestActions from '../restActions';
import { paginate } from '../../utils';
const model = 'applicant';
export const getAll = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const data = await RestActions.findAll({
    model,
    query: {
      order: [
        ['firstName', 'ASC'],
        ['firstName', 'ASC'],
      ],
      ...paginate({ page, limit }),
    },
  });
  return jsonResponse({
    res,
    status: statusCodes.OK,
    data,
  });
});

export const create = asyncHandler(async (req, res) => {
  const data = await RestActions.create({ model, data: req.body });
  return jsonResponse({
    res,
    status: statusCodes.CREATED,
    data,
  });
});

export const updateStatus = asyncHandler(async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const data = await RestActions.update({ model, data: body, id });
  return jsonResponse({
    res,
    status: statusCodes.OK,
    data,
  });
});

export const getOne = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await RestActions.findById({ model, id });
  return jsonResponse({
    res,
    status: statusCodes.OK,
    data,
  });
});
