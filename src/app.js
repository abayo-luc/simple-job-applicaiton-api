import app from '.';

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  () =>
    process.env.NODE_ENV === 'development' &&
    console.log(`DEVELOPMENT: App can be accessed on http://localhost:${PORT}`)
);
