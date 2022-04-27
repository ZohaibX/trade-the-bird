const joi = require('joi');

 const validateAuthInput = (requestBody) => {
   let schema;
  if(!requestBody.username){
    schema = joi.object({
      email: joi.string().max(50).min(5).required(),
      password: joi.string().max(50).min(5).required(),
    });
  }else {
     schema = joi.object({
      username: joi.string().max(20).min(5).required(),
      email: joi.string().max(50).min(5).required(),
      password: joi.string().max(50).min(5).required(),
    });
  }
  const validation = schema.validate(requestBody);

  if (validation.error) return validation.error.details[0].message;
  return null;
};

module.exports.validateAuthInput = validateAuthInput;