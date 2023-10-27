import React from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../profile/avatar";
import { IPost } from "../../models";
import { DocumentData } from "firebase/firestore";
import { useAddComment } from "../../hooks/comments";

const validationSchema = Yup.object().shape({
  text: Yup.string().required(),
});
interface IProps {
  post: IPost | DocumentData | undefined;
}

export const NewComment = ({ post }: IProps) => {
  const { id: poistId } = post!;
  const { user, isLoading: authLoading } = useAuth();
  const { addComment, isLoading: commentLoading } = useAddComment({ poistId });

  const handleSubmit = (values: { text: string }) => {
    addComment(values.text);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
    },
  });

  return (
    <Box maxW="600px" mx="auto" py="6">
      <Flex padding="4">
        <Avatar user={user} size="sm" />
        <Box flex="1" ml="4">
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <Input
                id="text"
                name="text"
                size="sm"
                variant="flushed"
                placeholder="Write comment..."
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.text}
              />
            </Box>
            <Flex pt="2">
              <Button
                isLoading={commentLoading || authLoading}
                type="submit"
                colorScheme="teal"
                size="xs"
                ml="auto"
              >
                Add Comment
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
