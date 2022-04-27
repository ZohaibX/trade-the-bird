require('dotenv').config(); // to use dotenv file

module.exports = function () {
  console.log(process.env.JWTKEY); //its a secret key
  if (!process.env.JWTKEY) {
    console.error('FATAL Error : jwt is not defined');
    process.exit(1);
  }
};
