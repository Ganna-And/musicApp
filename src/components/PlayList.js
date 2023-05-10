import React from 'react';
import TracksList from './TracksList';
import { useState } from 'react';

import { Button, Input, Stack,  } from '@chakra-ui/react';

const PlayList = () => {

  const [playlistTracks, setPlaylistTracks] = useState([
    {id:4, title:'title1', artist:'artist1', album:'bilo6'},
    {id:5, title:'title2', artist:'artist2', album:'bilo5'},
    {id:6, title:'title3', artist:'artist3', album:'bilo4'}]);

  const onSavePlaylist =()=>{
  playlistTracks.map(track=> track.uri)
}

const [playlistName, setPlaylistName] = useState('');

const onPlaylistNameChange=(e)=>{
  setPlaylistName(e.target.value)
}

const addTrack=(track)=>{
  if(playlistTracks.find((savedTrack)=>savedTrack.id === track.id)){
   console.log(track.id)
   return;
  } else{
   setPlaylistTracks((prev)=>
   [  ...prev,
     track]
   )
  }
 }
 const onRemove = (track)=>{
   setPlaylistTracks((prev)=>
     prev.filter((extraTrack)=> extraTrack.id !== track.id)
   )
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
    <TracksList  playlistName={playlistName} tracks={playlistTracks} onRemove={onRemove} isRemoval={true} onAdd={addTrack}/>
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
