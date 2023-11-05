import { errorResponse } from "./responseHandler.js";

export default (requestSchema) => {
    return async (req, res, next) => {
        try {
            const schema = requestSchema.body;
            const value = req.body;

            const { error } = schema.validate(value);
        
            if(error) {
                return await errorResponse(res, 422, 0, error.details[0].message);
            }

            next();
        } catch (error) {
            return await errorResponse(res, 500, 0, error.message);
        }
    }
}