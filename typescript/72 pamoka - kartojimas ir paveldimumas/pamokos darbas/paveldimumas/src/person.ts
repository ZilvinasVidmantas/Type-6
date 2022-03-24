export type PersonProps = {
  name: string,
  surname: string,
  year: number,
  month: number,
  day: number,
  zodiak?: string
};

class Person {
  private date: Date;

  protected name: string;

  protected surname: string;

  protected zodiak?: string;

  public constructor({
    name,
    surname,
    year,
    month,
    day,
    zodiak,
  }: PersonProps) {
    this.name = name;
    this.surname = surname;
    this.date = new Date(`${year}-${month}-${day}`);
    if (zodiak !== undefined) this.zodiak = zodiak;
  }

  public getAge = (): number => {
    const today = new Date();
    const birthDate = this.date;
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1;
    }
    return age;
  };
}

export default Person;
