import { Flex } from "@chakra-ui/react";
import React from "react";
import Track from "./Track";
const TracksList = ({tracks, onAdd, onRemove, isRemoval}) => {
  
  
    return (
       <Flex direction="column" mr={4} ml={4} mb={1}>
            {tracks.map(track=>(
                <Track
                key={track.id}
                track={track}
                onAdd={onAdd}
                onRemove={onRemove}
                isRemoval={isRemoval}
                 />
            ))}
            
       </Flex> 
  );
};

export default TracksList;
