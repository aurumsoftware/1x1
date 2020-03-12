import { useState } from 'react';

export default function useLocalStorage(key: string, initialValue: any): any[] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(atob(item)) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: any): void => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, btoa(JSON.stringify(valueToStore)));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
