import React from "react";
import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import { Post } from "./post";
import { IPost } from "../../models";

interface IProps {
  posts: IPost[] | DocumentData[] | undefined;
  isLoading: boolean;
}

export const Posts = ({ posts, isLoading }: IProps) => {
  if (isLoading)
    return (
      <Center my="10" w="100%" h="100vh">
        <Spinner />
      </Center>
    );

  return (
    <Box px="4">
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
