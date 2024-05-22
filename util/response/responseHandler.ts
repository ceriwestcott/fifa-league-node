import { Response } from "express";

export const responseHandler = (
  res: Response,
  data: any,
  statusCode: number
) => {
  if (statusCode >= 200 || statusCode < 300) {
    res.status(statusCode).json(data);
  } else {
    res.status(statusCode).json({ message: data.message });
  }
};

