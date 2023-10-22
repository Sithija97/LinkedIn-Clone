import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IPost } from "../../models";
import { DocumentData } from "firebase/firestore";

interface IProps {
  post: IPost | DocumentData;
}

export const Post = ({ post }: IProps) => {
  const { text } = post;
  return (
    <Box p="2" maxW="600px">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        {/* header */}
        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize="md">
            {text}
          </Text>
        </Box>
        {/* actions */}
      </Box>
    </Box>
  );
};
