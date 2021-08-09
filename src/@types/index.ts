export enum LocalStoreItem {
  LastSearchLocation = 'LAST_SEARCH_LOCATION',
  searchList = 'SEARCH_LIST',
}

export interface ILocation {
  ip: string;
  country_name: string;
  region_name: string;
  city: string;
  latitude: number;
  longitude: number;
}
