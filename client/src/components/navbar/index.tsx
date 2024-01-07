import logo from "../../assets/logo.svg";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { BsBriefcaseFill } from "react-icons/bs";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoNotificationsSharp, IoSearch } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white py-1.5 px-[6%] z-100 shadow-md fixed top-0 w-full">
      {/* left */}
      <div className="flex items-center w-64">
        <img src={logo} alt="linkedin logo" className="w-8 h-8 mr-2 block" />
        <form
          action=""
          className="flex items-center px-3 h-8 rounded-md w-[280px] bg-slate-100"
        >
          <IoSearch className="w-5 h-5  text-gray-600" />
          <input
            type="text"
            className="text-sm p-1 pl-2 pr-0 block focus:outline-none w-full text-gray-400 bg-slate-100"
            placeholder="Search"
          />
        </form>
      </div>

      {/* center */}
      <div>
        <ul>
          <li className="inline-block list-none cursor-pointer">
            <span className="flex items-center  text-sm mx-2 my-1">
              <AiFillHome className="text-gray-500 w-6 h-6 m-1 mx-2" />
              <span className="text-xs">Home</span>
            </span>
          </li>
          <li className="inline-block list-none cursor-pointer">
            <span className="flex items-center  text-sm mx-2 my-1">
              <HiUsers className="text-gray-500 w-6 h-6 m-1 mx-2" />
              <span className="text-xs">My Network</span>
            </span>
          </li>
          <li className="inline-block list-none cursor-pointer">
            <span className="flex items-center  text-sm mx-2 my-1">
              <BsBriefcaseFill className="text-gray-500 w-6 h-6 m-1 mx-2" />
              <span className="text-xs">Jobs</span>
            </span>
          </li>
          <li className="inline-block list-none cursor-pointer">
            <span className="flex items-center  text-sm mx-2 my-1">
              <BiSolidMessageRoundedDots className="text-gray-500 w-6 h-6 m-1 mx-2" />
              <span className="text-xs">Messaging</span>
            </span>
          </li>
          <li className="inline-block list-none cursor-pointer">
            <span className="flex items-center  text-sm mx-2 my-1">
              <IoNotificationsSharp className="text-gray-500 w-6 h-6 m-1 mx-2" />
              <span className="text-xs">Notifications</span>
            </span>
          </li>
        </ul>
      </div>

      {/* right */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt="profile image"
          className="w-10 rounded-full block cursor-pointer relative"
        />
      </div>
    </nav>
  );
};
