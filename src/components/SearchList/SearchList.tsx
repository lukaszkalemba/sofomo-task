import { v4 } from 'uuid';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import ListItem from './SearchListItem/SearchListItem';
import { SearchListProps } from './SearchList.types';

const SearchList = ({ searchList, loading }: SearchListProps) => {
  const getContent = () => {
    if (loading) {
      return <LoadingSpinner />;
    }

    if (searchList.length) {
      return (
        <ul>
          {searchList.map(({ city, ip }) => (
            <ListItem key={v4()} city={city} ip={ip} />
          ))}
        </ul>
      );
    }

    return <p className='text-center'>Wyszukaj lokalizację aby pojawiła się na liście</p>;
  };

  return (
    <aside className='flex flex-col w-1/4 h-full ml-4 p-8 border-2 border-green-700 rounded-lg'>
      <h2 className='text-xl font-semibold text-center mb-4'>Ostatnie wyszukania</h2>
      <div className='flex-grow flex flex-col items-center overflow-auto'>{getContent()}</div>
    </aside>
  );
};

export default SearchList;
