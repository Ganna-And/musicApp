
import { Flex, Text, Stack, Image, Icon } from "@chakra-ui/react";
import "./Preview.css";
import { useSelector } from "react-redux";
import { seletcTrackPreview } from "../TrackListSlice";
import { AiOutlineClose } from "react-icons/ai";

const Preview = ({ setIsPreviewOpen }) => {
  const trackPreview = useSelector(seletcTrackPreview);
 

  return (
    <div className="preview">
      {trackPreview && (
        <Flex
          justifyContent="center"
          alignItems="start"
          display="flex"
          width={["90%", "60%"]}
          borderRadius={15}
          m={["2%", "2%", "2%"]}
          bg="rgba(0,0,0, 0.6)"
        >
          <Image
            src={trackPreview.img}
            width={["20%", "20%", ""]}
            height="20%"
            margin="3%"
            borderRadius="5%"
          />

          <Stack width="100%" justify="start">
            <Text
              align="start"
              ml={4}
              mt={4}
              cursor="pointer"
              _hover={{ opacity: "0.5" }}
            >
              {trackPreview.name}
            </Text>
            <Flex fontSize="10pt">
              <Text
                ml={4}
                mr={2}
                cursor="pointer"
                _hover={{ opacity: "0.5" }}
                fontSize="10pt"
              >
                {trackPreview.artist}
              </Text>
              <span>|</span>
              <Text
                ml={2}
                mr={2}
                fontSize="10pt"
                mb={5}
                align="center"
                cursor="pointer"
                _hover={{ opacity: "0.5" }}
              >
                {trackPreview.album}
              </Text>
              <span>|</span>
               <Text
              ml={2}
              mr={2}
              fontSize="10pt"
              mb={5}
              align="center"
              cursor="pointer"
              _hover={{ opacity: "0.5" }}
            >
              Popularity:{trackPreview.popularity}
            </Text>
              <Text fontSize="10pt" mb={5} align="center"></Text>
            </Flex>
            <Stack>
             
            <Text>{trackPreview.albumId}</Text>
            <audio className="audio" controls>
              <source src={trackPreview.uri} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio> 
            </Stack>
           
          </Stack>
          <Icon
            as={AiOutlineClose}
            _hover={{ opacity: "0.5" }}
            onClick={() => setIsPreviewOpen(false)}
            mt={4}
            mr={4}
          />
        </Flex>
      )}
    </div>
  );
};

export default Preview;
