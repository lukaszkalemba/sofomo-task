import { SetStateAction, Dispatch } from 'react';
import { ILocation } from '@types';

export interface SearchFormProps {
  setSearchList: Dispatch<SetStateAction<ILocation[]>>;
  setLastSearchLocation: Dispatch<SetStateAction<ILocation | null>>;
  setLastSearchLoading: Dispatch<React.SetStateAction<boolean>>;
}
