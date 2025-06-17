import axios from 'axios';
import type {
  ApiResponseType,
  ErrorResponse,
  Params,
  PathParams,
  Url,
} from './types.ts';

export const APIS = {
  POST: 'POST',
  COMMENT: 'COMMENT',
  QUERY: 'QUERY',
} as const;

export type TAPIS = (typeof APIS)[keyof typeof APIS];

const getBaseUrl = (api: TAPIS): string => {
  switch (api) {
    case APIS.POST:
      return 'http://localhost:4000';
    case APIS.COMMENT:
      return 'http://localhost:4001';
    case APIS.QUERY:
      return 'http://localhost:4002';
    default:
      throw new Error('Unknown API');
  }
};

const API = (api: TAPIS) => {
  return axios.create({
    baseURL: getBaseUrl(api),
  });
};

async function getMethod<T>(
  url: Url,
  api: TAPIS,
  params?: Params,
  pathParams?: PathParams
): ApiResponseType<T> {
  try {
    const response = await API(api).get<T>(url, { params, ...pathParams });
    return { data: response.data, error: null, isError: false };
  } catch (error) {
    const errorResponse = handleApiError(error);
    return { data: null, error: errorResponse, isError: true };
  }
}

function handleApiError(error: unknown): ErrorResponse {
  const defaultError: ErrorResponse = {
    message: 'An unexpected error occurred',
    status: 500,
    data: 'No additional data available',
  };
  if (axios.isAxiosError(error)) {
    // Handle Axios error
    console.error('Axios error:', error.message);
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      defaultError.status = error.response.status;
      defaultError.data = error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request data:', error.request);
      defaultError.message = 'No response received from the server';
      defaultError.data = 'No additional data available';
    }
  } else {
    // Handle other types of errors
    console.error('Unexpected error:', error);
  }
  return defaultError;
}

async function postMethod<T>(
  url: Url,
  api: TAPIS,
  data: Record<string, unknown>,
  params?: Params,
  pathParams?: PathParams
): ApiResponseType<T> {
  try {
    const response = await API(api).post<T>(url, data, {
      params,
      ...pathParams,
    });
    return { data: response.data, error: null, isError: false };
  } catch (error) {
    const errorResponse = handleApiError(error);
    return { data: null, error: errorResponse, isError: true };
  }
}

export { getMethod, postMethod };
