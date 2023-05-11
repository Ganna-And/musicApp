import React, { useState } from 'react';
import { fetchSearchResults } from './TrackListSlice';

import { Input, InputLeftElement, InputGroup, Icon,  } from '@chakra-ui/react';
import { FaSearch} from 'react-icons/fa';
import { useDispatch } from 'react-redux';


const SearchBar = () => {
  const dispatch = useDispatch();
  const[term, setTerm] = useState('');

  const handleTermChange = (e)=>{
    setTerm(e.target.value);
  };
 
  const handleSearch = (term)=>{
    dispatch(fetchSearchResults(term))
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
    value={term}
    onChange={handleTermChange}
    onKeyDown={(e)=>{
      if(e.key ==='Enter'){
        handleSearch(term)
      }
    }}
    
    />
  </InputGroup>
  )
}

export default SearchBar
