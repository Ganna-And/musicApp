import React from 'react';
import TracksList from './TracksList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input, Stack,  } from '@chakra-ui/react';
import { clearPlaylist,onSaveSpotify, selectPlaylistTracks } from './TrackListSlice';


const PlayList = () => {
 const dispatch = useDispatch();

  const playlist = useSelector(selectPlaylistTracks);
  

  const onSavePlaylist =({name, trackUris})=>{
    dispatch(onSaveSpotify(name, trackUris));
    dispatch(clearPlaylist())
}

const [name, setName] = useState('');

const onNameChange=(e)=>{
  setName(e.target.value)
};

const handleSpotifyClick=()=>{
onSavePlaylist(name, playlist.map(track=> track.uri))
}


 
  return (
    <Stack
    width={{base: '90%',  md:'70%'} }
    height='50vh'
    
    bg='blackAlpha.400'
    mr={10}
    ml={10}>
    <Input fontSize='17pt' type='text'  onChange={onNameChange} placeholder='Playlist Name'/>
    <Stack width='100%'>
    <TracksList  playlistName={name} tracks={playlist} isRemoval={true}/>
    </Stack>
    <Button bg='' 
    border='2px solid'
    _hover={{opacity:'0.5'}}
    onClick={handleSpotifyClick}
    >
        Save to spotify
    </Button>
    </Stack>
  )
}

export default PlayList
