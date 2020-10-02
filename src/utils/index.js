export * from './isValueEmpty';
export * from './jsonResponse';
export * from './statusCodes';

export const paginate = ({ page = 1, limit = 50 }) => {
  const offset = (Number(page) - 1) * limit;
  return {
    offset,
    limit,
  };
};
