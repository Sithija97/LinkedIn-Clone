import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

export const isUsernameExists = async (username: string) => {
  const queryObject = query(
    collection(db, "users"),
    where("username", "==", username)
  );
  const querySnapshot = await getDocs(queryObject);
  return querySnapshot.size > 0;
};
