import React from 'react'
import {Flex, Text } from '@chakra-ui/react'
import TracksList from './TracksList';
import {  useSelector} from 'react-redux';
import { selectSearchResults } from './TrackListSlice';


const SearchResults = () => {
 const results = useSelector(selectSearchResults);
 

 

  return (
    <Flex 
    flexDirection='column'
    display="flex"
    width={['80%', '95%']}
    ml={['2%', '2%', '5%']}
    bg='rgba(0,0,0, 0.6)'>
     <Text textAlign='center' mt='2%' > 
        Search Results
     </Text>
      
      <TracksList tracks={results} />
      </Flex>  
      
  )
}

export default SearchResults
