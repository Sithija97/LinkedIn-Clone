import {
  Center,
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { useLogin } from "../hooks/auth";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { REGISTER } from "../routes";

export const Login = () => {
  const { login, isLoading } = useLogin();
  const { register } = useForm();
  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Log In
        </Heading>

        <form onSubmit={() => {}}>
          <FormControl isInvalid={false} py="2">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="user@email.com" />
            <FormErrorMessage>This is an error message</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={false} py="2">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="password" />
            <FormErrorMessage>This is an error message</FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            colorScheme="facebook"
            size="md"
            w="full"
            isLoading={false}
            loadingText="Logging In"
          >
            Log In
          </Button>
        </form>
        <Text fontSize={"xlg"} align={"center"} mt="6">
          Don't have an accout?{" "}
          <Link
            color={"facebook.600"}
            _hover={{ background: "facebook.100" }}
            fontWeight={"medium"}
            textDecor={"underline"}
          >
            <RouterLink to={REGISTER}>Register</RouterLink>
          </Link>
        </Text>
      </Box>
    </Center>
  );
};
