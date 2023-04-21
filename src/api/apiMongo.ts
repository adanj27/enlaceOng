/*
Fetch en VITE_API_URL;(.env) 
-----------------------------------------
Endpoint: https://neatpertinentopen64.michael-liendo.repl.co/ => 
+ /Auth/*
*/

import axios, { AxiosInstance } from 'axios';
// import { getEnvVariable } from '../../helpers/getEnvVariables';

// const { API_URL } = getEnvVariable();

export const dbmongoApi: AxiosInstance = axios.create({
  // baseURL: API_URL
  baseURL: 'https://neatpertinentopen64.michael-liendo.repl.co/',
});
