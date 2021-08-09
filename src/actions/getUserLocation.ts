import { Dispatch } from 'react';
import axios from 'axios';
import { ILocation } from '@types';
import { getUrl } from 'helpers/getUrl';

interface Props {
  setUserLoading: Dispatch<React.SetStateAction<boolean>>;
  setUserLocation: Dispatch<React.SetStateAction<ILocation | null>>;
}

export const getUserLocation = async ({ setUserLoading, setUserLocation }: Props) => {
  setUserLoading(true);

  const {
    data: { IPv4 },
  } = await axios.get(process.env.REACT_APP_USER_IP_URL || '');

  const { data } = await axios.get(getUrl(IPv4));

  setUserLocation(data);
  setUserLoading(false);
};
