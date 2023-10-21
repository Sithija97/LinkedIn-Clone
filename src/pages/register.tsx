import {
  Center,
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegister } from "../hooks/auth";
import { Link as RouterLink } from "react-router-dom";
import { LOGIN } from "../routes";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const Register = () => {
  const { register, isLoading } = useRegister();

  const handleSubmit = async (values: {
    username: string;
    email: string;
    password: string;
  }) => {
    const { username, email, password } = values;
    await register({ username, email, password, redirectTo: LOGIN });
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Register
        </Heading>

        <form onSubmit={formik.handleSubmit}>
          <FormControl
            py="2"
            isInvalid={
              formik.touched.username && formik.errors.username ? true : false
            }
          >
            <FormLabel>Username</FormLabel>
            <Input
              id="username"
              name="username"
              type="username"
              placeholder="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl
            py="2"
            isInvalid={
              formik.touched.email && formik.errors.email ? true : false
            }
          >
            <FormLabel>Email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="user@email.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl
            py="2"
            isInvalid={
              formik.touched.password && formik.errors.password ? true : false
            }
          >
            <FormLabel>Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            colorScheme="facebook"
            bg="facebook.400"
            size="md"
            w="full"
            isLoading={isLoading}
            loadingText="Signing Up"
          >
            Register
          </Button>
        </form>
        <Text fontSize={"xlg"} align={"center"} mt="6">
          Already have an account?{" "}
          <ChakraLink
            as={RouterLink}
            color={"facebook.600"}
            _hover={{ background: "facebook.100" }}
            fontWeight={"medium"}
            textDecor={"underline"}
            to={LOGIN}
          >
            Login
          </ChakraLink>
        </Text>
      </Box>
    </Center>
  );
};
