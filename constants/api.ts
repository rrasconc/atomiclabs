import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 15000,
});

api.interceptors.response.use(undefined, (error) => {
  const { config } = error;

  //if we have am error we retry the request 3 times
  if (!config.retryCount) {
    config.retryCount = 1;
  } else if (config.retryCount < 3) {
    config.retryCount += 1;
  } else {
    return Promise.reject(error);
  }

  // Retry the request after 1 second
  const delay = new Promise((resolve) => setTimeout(resolve, 1000));
  return delay.then(() => api(config));
});
