import { ILocation } from '@types';

export interface LocationProps {
  location: ILocation | null;
  loading: boolean;
  noLocationCaption: string;
}
