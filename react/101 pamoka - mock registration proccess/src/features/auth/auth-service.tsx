import axios from 'axios';
import { Crudentials, TemporaryUser, User } from '../../types';

/*
  Sukurkite funkciją register ir ją išeksportuokite iš namespace 'AuthService'
  funkcijos register veikimas
    * parsiunčiami visi vartotojai
    * Jeigu toks vartotjojas jau egzistuoja, metama(throw) klaida
    * sukurkite vartotoją serveryje: https://www.npmjs.com/package/json-server
    * grąžinkite sukurtą vartotoją
*/

export type AuthPromise = (crudential: Crudentials) => Promise<User>;

namespace AuthService {

  export const login: AuthPromise = async ({ email, password }: Crudentials) => {
    // TODO: rewrite auth logic, when server is implemented
    // ↓↓↓ Daromas patikrinimas, kurs ateityje bus daromas serveryje ↓↓↓
    const { data: tempUsers } = await axios
      .get<TemporaryUser[]>(`http://localhost:8000/users?email=${email}`);
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

  export const register: AuthPromise = async (crudentials: Crudentials) => {
    // throw new Error('Registracijos klaida');
    const mockUser = {
      id: 'testinis-id',
      email: 'testas@gmail.com',
    };

    return mockUser;
  };

}

export default AuthService;
