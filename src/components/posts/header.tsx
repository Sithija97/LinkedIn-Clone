import React from "react";
import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { IPost } from "../../models";
import { DocumentData } from "firebase/firestore";
import { useUser } from "../../hooks/users";
import { Avatar } from "../profile/avatar";
import { UsernameButton } from "../profile/username.btn";

interface IProps {
  post: IPost | DocumentData | undefined;
}

export const Header = ({ post }: IProps) => {
  const { date, uid } = post!;
  const { user, isLoading } = useUser(uid);

  if (isLoading)
    return (
      <Center my="10">
        <Spinner />
      </Center>
    );
  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="facebook.200"
      p="3"
      bg="gray.50"
    >
      <Avatar user={user} size="md" />

      <Box ml="4">
        <UsernameButton user={user!} />
        <Text fontSize="sm" color="gray.500">
          {formatDistanceToNow(date)} ago
        </Text>
      </Box>
    </Flex>
  );
};
