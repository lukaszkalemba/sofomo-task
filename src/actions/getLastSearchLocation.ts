import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { ILocation } from '@types';
import { getUrl } from 'helpers/getUrl';

interface Props {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setInputError: Dispatch<SetStateAction<string | null>>;
  setLastSearchLoading: Dispatch<SetStateAction<boolean>>;
  setSearchList: Dispatch<SetStateAction<ILocation[]>>;
  setLastSearchLocation: Dispatch<SetStateAction<ILocation | null>>;
}

export const getLastSearchLocation = async ({
  inputValue,
  setInputValue,
  setInputError,
  setLastSearchLoading,
  setSearchList,
  setLastSearchLocation,
}: Props) => {
  setLastSearchLoading(true);
  setInputValue('');

  try {
    const { data }: { data: ILocation } = await axios.get(getUrl(inputValue));

    if (!data.city) {
      setInputError('Nie znaleziono takiej lokalizacji');
      setLastSearchLoading(false);

      return;
    }

    setLastSearchLocation(data);
    setSearchList((prevList: ILocation[]) => [data, ...prevList]);
  } catch (error) {
    setInputError('Nie znaleziono takiej lokalizacji');
  }

  setLastSearchLoading(false);
};
