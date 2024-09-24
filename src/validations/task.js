import joi from "joi";

export const createTaskValidation = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  priority: joi.string().valid("low", "medium", "high").required(),
  deadline: joi.date().required(),
});
export const updateTaskValidation = joi.object({
  title: joi.string(),
  description: joi.string(),
  priority: joi.string().valid("low", "medium", "high"),
  deadline: joi.date(),
});
