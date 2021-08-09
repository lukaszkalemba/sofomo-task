import GoogleMapReact from 'google-map-react';
import LocationMapMarker from './LocationMapMarker/LocationMapMarker';
import { LocationMapProps } from './LocationMap.types';

const DEFAULT_ZOOM = 2;

const LocationMap = ({ lat, lng }: LocationMapProps) => (
  <div className='h-full w-3/5'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '' }}
      defaultCenter={{ lat, lng }}
      defaultZoom={DEFAULT_ZOOM}
    >
      <LocationMapMarker lat={lat} lng={lng} />
    </GoogleMapReact>
  </div>
);

export default LocationMap;
