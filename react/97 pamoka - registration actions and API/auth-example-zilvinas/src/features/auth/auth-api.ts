type Crudentials = {
  email: string,
  password: string,
};

type User = {
  id: string,
  email: string,
  password: string,
};

const AuthAPI = new (class AuthAPI {
  // eslint-disable-next-line class-methods-use-this
  public login = async ({ email, password }: Crudentials): Promise<string | User> => {
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json() as User[];

    const user = users.find((x) => x.email === email);
    if (!user) {
      return `User with email ${email} is not found`;
    }

    if (user.password !== password) {
      return 'Passwords no not match';
    }

    return user;
  };
})();

export default AuthAPI;
