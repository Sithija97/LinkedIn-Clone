import React from "react";
import { IUser } from "../../models";
import { DocumentData } from "firebase/firestore";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../routes";

interface IProps {
  user: IUser | DocumentData | undefined;
}

export const UsernameButton = ({ user }: IProps) => {
  return (
    <Button
      as={Link}
      to={`${PROTECTED}/profile/${user?.id}`}
      colorScheme="teal"
      variant="link"
    >
      {user?.username}
    </Button>
  );
};
