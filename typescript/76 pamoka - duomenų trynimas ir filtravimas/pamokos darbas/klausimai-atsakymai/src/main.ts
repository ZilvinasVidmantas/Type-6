/* eslint-disable no-inner-declarations */
/* eslint-disable no-empty */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
console.group('1. Objekto savybių reikšmių pavertimas string reikšmėmis');
{
  type Student = {
    name: string,
    surname: string,
    average: number,
    course: number,
  };

  type Car = {
    brand: string,
    model: string,
    engineVolume: number,
    year: number,
  };

  type StringableObject = { [key: string]: any };

  type StringifiedProps<Type extends StringableObject> = {
    [Key in keyof Type]: string
  };

  const stringifyStudentProps1 = <Type>(obj: Type): StringifiedProps<Type> => {
    const result: Partial<StringifiedProps<Type>> = {};
    const keyValuePairArr = Object.entries(obj) as [keyof Type, any][];

    keyValuePairArr.forEach(([key, value]) => {
      result[key] = typeof value === 'string' ? value : String(value);
    });

    return result as StringifiedProps<Type>;
  };

  const stringifyStudentProps2 = <Type>(obj: Type): StringifiedProps<Type> => {
    const keyValuePairArr = Object.entries(obj) as [keyof Type, any][];

    return keyValuePairArr.reduce<Partial<StringifiedProps<Type>>>((prevObj, [key, value]) => ({
      ...prevObj,
      [key]: typeof value === 'string' ? value : String(value),
    }), {}) as StringifiedProps<Type>;
  };

  const stringifiedStudentProps = stringifyStudentProps1({
    name: 'Bordas',
    surname: 'Lakstutis',
    average: 8,
    course: 2,
  } as Student);

  const stringifiedCarProps = stringifyStudentProps2({
    brand: 'Ford',
    model: 'Mondeo',
    engineVolume: 2.5,
    year: 2008,
  } as Car);

  const stringifiedPersonProps = stringifyStudentProps1({
    name: 'Bordas',
    surname: 'Lakstutis',
    course: 2,
    age: 6,
    height: 180,
    width: 80,
  });

  console.log({
    stringifiedStudentProps,
    stringifiedCarProps,
    stringifiedPersonProps,
  });
}

console.groupEnd();
