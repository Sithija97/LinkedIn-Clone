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
import { useLogin } from "../hooks/auth";
import { Link as RouterLink } from "react-router-dom";
import { REGISTER } from "../routes";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Log In
        </Heading>

        <form onSubmit={formik.handleSubmit}>
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
            size="md"
            w="full"
            isLoading={false}
            loadingText="Logging In"
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
            to={REGISTER}
          >
            Login
          </ChakraLink>
        </Text>
      </Box>
    </Center>
  );
};
