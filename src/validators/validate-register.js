import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "First name is required",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "Last name is required",
  }),
  email: Joi.string().email({ tlds: false }).messages({
    "string.empty": "Email is required",
    "string.email": "Please enter a valid email",
  }), // # tld = top level domain set false to disable validation
  password: Joi.string().alphanum().min(8).required().trim().messages({
    "string.empty": "Password is required",
    "string.alphanum": "Password must be a number or alphabet",
    "string.min": "Password must be at lest 8 characters",
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .trim()
    .messages({
      "any.only": "Password do not match",
      "string.empty": "Confirm password is required",
    }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false,
  }); // ## if error have value will declare result

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {}); // ## params 1 = call back fnc, params 2 is initial value of acc
    return result;
  }
};

export default validateRegister;
