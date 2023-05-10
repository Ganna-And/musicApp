
import { Flex } from '@chakra-ui/react';
import './App.css';
import PlayList from './components/PlayList';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className='logo' >
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
        <SearchBar />
     <Flex 
     direction={{base:'column', lg:'row'}}
     width='full'>
        <SearchResults/>
        <PlayList />
      </Flex>  
        
    </div>
    </div>
  );
}

export default App;
