import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().trim().required().messages({
    "string.empty": "Please enter your email",
    "string.email": "Please enter a valid email",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Please enter your password",
    "string.min": "Please enter a valid password",
  }),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, {
    abortEarly: false,
  }); // ## if error value will declare result

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {}); // ## params 1 = call back fnc, params 2 is initial value of acc
    return result;
  }
};

export default validateLogin;
