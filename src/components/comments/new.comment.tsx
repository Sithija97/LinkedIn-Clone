import React from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../profile/avatar";

export const NewComment = () => {
  const { user, isLoading: authLoading } = useAuth();
  return (
    <Box maxW="600px" mx="auto" py="6">
      <Flex padding="4">
        <Avatar user={user} size="sm" />
        <Box flex="1" ml="4">
          <form onSubmit={() => {}}>
            <Box>
              <Input
                size="sm"
                variant="flushed"
                placeholder="Write comment..."
                autoComplete="off"
              />
            </Box>
            <Flex pt="2">
              <Button
                // isLoading={commentLoading || authLoading}
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
