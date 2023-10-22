import React from "react";
import { Box, Button, HStack, Heading, Textarea } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddPost } from "../../hooks/posts";
import { useAuth } from "../../hooks/auth";

const validationSchema = Yup.object().shape({
  text: Yup.string().required(),
});

export const AddPost = () => {
  const { addPost, isLoading: addingLoading } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  const handleSubmit = async ({ text }: { text: string }) => {
    addPost({
      uid: user?.id,
      text,
    });
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={formik.handleSubmit}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button
            colorScheme="facebook"
            type="submit"
            isLoading={authLoading || addingLoading}
            loadingText="Posting"
          >
            Post
          </Button>
        </HStack>
        <Textarea
          id="text"
          name="text"
          as={TextareaAutosize}
          resize="none"
          mt="5"
          placeholder="Create a nre post..."
          minRows={3}
          onChange={formik.handleChange}
          value={formik.values.text}
        />
      </form>
    </Box>
  );
};
