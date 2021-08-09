import { useEffect, useState } from 'react';
import { LocalStoreItem, ILocation } from '@types';
import { usePersistState } from 'hooks/usePersistState';
import { getUserLocation } from 'actions/getUserLocation';
import SearchList from 'components/SearchList/SearchList';
import SearchForm from 'components/SearchForm/SearchForm';
import Location from 'components/Location/Location';

const App = () => {
  const [userLocation, setUserLocation] = useState<ILocation | null>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);

  const [lastSearchLocation, setLastSearchLocation] = usePersistState<ILocation | null>({
    defaultValue: null,
    localStorageItem: LocalStoreItem.LastSearchLocation,
  });

  const [lastSearchLoading, setLastSearchLoading] = useState<boolean>(false);

  const [searchList, setSearchList] = usePersistState<ILocation[]>({
    defaultValue: [],
    localStorageItem: LocalStoreItem.searchList,
  });

  useEffect(() => {
    getUserLocation({
      setUserLoading,
      setUserLocation,
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      LocalStoreItem.LastSearchLocation,
      JSON.stringify(lastSearchLocation)
    );
  }, [lastSearchLocation]);

  useEffect(() => {
    window.localStorage.setItem(LocalStoreItem.searchList, JSON.stringify(searchList));
  }, [searchList]);

  return (
    <main className='w-full h-full flex p-14'>
      <div className='flex flex-col justify-between flex-grow'>
        <Location
          location={userLocation}
          loading={userLoading}
          noLocationCaption='Twoja lokalizacja nie została znaleziona'
        />

        <SearchForm
          setSearchList={setSearchList}
          setLastSearchLocation={setLastSearchLocation}
          setLastSearchLoading={setLastSearchLoading}
        />

        <Location
          location={lastSearchLocation}
          loading={lastSearchLoading}
          noLocationCaption='Wyszukaj lokalizację aby wyświetlić informacje o niej '
        />
      </div>

      <SearchList searchList={searchList} loading={lastSearchLoading} />
    </main>
  );
};

export default App;
