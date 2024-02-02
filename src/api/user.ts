import axios from 'axios';
import { TLoginSchema } from '../validation/schemas';

export async function loginUser(data: TLoginSchema) {
  const response = await axios.post('http://localhost:8000/login', data);
  return response;
}
