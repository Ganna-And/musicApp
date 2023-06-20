import React from "react";
import { Stack, Text, Flex, Icon } from "@chakra-ui/react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
const Track = ({ track, onAdd, onRemove , isRemoval}) => {
 
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
        {track.title}
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
    <Flex align='center' m={4}>
    {!isRemoval ?(<Icon as={FaPlusSquare}
    cursor="pointer" 
    _hover={{ opacity: "0.5" }}
    onClick={()=>onAdd(track)}
    />) : (
      <Icon as={FaMinusSquare}
    cursor="pointer" 
    _hover={{ opacity: "0.5" }}
    onClick={()=>onRemove(track)}
    />
    )}
    </Flex>
    </Flex>
  );
};

export default Track;
