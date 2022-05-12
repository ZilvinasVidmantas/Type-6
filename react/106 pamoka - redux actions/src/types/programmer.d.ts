import User from './user';

type Programmer = {
  id: string,
  user: Required<User>,
  languages: string[],
  technologies: string[],
  yearsOfExperience: number,
};

export default Programmer;
