import {
  IoIosArrowForward,
  IoMdHelpCircle,
  IoMdSettings,
} from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { ProfileImage } from ".";
import { BiSolidMessageSquareError } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { PROFILE } from "../routes/router";

export const ProfileMenu = () => {
  const navigate = useNavigate();

  const navigateToProfile = () => navigate(PROFILE);
  return (
    <div className="absolute top-[100%] right-[5%] w-80">
      <div className="bg-white shadow-lg rounded-lg p-5 m-2.5">
        <div className="flex items-center">
          <ProfileImage styles="w-12 rounded-full mr-4" />
          <div>
            <h3 className="text-sm font-medium -mb-2">Sithija Shehara</h3>
            <span
              className="text-blue-700 text-xs cursor-pointer"
              onClick={navigateToProfile}
            >
              See your profile
            </span>
          </div>
        </div>
        <hr className="mt-4 mb-2.5" />
        <a href="" className="flex items-center my-3">
          <BiSolidMessageSquareError fill="gray" size={20} className="mr-3" />
          <p className="text-sm w-full">Give Feedback</p>
          <span className="w-8 hover:bg-slate-100 p-2 rounded-full">
            <IoIosArrowForward size={12} />
          </span>
        </a>
        <a href="" className="flex items-center my-3">
          <IoMdSettings fill="gray" size={20} className="mr-3" />
          <p className="text-sm w-full">Settings & Privacy</p>
          <span className="w-8 hover:bg-slate-100 p-2 rounded-full">
            <IoIosArrowForward size={12} />
          </span>
        </a>
        <a href="" className="flex items-center my-3">
          <IoMdHelpCircle fill="gray" size={20} className="mr-3" />
          <p className="text-sm w-full">Help & Support</p>
          <span className="w-8 hover:bg-slate-100 p-2 rounded-full">
            <IoIosArrowForward size={12} />
          </span>
        </a>
        <a href="" className="flex items-center my-3">
          <FaMoon fill="gray" size={20} className="mr-3" />
          <p className="text-sm w-full">Display & Accessibility</p>
          <span className="w-8 hover:bg-slate-100 p-2 rounded-full">
            <IoIosArrowForward size={12} />
          </span>
        </a>
        <a href="" className="flex items-center my-3">
          <RiLogoutBoxFill fill="gray" size={20} className="mr-3" />
          <p className="text-sm w-full">Logout</p>
          <span className="w-8 hover:bg-slate-100 p-2 rounded-full">
            <IoIosArrowForward size={12} />
          </span>
        </a>
      </div>
    </div>
  );
};
