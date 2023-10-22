import React from "react";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { IUser } from "../../models";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../routes";

interface IProps {
  user: IUser | null;
}

export const Avatar = ({ user }: IProps) => {
  return (
    <ChakraAvatar
      name={user?.username}
      size="xl"
      src={user?.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
      as={Link}
      to={`${PROTECTED}/profile/${user?.id}`}
    />
  );
};
