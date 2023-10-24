import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment, FaComment, FaTrash } from "react-icons/fa";
import { IPost } from "../../models";
import { DocumentData } from "firebase/firestore";
import { useAuth } from "../../hooks/auth";
import { useDeletePost, useToggleLike } from "../../hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../routes";

interface IProps {
  post: IPost | DocumentData | undefined;
}

export const Actions = ({ post }: IProps) => {
  const { likes, id } = post!;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes?.includes(user?.id);

  const config = {
    id,
    isLiked,
    uid: user?.id,
  };

  const { toggleLike, isLoading: likeLoading } = useToggleLike(config);
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);

  return (
    <Flex p="2">
      <Flex alignItems="center">
        <IconButton
          onClick={toggleLike}
          aria-label=""
          size="md"
          colorScheme="red"
          variant="ghost"
          icon={isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          isRound
          isLoading={likeLoading || userLoading}
        />
        {likes.length}
      </Flex>

      <Flex alignItems="center">
        <IconButton
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
          //   onClick={toggleLike}
          aria-label=""
          size="md"
          colorScheme="facebook"
          variant="ghost"
          icon={isLiked ? <FaComment /> : <FaRegComment />}
          isRound
          //   isLoading={likeLoading || userLoading}
        />
        {/* {comments.length} */}
      </Flex>

      <IconButton
        ml="auto"
        onClick={deletePost}
        aria-label=""
        size="md"
        colorScheme="red"
        variant="ghost"
        icon={<FaTrash />}
        isRound
        isLoading={deleteLoading}
      />
    </Flex>
  );
};
