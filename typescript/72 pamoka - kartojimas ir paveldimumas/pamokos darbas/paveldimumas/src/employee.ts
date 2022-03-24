import Person, { PersonProps } from './person.js';

export type EmployeeProps = {
  salary: number
};

// Darbuotojas yra Asmuo
class Employee extends Person {
  private salary: number;

  public constructor({ salary }: EmployeeProps, personProps: PersonProps) {
    super(personProps);

    this.salary = salary;
  }

  public introduce = (): void => {
    const { name, surname, salary } = this;
    console.log(`Aš esu darbuotojas ${name} ${surname}, gaunu ${salary} pinigų.`);
  };
}

export default Employee;
