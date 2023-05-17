import { useState, useEffect } from "react";

export const useLocalStorageState = <T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] => {
  // Get the initial state value from local storage or use the default value
  const [state, setState] = useState<T>(() => {
    let storedState = defaultValue;
    if (typeof localStorage !== "undefined") {
      const storedValue = localStorage.getItem(key);
      storedState = storedValue ? JSON.parse(storedValue) : defaultValue;
    }
    return storedState;
  });

  // Update local storage whenever the state value changes
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  // Return the state value and a function to update it
  return [state, setState];
};
