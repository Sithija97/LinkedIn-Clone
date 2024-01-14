import { AiOutlineLike } from "react-icons/ai";
import { ProfileImage } from "../..";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import like from "../../../assets/like.svg";
import heart from "../../../assets/heart.svg";

type IProps = {
  desctiption: string;
  imgUrl: string;
};

export const Post = ({ desctiption, imgUrl }: IProps) => {
  return (
    <div className="bg-white rounded-lg mt-7 pt-5 pl-6 pr-6 pb-2.5">
      <div className="flex items-start mb-5">
        <ProfileImage styles="w-8 rounded-full mr-2.5" />
        <div>
          <h1 className="text-sm font-semibold text-gray-600">
            Sithija Shehara
          </h1>
          <small className="block -mb-[2px]">
            Senior Software Engineer at Aventude
          </small>
          <small className="block -mb-[2px]">2 hours</small>
        </div>
      </div>

      <p className="text-sm mb-4">{desctiption}</p>

      <img src={imgUrl} width="100%" />

      <div className="flex items-center justify-between pt-2 mb-2">
        <div className="flex items-center">
          <img src={like} alt="like emoji" />
          <img src={heart} alt="heart emoji" />
          <span className="ml-2.5 text-sm text-gray-600">
            Ravindranath Tharanga Hewage and 1,568 others
          </span>
        </div>
        <div>
          <span className="text-sm text-gray-600">
            22 comments &middot; 40 shares
          </span>
        </div>
      </div>

      <hr />
      <div className="flex px-16 items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <AiOutlineLike size={25} fill="gray" />
          <span>Like</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegCommentDots size={25} fill="gray" />
          <span>Comment</span>
        </div>
        <div className="flex items-center gap-1">
          <BiRepost size={25} fill="gray" />
          <span>Repost</span>
        </div>
        <div className="flex items-center gap-1">
          <RiSendPlaneFill size={25} fill="gray" />
          <span>Send</span>
        </div>
      </div>
    </div>
  );
};
