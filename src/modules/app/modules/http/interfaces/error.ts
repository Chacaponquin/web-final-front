export interface HttpError {
  status: number;
  message: string;
}

export interface RespHttpError {
  error: HttpError;
  time: string;
  path: number;
}
