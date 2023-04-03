import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage);
    return initialValue;
  };

  const [value, setValue] = useState(() => getValue());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
//Create a git repo on git hub

//deploy on vercel
