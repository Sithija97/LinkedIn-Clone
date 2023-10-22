import React from "react";
import { AddPost, Posts } from "../components";
import { usePosts } from "../hooks/posts";

export const Dashboard = () => {
  const { posts, isLoading: postsLoading } = usePosts();

  return (
    <>
      <AddPost />
      <Posts posts={posts} isLoading={postsLoading} />
    </>
  );
};
