import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import TracksList from './TracksList';
import { useState } from 'react';

const SearchResults = ({ searchResults, onAdd}) => {
 
  return (
    <Stack 
    display="flex"
    width={{base: '80%',  md:'70%'} }
    height='100vh'
    mr={10}
    ml={10}
    bg='blackAlpha.400'>
     <Text> 
        Search Results

     </Text>
      
      <TracksList tracks={searchResults} onAdd={onAdd} />
      </Stack>  
      
  )
}

export default SearchResults
