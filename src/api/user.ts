import axios from 'axios';
import { TLoginSchema } from '../validation/schemas';

export async function loginUser(data: TLoginSchema) {
  const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, data, {
    withCredentials: true,
  });
  return response;
}
