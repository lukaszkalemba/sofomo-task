import { LocationInfoProps } from './LocationInfo.types';

const LocationInfo = ({ location: { ip, country_name, region_name, city } }: LocationInfoProps) => (
  <article className='w-1/3 flex flex-col justify-center items-center'>
    <h2 className='text-2xl font-medium mb-2'>{city}</h2>
    <p className='text-lg mb-1'>{region_name}</p>
    <p className='text-lg'>{country_name}</p>
    <p className='text-sm mt-3 opacity-70'>{ip}</p>
  </article>
);

export default LocationInfo;
