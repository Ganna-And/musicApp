import React, { useState } from "react";
import { fetchSearchResults, fetchUserPlaylists } from "../TrackListSlice";

import { Icon, Input, InputGroup, InputLeftElement ,Button, Stack} from "@chakra-ui/react";
import { FaSearch} from "react-icons/fa";
import { useDispatch } from "react-redux";


const SearchBar = ({ setIsAlbumsOpen}) => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const handleTermChange = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const handleSearch = (term) => {
    dispatch(fetchSearchResults(term))
  };

  const handlePlaylists =()=>{
    dispatch(fetchUserPlaylists());
    setIsAlbumsOpen(true)
  }

  return (
        <Stack width={{ base: "90%", md: "70%" }} mt={4}
        ml={4}>
          <InputGroup
            
            justifyContent="center"
            bg="whiteAlpha.400"
            width={{ base: "90%", md: "70%" }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaSearch} color="black" />}
            />
            <Input
              type="search"
              placeholder="search"
              _placeholder={{ color: "rgba(0,0,0,0.8)" }}
              color="rgba(0,0,0,0.8)"
              boxShadow="2px 2px 4px black"
              value={term}
              onChange={handleTermChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(term);
                }
              }}
            />
          </InputGroup>

          <Button
            mb={4}
            width='fit-content'
            height='auto'
            paddingInline={3}
            paddingBottom={1}
            paddingTop={1}
          /*   padding={1} */
            backgroundColor={"blackAlpha.700"}
            _hover={{ backgroundColor: "blackAlpha.300" }}
            onClick={handlePlaylists}
          >
            Local albums
          </Button>
        </Stack>
      )
    }
   


export default SearchBar;
