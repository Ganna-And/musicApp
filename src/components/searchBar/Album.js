import React from 'react';
import { Flex, Text, Box, Stack } from '@chakra-ui/react';
import {AiOutlineClose} from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { selectUserPlaylist } from '../TrackListSlice';
import Playlist from './Playlist';

const Album = ({setIsAlbumsOpen}) => {

    const playlists = useSelector(selectUserPlaylist);
  return (
    <Box width='100%' justifyContent='center' alignItems='center' display={'flex'} height='100vh'>
    <Stack width='70%' backgroundColor='blackAlpha.500'>
    <Flex justifyContent="space-between" alignItems="center">
          <Text pl='45%'>My playlist</Text>
          <AiOutlineClose width={20} color="white" 
          onClick={()=>{setIsAlbumsOpen(false)}} />
        </Flex>
    
   {playlists.map(playlist=>(<Playlist  key={playlist.id} playlist={playlist}/>))} 
    </Stack> 
   
    </Box>
  )
}

export default Album
