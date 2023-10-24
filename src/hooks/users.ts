import { doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

export const useUser = (id: string) => {
  const q = doc(db, "users", id);
  const [user, isLoading] = useDocumentData(q);
  return { user, isLoading };
};
