import { uuidv4 } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";
import { useToast } from "@chakra-ui/react";

export const useAddComment = ({ poistId }: any) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const addComment = async (comment: string) => {
    setLoading(true);
    const id = uuidv4();
    const date = Date.now();
    const docRef = doc(db, "comments", id);
    await setDoc(docRef, { comment, id, poistId, date });

    toast({
      title: "Comment added!",
      status: "success",
      isClosable: true,
      position: "top-right",
      duration: 5000,
    });
    setLoading(false);
  };

  return { addComment, isLoading };
};
