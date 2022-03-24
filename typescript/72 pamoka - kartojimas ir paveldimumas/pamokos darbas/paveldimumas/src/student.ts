import Person, { PersonProps } from './person.js';

export type StudentProps = {
  course: number,
  universityTitle: string,
};

// Studentas yra Asmuo
class Student extends Person {
  private course: number;

  private universityTitle: string;

  public constructor({ course, universityTitle }: StudentProps, personProps: PersonProps) {
    super(personProps);

    this.course = course;
    this.universityTitle = universityTitle;
  }

  public introduce = (): void => {
    const {
      name,
      surname,
      course,
      universityTitle,
    } = this;
    console.log(`Aš esu ${universityTitle} universiteto studentas ${name} ${surname}, mokausi ${course} kurse.`);
  };
}

export default Student;
