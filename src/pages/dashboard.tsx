import React from "react";
import { AddPost, Posts } from "../components";
import { usePosts } from "../hooks/posts";
import { Center, Spinner } from "@chakra-ui/react";

export const Dashboard = () => {
  const { posts, isLoading: postsLoading } = usePosts();

  if (postsLoading)
    return (
      <Center my="10" w="100%" h="100vh">
        <Spinner />
      </Center>
    );

  return (
    <>
      <AddPost />
      <Posts posts={posts} />
    </>
  );
};
