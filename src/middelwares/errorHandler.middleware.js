const Errors = require('../errors/errors.json')
module.exports = {
    errorHandler: (err, req, res, next) => {
        const errorSchema = Errors[err.code] || {
            status:500,
            message: "unexpected error",
        };
        console.log(err);
        err.message = errorSchema.message;
        err.status = err.details?.cod || errorSchema.status;
        const {status, ...rest} = err;
        res.status(status).json(rest);
    }
}