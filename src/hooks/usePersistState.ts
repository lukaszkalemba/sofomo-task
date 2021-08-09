import { useState, Dispatch, SetStateAction } from 'react';

interface Props {
  defaultValue: unknown;
  localStorageItem: string;
}

export const usePersistState = <T>({
  defaultValue,
  localStorageItem,
}: Props): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    const value = window.localStorage.getItem(localStorageItem);
    return value ? JSON.parse(value) : defaultValue;
  });

  return [state, setState];
};
