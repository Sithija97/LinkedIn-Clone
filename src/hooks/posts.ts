import { IPost } from "./../models/index";
import { useState } from "react";
import { uuidv4 } from "@firebase/util";
import { collection, doc, orderBy, query, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useToast } from "@chakra-ui/react";
import { useCollectionData } from "react-firebase-hooks/firestore";

interface Post {
  uid: string | undefined;
  text: string;
}

export const useAddPost = () => {
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);

  const addPost = async (post: Post) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "posts", id), {
      ...post,
      id,
      date: Date.now(),
      likes: [],
    });

    toast({
      title: "Post added successfully!",
      status: "success",
      isClosable: true,
      position: "top-right",
      duration: 5000,
    });

    setLoading(false);
  };

  return { addPost, isLoading };
};

export const usePosts = () => {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const [posts, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { posts, isLoading };
};
