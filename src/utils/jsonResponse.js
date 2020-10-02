export const jsonResponse = ({ res, status, message, errors, data }) => {
  return res.status(status).json({
    message,
    errors,
    data,
  });
};
