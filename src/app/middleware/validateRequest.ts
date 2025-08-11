import { catchAsync } from "../utils/catchAsync";

const validateRequest = (schema: any) => {
  return catchAsync(async (req, res, next) => {
    await schema.parseAsync({
      body: req.body,
    });
    next();
  });
};
export default validateRequest;
