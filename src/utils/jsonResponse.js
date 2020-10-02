export const jsonResponse = ({ res, status, message, error, data }) => {
  return res.status(status).json({
    message,
    error,
    data,
  });
};
