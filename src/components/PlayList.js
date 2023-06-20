import React from "react";
import TracksList from "./TracksList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Input, Flex } from "@chakra-ui/react";
import {
  clearPlaylist,
  onSaveSpotify,
  selectPlaylistTracks,
} from "./TrackListSlice";

const PlayList = () => {
  const dispatch = useDispatch();

  const playlist = useSelector(selectPlaylistTracks);
  const trackUris = playlist.map((track) => track.uri);

  const onSavePlaylist = ({ name, trackUris }) => {
    dispatch(onSaveSpotify(name, trackUris));
    dispatch(clearPlaylist());
  };

  const [name, setName] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSpotifyClick = () => {
    onSavePlaylist({ name, trackUris });
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width={["100%", "95%", "100%"]}
      bg="blackAlpha.400"
      mr={["2%", "2%", "5%"]}
      ml="1%"
      bgColor="rgba(0,0,0,0.6)"
    >
      <Input
        fontSize="17pt"
        width="80%"
        mt="2%"
        mb="2%"
        type="text"
        onChange={onNameChange}
        placeholder="Playlist Name"
        _placeholder={{ color: "white", fontSize: "17px", textAlign: "center" }}
      />
      <TracksList playlistName={name} tracks={playlist} isRemoval={true} />
      <Button
        bg="rgba(0,0,0, 0.5)"
        border="2px solid"
        width="80%"
        _hover={{ opacity: "0.5" }}
        onClick={handleSpotifyClick}
      >
        Save to spotify
      </Button>
    </Flex>
  );
};

export default PlayList;
