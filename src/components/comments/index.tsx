import { Box, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import { Post } from "../posts/post";
import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/posts";
import { NewComment } from "./new.comment";

export const Comments = () => {
  const { id } = useParams();
  const { post, isLoading } = usePost(id!);
  if (isLoading)
    return (
      <Center my="10" w="100%" h="100vh">
        <Spinner />
      </Center>
    );
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Post post={post} />
      <NewComment />
    </Box>
  );
};
