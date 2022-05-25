import axios from 'axios';
import { Crudentials, TemporaryUser, User } from '../../../types';

export type AuthPromise = (crudential: Crudentials) => Promise<User>;

const API_SERVER = process.env.REACT_APP_API_SERVER;

export const login: AuthPromise = async ({ email, password }: Crudentials) => {
  // TODO: rewrite auth logic, when server is implemented
  // ↓↓↓ Daromas patikrinimas, kurs ateityje bus daromas serveryje ↓↓↓
  const { data: tempUsers } = await axios
    .get<TemporaryUser[]>(`${API_SERVER}/users?email=${email}`);
  if (tempUsers.length === 0) {
    throw new Error('User with such email was not found');
  }

  const [tempUser] = tempUsers;

  if (tempUser.password !== password) {
    throw new Error('Passwords do not match');
  }
  // ↑↑↑ Daromas patikrinimas, kurs ateityje bus daromas serveryje ↑↑↑

  return {
    id: tempUser.id,
    name: tempUser.name,
    surname: tempUser.surname,
    email: tempUser.email,
    img: tempUser.img,
  };
};

export const register: AuthPromise = async ({ email, password }: Crudentials) => {
  const { data: tempUsers } = await axios.get<TemporaryUser[]>(`${API_SERVER}/users`);

  const userExists = tempUsers.map((x) => x.email).includes(email);
  if (userExists) {
    throw new Error('Toks vartotojas jau egzistuoja. Pasirinkite kitą el. paštą');
  }

  const { data: createdTempUser } = await axios.post(`${API_SERVER}/users`, { email, password });

  const createdUser: User = {
    id: createdTempUser.id,
    email: createdTempUser.email,
  };

  return createdUser;
};

export const checkEmailAvailability = async (email: string): Promise<boolean> => {
  const { data: tempUsers } = await axios.get<TemporaryUser[]>(`${API_SERVER}/users`);
  const emails = tempUsers.map((x) => x.email);

  return !emails.includes(email);
};

const AuthService = {
  login,
  register,
  checkEmailAvailability,
};

export default AuthService;
