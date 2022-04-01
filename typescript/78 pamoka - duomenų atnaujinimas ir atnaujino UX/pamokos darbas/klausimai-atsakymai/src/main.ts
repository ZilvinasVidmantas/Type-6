/* eslint-disable no-inner-declarations */
/* eslint-disable no-empty */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
console.group('1. OOP inkapsuliacija');
{
  class Person {
    constructor(
      public name: string,
      public surname: string,
      private p_age: number,
    ) { }

    // public setAge = (newAge: number): void => {
    //   if (newAge < 0 || newAge > 150) {
    //     console.error('netinkamas amžius');
    //     return;
    //   }
    //   this.p_age = newAge;
    // };
    public set age(newAge: number) {
      if (newAge < 0 || newAge > 150) {
        console.error('netinkamas amžius');
        return;
      }
      this.p_age = newAge;
    }

    // public getAge = (): number => this.p_age;
    public get age() {
      return this.p_age;
    }
  }

  const person = new Person('Kuprius', 'Pilkaitis', 19);

  person.age = 20;

  console.log(person.age);
}

console.groupEnd();
