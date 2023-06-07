import { config } from '../config/config';

const notFound = (req: any, res: any, next: any) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (
  err: any,
  req: any,
  res: any,
  next: any,
) => {
  let statusCode =
    res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    message = `Resource not Found`;
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack:
      config.NODE_ENV === 'production' ? 'fail' : err.stack,
  });
};

export { notFound, errorHandler };
