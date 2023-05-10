import React, { useState } from 'react';

import { Input, InputLeftElement, InputGroup, Icon,  } from '@chakra-ui/react';
import { FaSearch} from 'react-icons/fa';



const SearchBar = () => {

  const[query, setQuery] = useState('');

  const handleQueryChange = (e)=>{
    setQuery(e.target.value);
  };
 
  const handleSearch = (query)=>{
    console.log(query)
  }
 
  return (
    <InputGroup
    m={4}
    justifyContent='center'
    bg='whiteAlpha.400' 
    width={{base: '90%',  md:'70%'} }
     >
    <InputLeftElement
      pointerEvents='none'
      children={<Icon as={FaSearch} color='gray.300' />}
    />
    <Input type='search' 
    placeholder='search'
    _placeholder={{color: 'white'}} 
    color='white'
    value={query}
    onChange={handleQueryChange}
    onKeyDown={(e)=>{
      if(e.key ==='Enter'){
        handleSearch(query)
      }
    }}
    
    />
  </InputGroup>
  )
}

export default SearchBar
