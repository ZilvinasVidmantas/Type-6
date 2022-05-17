import User from './user';

export type Programmer = {
  id: string,
  user: Required<User>,
  languages: string[],
  technologies: string[],
  yearsOfExperience: number,
};
