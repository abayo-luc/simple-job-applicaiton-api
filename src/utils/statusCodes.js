import { STATUS_CODES } from 'http';

export const statusCodes = Object.keys(STATUS_CODES).reduce(
  (prev, key) => ({
    ...prev,
    [STATUS_CODES[key].toUpperCase().split(' ').join('_')]: key,
  }),
  {}
);
