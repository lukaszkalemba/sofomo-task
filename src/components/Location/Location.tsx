import { memo } from 'react';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import LocationMap from './LocationMap/LocationMap';
import LocationInfo from './LocationInfo/LocationInfo';
import { LocationProps } from './Location.types';

const Location = memo(({ location, loading, noLocationCaption }: LocationProps) => {
  const getContent = () => {
    if (loading) {
      return <LoadingSpinner />;
    }

    if (location) {
      return (
        <>
          <LocationMap lat={location.latitude} lng={location.latitude} />
          <LocationInfo location={location} />
        </>
      );
    }

    return <h2>{noLocationCaption}</h2>;
  };

  return (
    <section className='h-2/5 flex justify-center items-center p-4 bg-green-200 border-2 border-green-700 rounded-lg'>
      {getContent()}
    </section>
  );
});

export default Location;
