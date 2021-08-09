import { useState, FormEvent } from 'react';
import { getLastSearchLocation } from 'actions/getLastSearchLocation';
import { validateIpAddress } from 'helpers/validateIpAddress';
import { validateDomainName } from 'helpers/validateDomainName';
import Toggle from 'components/common/Toggle/Toggle';
import Button from 'components/common/Button/Button';
import Input from 'components/common/Input/Input';
import { SearchFormProps } from './SearchForm.types';

const SearchForm = ({
  setSearchList,
  setLastSearchLocation,
  setLastSearchLoading,
}: SearchFormProps) => {
  const [isIpInputType, setIsIpInputType] = useState<boolean>(true);

  const [inputValue, setInputValue] = useState<string>('');
  const [inputError, setInputError] = useState<string | null>(null);

  const handleInputError = () => {
    const isValueValid = isIpInputType
      ? validateIpAddress(inputValue)
      : validateDomainName(inputValue);

    if (isValueValid) {
      setInputError(null);
    }

    if (!isValueValid) {
      setInputError(
        isIpInputType ? 'Podany adres IP jest nieprawidłowy' : 'Podana domena jest nieprawidłowa'
      );
    }

    return isValueValid;
  };

  const toggleInputType = () => {
    setInputValue('');
    setInputError(null);
    setIsIpInputType((isIpInputType) => !isIpInputType);
  };

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);

    if (inputError) {
      handleInputError();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = handleInputError();

    if (isValid) {
      getLastSearchLocation({
        inputValue,
        setInputValue,
        setInputError,
        setLastSearchLoading,
        setSearchList,
        setLastSearchLocation,
      });
    }
  };

  return (
    <section className='flex flex-col items-center justify-center h-1/3 my-4 pb-6 border-2 border-green-700 rounded-lg px-10'>
      <h1 className='text-2xl font-medium text-center mb-3'>Wyszukaj lokalizację</h1>

      <form className='flex justify-center items-center relative' onSubmit={handleSubmit}>
        <Toggle
          label={isIpInputType ? 'Adres IP' : 'Domena'}
          toggle={toggleInputType}
          className='mr-5'
        />

        <Input
          type='text'
          label={isIpInputType ? 'Adres IP' : 'Domena'}
          placeholder={isIpInputType ? '255.255.255.255' : 'www.example.com'}
          value={inputValue}
          error={inputError}
          required
          onChange={handleInputChange}
        />

        <Button type='submit' className='ml-2'>
          Wyszukaj
        </Button>
      </form>
    </section>
  );
};

export default SearchForm;
