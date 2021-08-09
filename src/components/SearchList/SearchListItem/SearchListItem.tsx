import { SearchListItemProps } from './SearchListItem.types';

const SearchListItem = ({ ip, city }: SearchListItemProps) => (
  <li className='mb-2 text-center'>
    <span className='font-medium text-lg'>{city}</span> -{' '}
    <span className='text-sm opacity-70'>{ip}</span>
  </li>
);

export default SearchListItem;
