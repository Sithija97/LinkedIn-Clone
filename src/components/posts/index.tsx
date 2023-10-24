import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import { Post } from "./post";
import { IPost } from "../../models";

interface IProps {
  posts: IPost[] | DocumentData[] | undefined;
}

export const Posts = ({ posts }: IProps) => {
  return (
    <Box
      px="4"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {posts?.length === 0 ? (
        <Text textAlign="center" fontSize="large">
          No posts yet...
        </Text>
      ) : (
        posts?.map((post: IPost | DocumentData) => (
          <Post key={post.id} post={post} />
        ))
      )}
    </Box>
  );
};
