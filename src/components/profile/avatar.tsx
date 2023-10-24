import React from "react";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { IUser } from "../../models";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../routes";
import { DocumentData } from "firebase/firestore";

interface IProps {
  user: IUser | DocumentData | null | undefined;
  size?: string;
}

export const Avatar = ({ user, size = "xl" }: IProps) => {
  return (
    <ChakraAvatar
      name={user?.username}
      size={size}
      src={user?.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
      as={Link}
      to={`${PROTECTED}/profile/${user?.id}`}
    />
  );
};
