export default (err) => {
  const message = err.errors && err.errors[0] ? err.errors[0]?.message : '';
  if (err.name == 'SequelizeUniqueConstraintError') {
    return 'Value must be unique';
  }
  return message;
};
