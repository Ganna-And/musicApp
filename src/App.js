import { Flex, Img } from "@chakra-ui/react";
import "./App.css";
import guitarImg from '../src/img/54.jpg'
import PlayList from "./components/PlayList";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Flex 
      width= '100%' 
       justifyContent="center"
        alignItems="center"
        position='fixed'
        height='100px'>
        <Img className='logo' borderRadius='50%' ml='3%'
         src={guitarImg} alt='logo' boxShadow='1px 1px 3px black' />
        <SearchBar />
      </Flex>
      <Flex 
      direction={{ mb: "column", lg: "row" }} 
      justify='center' 
      width="full"
      mt='100px'
      mb='50px'
      flexGrow='1'
      minHeight='0'>
        <SearchResults style={{ flex: 1, minHeight: 0 }}/>
        <PlayList style={{ flex: 1, minHeight: 0 }}/>
      </Flex>
      <Footer/>
    </div>
  );
}

export default App;
