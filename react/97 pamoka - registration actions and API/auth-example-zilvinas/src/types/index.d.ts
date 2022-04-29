export type User = {
  id: string,
  email: string,
  password: string,
};

export type UserRegistration = {
  email: string,
  password: string,
  repeatPassword: string,
};
