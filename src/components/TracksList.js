import { Flex } from "@chakra-ui/react";
import React from "react";
import Track from "./Track";
import { useDispatch } from "react-redux/es/exports";
import { addTrack, removeTrack } from "./TrackListSlice";

const TracksList = ({tracks, isRemoval}) => {
  
    const dispatch = useDispatch();

    const onAdd =(track)=>{
        dispatch(addTrack(track));
         };
    const onRemove = (track)=>{
        dispatch(removeTrack(track))
    }     
  
    return (
       <Flex direction="column" 
       width='100%'
        m={{sm:'0', md:'0', lg:'1%'}}>
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
