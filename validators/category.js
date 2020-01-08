const Joi = require('@hapi/joi');

const categorySchema = Joi.object({
  name: Joi.string().trim().required(),
  description: Joi.string().trim().required()
});

module.exports = { categorySchema };
