import { Flex, Img, Stack } from "@chakra-ui/react";
import "./App.css";
import guitarImg from '../src/img/54.jpg'
import PlayList from "./components/PlayList";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import Preview from "./components/preview/Preview";
import { useState } from "react";
import Album from "./components/searchBar/Album";




function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isAlbumsOpen, setIsAlbumsOpen] = useState(false)

  
  return (
      <div className="App">

       {isPreviewOpen ? <Preview setIsPreviewOpen={setIsPreviewOpen}/> :
       isAlbumsOpen ? <Album setIsAlbumsOpen={setIsAlbumsOpen} /> : (
        <>
       <Flex 
      width= '100%' 
       justifyContent="center"
        alignItems="center"
        position='fixed'
        height='100px'>
        <Img className='logo' borderRadius='50%' ml='3%'
         src={guitarImg} alt='logo' boxShadow='1px 1px 3px black' />
        <SearchBar isAlbumsOpen={isAlbumsOpen} setIsAlbumsOpen={setIsAlbumsOpen} />
      </Flex>
      <Stack>
      
        </Stack>
      <Flex 
      direction={{ mb: "column", lg: "row" }} 
      justify='center' 
      width="full"
      mt='100px'
      mb='50px'
      flexGrow='1'
      minHeight='0'>
        <SearchResults setIsPreviewOpen={setIsPreviewOpen} style={{ flex: 1, minHeight: 0 }}/>
        <PlayList style={{ flex: 1, minHeight: 0 }}/>
      </Flex>
      </>
       ) } 
      <Footer/>
    </div>
  );
}

export default App;
