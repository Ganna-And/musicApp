<Box width="full" display="flex" bg='blackAlpha.300'>
      <Stack width="50%" m={3}>
        <Flex
          direction="column"
          bg="blackAlpha.500"
          border="2px solid"
          borderRadius={5}
          textAlign="start"
        >
          <Text fontSize="1rem" ml={3}>
            {tracks.id}
          </Text>
          <Text fontSize="1rem" ml={3}>
            artist1 | album1
          </Text>
        </Flex>

        <Flex
          direction="column"
          bg="blackAlpha.500"
          border="2px solid"
          borderRadius={5}
          textAlign="start"
        >
          <Text fontSize="1rem" ml={3}>
            Song1
          </Text>
          <Text fontSize="1rem" ml={3}>
            artist1 | album1
          </Text>
        </Flex>

        <Flex
          direction="column"
          bg="blackAlpha.500"
          border="2px solid"
          borderRadius={5}
          textAlign="start"
        >
          <Text fontSize="1rem" ml={3}>
            Song1
          </Text>
          <Text fontSize="1rem" ml={3}>
            artist1 | album1
          </Text>
        </Flex>
      </Stack>
      <Stack>
        <Flex>Playlist</Flex>
        {/* <Playlist /> */}
      </Stack>
    </Box>