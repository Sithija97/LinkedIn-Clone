import { Box, Button, Center, Code, Spinner, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { PROTECTED, USERS } from "../../routes";
import { useAuth } from "../../hooks/auth";
import { IUser } from "../../models";
import { Avatar } from "../profile/avatar";

interface IProps {
  user: IUser | null;
  isLoading: boolean;
}

const ActiveUser = () => {
  const { user, isLoading }: IProps = useAuth();
  if (isLoading)
    return (
      <Center my="10">
        <Spinner />
      </Center>
    );
  return (
    <Stack align="center" spacing="5" my="8">
      <Avatar user={user} />
      <Code>@{user?.username}</Code>
      <Button
        colorScheme="facebook"
        w="full"
        as={Link}
        to={`${PROTECTED}/profile/${user?.id}`}
      >
        Edit Profile
      </Button>
    </Stack>
  );
};

export const Sidebar = () => {
  return (
    <Box
      px="6"
      height="85vh"
      w="100%"
      maxW="300px"
      borderLeft="1px solid"
      borderLeftColor="facebook.100"
      position={"sticky"}
      top="16"
      display={{ base: "none", md: "block" }}
    >
      <ActiveUser />
      <Box textAlign="center">
        <Box as="ul" borderBottom="2px solid" borderColor="facebook.200" />
        <Button
          variant="outline"
          colorScheme="facebook"
          as={Link}
          to={USERS}
          mt="4"
          size="sm"
        >
          ALL USERS
        </Button>
      </Box>
    </Box>
  );
};
