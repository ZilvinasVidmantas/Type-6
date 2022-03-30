export type StringifiedProps<T extends Object> = {
  [Key in keyof T]: string
};

const stringifyProps = <Type extends Object>(
  obj: Type,
): StringifiedProps<Type> => {
  const keyValueArray = Object.entries(obj) as [keyof Type, any][];

  return keyValueArray.reduce<Partial<StringifiedProps<Type>>>((prevObj, [key, value]) => ({
    ...prevObj,
    [key]: String(value),
  }), {}) as StringifiedProps<Type>;
};

export default stringifyProps;
