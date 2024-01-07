import { FaBookmark } from "react-icons/fa";
import { BiSolidBookAlt } from "react-icons/bi";
import { MdGroups, MdOutlineAccessTime } from "react-icons/md";
import { HiOutlineHashtag } from "react-icons/hi2";

export const Feed = () => {
  return (
    <div className="flex flex-wrap justify-between py-[70px] px-[6%] h-full overflow-y-auto">
      {/* left */}
      <div className="basis-[25%] items-start">
        <div className="bg-white rounded-lg">
          <img
            src="https://img.freepik.com/vektoren-premium/abstrakte-dunkelblaue-moderne-futuristische-wissenschaftstechnologie-high-tech-digitaler-abstrakter-dunkelblauer-bunter-designfahnenhintergrund-vektorabstrakte-grafikdesignfahnenmuster-hintergrundwebschablone_181182-33425.jpg"
            alt="background img"
            className="rounded-t-lg w-full h-28"
          />
          <div className="px-6">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="profile img"
              className="w-24 rounded-full bg-white p-4 -mt-11"
            />
            <h1 className="text-xl font-semibold text-gray-900">
              Sithija Shehara
            </h1>
            <h3 className="text-sm font-medium text-gray-500">
              Senior Software Engineer
            </h3>
            <ul className="list-none my-5">
              <li className="w-full text-xs font-semibold my-1 text-gray-500">
                Your profile views
                <span className="float-right text-blue-600">60</span>
              </li>
              <li className="w-full text-xs font-semibold my-1 text-gray-500">
                Your post views
                <span className="float-right text-blue-600">260</span>
              </li>
              <li className="w-full text-xs font-semibold my-1 text-gray-500">
                Your connections
                <span className="float-right text-blue-600">180</span>
              </li>
            </ul>
          </div>

          <hr />
          <span className="flex items-center gap-1 px-6 py-3">
            <FaBookmark size={15} />
            <span className="text-xs font-bold text-gray-500">My items</span>
          </span>

          <hr />
          <span className="flex items-center gap-1 px-6 py-3 pb-3">
            <BiSolidBookAlt size={17} fill="orange" />
            <span className="text-xs font-bold text-gray-500">Try Premium</span>
          </span>
        </div>

        <div className="bg-white py-1 px-6 my-3 rounded-lg">
          <h3 className="text-gray-700 text-sm font-medium mt-5 mb-2.5">
            RECENT
          </h3>
          <span className="flex items-center my-1 gap-2.5">
            <MdOutlineAccessTime />
            <p className="text-xs font-medium text-gray-500">Web Development</p>
          </span>
          <span className="flex items-center my-1 gap-2.5">
            <MdOutlineAccessTime />
            <p className="text-xs font-medium text-gray-500">User Interface</p>
          </span>
          <span className="flex items-center my-1 gap-2.5">
            <MdOutlineAccessTime />
            <p className="text-xs font-medium text-gray-500">Online Learning</p>
          </span>
          <span className="flex items-center my-1 gap-2.5">
            <MdOutlineAccessTime />
            <p className="text-xs font-medium text-gray-500">
              React js bootcamp
            </p>
          </span>
          <span className="flex items-center my-1 gap-2.5">
            <MdOutlineAccessTime />
            <p className="text-xs font-medium text-gray-500">Java Developers</p>
          </span>

          <h3 className="text-gray-700 text-sm font-medium mt-5 mb-2.5">
            Groups
          </h3>
          <span className="flex items-center my-1 gap-2.5">
            <MdGroups />
            <p className="text-xs font-medium text-gray-500">Web Development</p>
          </span>
          <span className="flex items-center my-1 gap-2.5">
            <MdGroups />
            <p className="text-xs font-medium text-gray-500">User Interface</p>
          </span>
          <span className="flex items-center my-1 gap-2.5">
            <MdGroups />
            <p className="text-xs font-medium text-gray-500">Online Learning</p>
          </span>
          <span className="flex items-center my-1 gap-2.5">
            <MdGroups />
            <p className="text-xs font-medium text-gray-500">
              React js bootcamp
            </p>
          </span>
          <span className="flex items-center my-1 gap-2.5">
            <MdGroups />
            <p className="text-xs font-medium text-gray-500">Java Developers</p>
          </span>

          <h3 className="text-gray-700 text-sm font-medium mt-5 mb-2.5">
            HASHTAG
          </h3>
          <span className="flex items-center my-1 gap-2.5">
            <HiOutlineHashtag />
            <p className="text-xs font-medium text-gray-500">Web Development</p>
          </span>
          <span className="flex items-center my-1 gap-2.5">
            <HiOutlineHashtag />
            <p className="text-xs font-medium text-gray-500">User Interface</p>
          </span>
        </div>
      </div>

      {/* center */}
      <div className="basis-[47%]">
        <div className="bg-white">2</div>
      </div>

      {/* right */}
      <div className="basis-[25%] items-start">
        <div className="bg-white">3</div>
      </div>
    </div>
  );
};
