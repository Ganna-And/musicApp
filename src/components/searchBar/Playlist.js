import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';


const Playlist = ({playlist}) => {

  
  return (
    <div>
      <Box width='90%' border='1px white solid' m={1}>
      <Flex justify={'center'} align='center' >
    <Text ml={2} mr={2} _hover={{opacity:'0.5'}}>{playlist.name}</Text>
    <span>|</span>
    <Text ml={2} mr={2} _hover={{opacity:'0.5'}}>Number of tracks:{playlist.tracks}</Text>
    <span>|</span>
    <Text  ml={2} mr={2} _hover={{opacity:'0.5'}}>Owner: {playlist.owner}</Text>
    </Flex>
     </Box>
    </div>
  )
}

export default Playlist
