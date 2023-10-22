import React from "react";
import { Button, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { DASHBOARD } from "../../routes";
import { useLogout } from "../../hooks/auth";

export const Navbar = () => {
  const { logout, isLoading } = useLogout();
  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="facebook.400"
      height={16}
      zIndex={3}
      justify="center"
      //   bg="facebook.400"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Link color="white" as={RouterLink} to={DASHBOARD} fontWeight="bold">
          Home
        </Link>
        <Button
          ml="auto"
          colorScheme="facebook"
          isLoading={isLoading}
          onClick={logout}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};
