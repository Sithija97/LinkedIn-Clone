import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "../../routes";
import { useAuth } from "../../hooks/auth";
import { Navbar, Sidebar } from "../index";
import { Box, Center, Flex, Spinner } from "@chakra-ui/react";

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user, isLoading, navigate]);

  if (isLoading)
    return (
      <Center my="10" w="100%" h="100vh">
        <Spinner />
      </Center>
    );

  return (
    <>
      <Navbar />
      <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
        <Box w="900px">
          <Outlet />
        </Box>
        <Sidebar />
      </Flex>
    </>
  );
};
