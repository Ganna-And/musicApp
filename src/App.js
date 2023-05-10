
import { Flex } from '@chakra-ui/react';
import './App.css';
import PlayList from './components/PlayList';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import SearchResults from './components/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([
    {id:1, title:'haliVali', artist:'Paratruper', album:'bilo super'},
    {id:2, title:'Moi goda', artist:'Bogdan', album:'bilo bogatstvo'},
    {id:3, title:'haliVali', artist:'Paratruper', album:'bilo super'}]);

    const [playlistTracks, setPlaylistTracks] = useState([
      {id:4, title:'title1', artist:'artist1', album:'bilo6'},
      {id:5, title:'title2', artist:'artist2', album:'bilo5'},
      {id:6, title:'title3', artist:'artist3', album:'bilo4'}]);

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
    <div className='logo' >
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
        <SearchBar />
     <Flex 
     direction={{base:'column', lg:'row'}}
     width='full'>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <PlayList 
        playlistName={playlistName} 
        playlistTracks={playlistTracks}
         onRemove={onRemove} 
         isRemoval={true}
         onPlaylistNameChange={onPlaylistNameChange}/>
      </Flex>  
        
    </div>
    </div>
  );
}

export default App;
