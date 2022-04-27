// import { database } from './services/mongodb';
const { app } = require('./app');

if (!process.env.JWTKEY)
  // this is in k8s/auth depl
  throw new Error('process.env.JWT_KEY is not defined ');

app.listen(5000, () => {
  console.log('App is listening on the port 5000!!!');
});
