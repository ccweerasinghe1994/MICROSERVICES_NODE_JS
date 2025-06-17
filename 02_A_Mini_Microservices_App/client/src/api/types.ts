export type Url = string;
export type Params = Record<string, string>;
export type PathParams = Record<string, string | number>;

export type ApiResponseType<T> = Promise<{
  data: T | null;
  error: ErrorResponse | null;
  isError: boolean;
}>;

export type ErrorResponse = {
  message: string;
  status?: number;
  data?: string | object;
};
