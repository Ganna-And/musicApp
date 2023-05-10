import React from 'react';
import TracksList from './TracksList';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

import { Button, Input, Stack,  } from '@chakra-ui/react';
import { selectPlaylistTracks } from './TrackListSlice';

const PlayList = () => {

  const playlist = useSelector(selectPlaylistTracks);

  const onSavePlaylist =()=>{
  playlist.map(track=> track.uri)
}

const [playlistName, setPlaylistName] = useState('');

const onPlaylistNameChange=(e)=>{
  setPlaylistName(e.target.value)
}

 
  return (
    <Stack
    width={{base: '90%',  md:'70%'} }
    height='50vh'
    
    bg='blackAlpha.400'
    mr={10}
    ml={10}>
    <Input fontSize='17pt' type='text'  onChange={onPlaylistNameChange} placeholder='Playlist Name'/>
    <Stack width='100%'>
    <TracksList  playlistName={playlistName} tracks={playlist} isRemoval={true}/>
    </Stack>
    <Button bg='' 
    border='2px solid'
    _hover={{opacity:'0.5'}}
    onClick={onSavePlaylist}
    >
        Save to spotify
    </Button>
    </Stack>
  )
}

export default PlayList
