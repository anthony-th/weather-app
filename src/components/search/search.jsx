import { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from '../../data/api';

const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
    .then((response) => response.json())
    .then((response) => {
      return {
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const searchStyles = {
    control: (baseStyles) => ({
      ...baseStyles,
      borderColor: 'transparent',
      boxShadow: '10px 6px 14px 3px rgba(0, 0, 0, 0.3)',
      backgroundColor: 'transparent',
      '&:hover': {
        borderColor: '#EE1F80',
      },
      cursor: 'pointer',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      cursor: 'pointer',
      backgroundColor: state.isFocused ? '#EE1F80' : 'transparent',
      paddingLeft: '45px',
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: '#333333',
      color: '#d1d1d1',
      boxShadow: '10px 6px 14px 3px rgba(0, 0, 0, 0.3)',
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: '#d1d1d1',
      paddingLeft: '35px',
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: '#e1e1e1',
      paddingLeft: '35px',
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      color: '#e1e1e1',
      paddingLeft: '35px',
    }),
  };

  return (
    <AsyncPaginate
      placeholder='Search for city...'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={searchStyles}
    />
  );
};

export default Search;