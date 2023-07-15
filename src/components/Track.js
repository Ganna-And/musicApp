import React from "react";
import { Stack, Text, Flex, Icon } from "@chakra-ui/react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import {MdOutlinePreview} from 'react-icons/md'

const Track = ({ track, onAdd, onRemove , isRemoval, setIsPreviewOpen, onSelect}) => {
 
  const handlePreviewClick = () => {
    onSelect(track);
    setIsPreviewOpen(true);
    
  };

 
  return (
    <Flex
     border="1px solid"
      borderRadius={4} 
      mr={4} 
      ml={4}
      mb={2}
     >
      <Stack 
      width='100%'
      justify="start" >
      <Text align="start" ml={4} cursor="pointer" _hover={{ opacity: "0.5" }}>
        {track.name}
      </Text>
      <Flex
      fontSize='10pt'>
        <Text 
        ml={4} mr={2} 
        cursor="pointer"
         _hover={{ opacity: "0.5" }}
         fontSize='10pt'>
          {track.artist}
        </Text>
       <span>|</span>
        <Text ml={2} 
         fontSize='10pt'
         align='center'
         cursor="pointer" _hover={{ opacity: "0.5" }}>
          {track.album}
        </Text>
      </Flex>
    </Stack>

   
   
    {!isRemoval ?(
       <Flex align='center' m={4}>
       <Icon as ={MdOutlinePreview} 
       cursor="pointer" 
       _hover={{ opacity: "0.5" }}
       onClick={handlePreviewClick} />
    <Icon as={FaPlusSquare}
    cursor="pointer" 
    _hover={{ opacity: "0.5" }}
    onClick={()=>onAdd(track)}
    />
    </Flex>) : (
      <Flex align='center' m={4}>
      <Icon as={FaMinusSquare}
    cursor="pointer" 
    _hover={{ opacity: "0.5" }}
    onClick={()=>onRemove(track)}
    />
    </Flex>
    )}
    </Flex>
  );
};

export default Track;
