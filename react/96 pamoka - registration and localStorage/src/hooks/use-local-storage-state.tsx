import { useState, useEffect } from 'react';

type UseLocalStorageState = <T>(initialValue: T, name: string, deleteOnUnmount?: boolean) => [T, (newValue: T) => void];

const useLocalStorageState: UseLocalStorageState = (initialValue, name, deleteOnUnmount = false) => {
  const [value, setValue] = useState(initialValue);

  const handleUnmount = (ev: BeforeUnloadEvent) => {
    ev.preventDefault();
    if (deleteOnUnmount) {
      localStorage.removeItem(name);
    }
  };

  useEffect(() => {
    const existingValue = localStorage.getItem(name);
    if (existingValue) {
      const newValue = JSON.parse(existingValue) as typeof value;
      setValue(newValue);
    }

    window.addEventListener('beforeunload', handleUnmount);

    return () => {
      window.removeEventListener('beforeunload', handleUnmount);
    };
  }, []);

  useEffect(() => {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(name, stringifiedValue);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorageState;
