import logo from "../assets/logo.svg";
import media from "../assets/media.svg";
import video from "../assets/video.svg";
import events from "../assets/events.svg";
import { FaBookmark } from "react-icons/fa";
import { BiSolidBookAlt } from "react-icons/bi";
import { MdGroups, MdOutlineAccessTime } from "react-icons/md";
import { HiOutlineHashtag } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa";
import { ProfileImage } from ".";
import { Post } from "./post";

export const Feed = () => {
  return (
    <div className="flex flex-wrap justify-between pt-3 pb-[4.5%] px-[15%] h-full bg">
      {/* left */}
      <div className="basis-[25%] items-start h-full overflow-y-auto ">
        <div className="bg-white rounded-lg">
          <img
            src="https://img.freepik.com/vektoren-premium/abstrakte-dunkelblaue-moderne-futuristische-wissenschaftstechnologie-high-tech-digitaler-abstrakter-dunkelblauer-bunter-designfahnenhintergrund-vektorabstrakte-grafikdesignfahnenmuster-hintergrundwebschablone_181182-33425.jpg"
            alt="background img"
            className="rounded-t-lg w-full h-28"
          />
          <div className="px-6">
            <ProfileImage styles="w-24 rounded-full bg-white p-4 -mt-11" />
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

        <div className="bg-white py-1 my-3 rounded-lg">
          <div className="px-6">
            <h3 className="text-gray-700 text-sm font-medium mt-5 mb-2.5">
              RECENT
            </h3>
            <span className="flex items-center my-1 gap-2.5">
              <MdOutlineAccessTime />
              <p className="text-xs font-medium text-gray-500">
                React Developers - ReactJS Professional Development Mastermind
              </p>
            </span>
            <span className="flex items-center my-1 gap-2.5">
              <MdOutlineAccessTime />
              <p className="text-xs font-medium text-gray-500">
                React Native Developers - React Native Professional Development
                Mastermind
              </p>
            </span>
            <span className="flex items-center my-1 gap-2.5">
              <MdOutlineAccessTime />
              <p className="text-xs font-medium text-gray-500">
                Java Developers - Java & Springboot Professional Development
                Mastermind
              </p>
            </span>
            <span className="flex items-center my-1 gap-2.5">
              <MdOutlineAccessTime />
              <p className="text-xs font-medium text-gray-500">
                Python Developers - Python Professional Development Mastermind
              </p>
            </span>

            <h3 className="text-gray-700 text-sm font-medium mt-5 mb-2.5">
              Groups
            </h3>
            <span className="flex items-center my-1 gap-2.5">
              <MdGroups />
              <p className="text-xs font-medium text-gray-500">
                Java | Spring Boot | AWS Developer's Network 🚀
              </p>
            </span>

            <span className="flex items-center my-1 gap-2.5">
              <MdGroups />
              <p className="text-xs font-medium text-gray-500">
                Faculty of Information Technology, University of Moratuwa
              </p>
            </span>
            <span className="flex items-center my-1 gap-2.5">
              <MdGroups />
              <p className="text-xs font-medium text-gray-500">
                IT Professionals 🟥 Agile Lean Scrum
              </p>
            </span>
            <span className="flex items-center my-1 gap-2.5">
              <MdGroups />
              <p className="text-xs font-medium text-gray-500">
                Interview Tips Study Group - LinkedIn Learning
              </p>
            </span>

            <h3 className="text-gray-700 text-sm font-medium mt-5 mb-2.5">
              HASHTAG
            </h3>
            <span className="flex items-center my-1 gap-2.5">
              <HiOutlineHashtag />
              <p className="text-xs font-medium text-gray-500">
                Web Development
              </p>
            </span>
            <span className="flex items-center my-1 gap-2.5 mb-4">
              <HiOutlineHashtag />
              <p className="text-xs font-medium text-gray-500">
                User Interface
              </p>
            </span>
          </div>

          <hr />

          <div className="inline-block my-4 w-full">
            <p className="text-sm font-medium text-gray-500 text-center">
              Discover More
            </p>
          </div>
        </div>
      </div>

      {/* center */}
      <div className="basis-[47%] h-full overflow-y-auto ">
        <div className="bg-white rounded-lg">
          <div className="flex items-start pt-5 pl-6 pb-2.5">
            <ProfileImage styles="w-8 rounded-full mr-2.5" />
            <textarea
              className="w-full border-none outline-none resize-none bg-transparent mt-1 font-medium"
              placeholder="Write a post"
              rows={2}
            ></textarea>
          </div>

          <div>
            <hr />
            <ul className="flex items-start">
              <li className="basis-[25%] h-10 text-sm flex items-center justify-center cursor-pointer gap-1">
                <img src={media} /> Photo
              </li>
              <li className="basis-[25%] h-10 text-sm flex items-center justify-center cursor-pointer gap-1">
                <img src={video} /> Video
              </li>
              <li className="basis-[25%] h-10 text-sm flex items-center justify-center cursor-pointer gap-1">
                <img src={events} /> Event
              </li>
              <li className="basis-[25%] h-10 text-sm flex items-center justify-center cursor-pointer gap-1 bg-blue-600 text-white font-semibold rounded-br-lg">
                Post
              </li>
            </ul>
          </div>
        </div>
        <Post
          desctiption="Discipline is not about perfection. Discipline is about continuity.
        Often, we misconstrue discipline as a relentless pursuit of perfection.
        This viewpoint can be daunting and, ironically, unproductive.
        Discipline, at its core, is about maintaining continuity in our actions
        and decisions, regardless of the pursuit of perfection. The myth of
        perfection Perfection is a mirage. Chasing it can lead to a cycle of
        disappointment and demotivation. Instead, embracing imperfection as part
        of the process is more sustainable. Discipline means staying the course,
        even when things are less than perfect. Consistency over intensity The
        key to long-term success is not intense bursts of activity but
        consistent, daily efforts. It's the small actions, repeated over time,
        that lead to significant achievements. This approach aligns with the
        principle of compound growth, where small, regular contributions
        accumulate into substantial results. embracing imperfection Embracing
        imperfection allows us to be disciplined without the pressure of
        unrealistic standards. It encourages learning from mistakes and viewing
        them as stepping stones rather than roadblocks. Building a continuity
        mindset To cultivate a continuity mindset: 1. Set realistic goals: Goals
        should be challenging yet achievable. 2. Create a routine: Regularity
        breeds familiarity and comfort. 3. Focus on progress, not perfection:
        Celebrate small wins and learn from setbacks. 4. Be adaptable:
        Flexibility in approach can help maintain continuity even under changing
        circumstances. I apply a continuity mindset by setting myself goals
        around writing (even just a little) everyday. It's a habit that's now
        just a part of my routine. Even if I'm unable to complete a writing
        task, it's okay if I achieve micro-goals such as writing a few sentences
        or a paragraph. That keeps things flexible enough that I'm always making
        some progress and it keeps me happy. Conclusion Discipline is not about
        flawless execution but about the resilience to continue despite
        imperfections. It's about showing up, day after day, committed to your
        goals, learning, and growing along the way."
          imgUrl="https://media.licdn.com/dms/image/D5622AQGFvp1k6UElvw/feedshare-shrink_1280/0/1704698536768?e=1707955200&v=beta&t=sA2t4tpFa2phZjWb6QX_VuJNb5mw2VR4qPJrAikcRVE"
        />
        <Post
          desctiption="Oauth 2.0 Explained With Simple Terms. OAuth 2.0 is a powerful and secure framework that allows different applications to securely interact with each other on behalf of users without sharing sensitive credentials.
The entities involved in OAuth are the User, the Server, and the Identity Provider (IDP). What Can an OAuth Token Do? When you use OAuth, you get an OAuth token that represents your identity and permissions. This token can do a few important things:
Single Sign-On (SSO): With an OAuth token, you can log into multiple services or apps using just one login, making life easier and safer.
Authorization Across Systems: The OAuth token allows you to share your authorization or access rights across various systems, so you don't have to log in separately everywhere.
Accessing User Profile: Apps with an OAuth token can access certain parts of your user profile that you allow, but they won't see everything.
Remember, OAuth 2.0 is all about keeping you and your data safe while making your online experiences seamless and hassle-free across different applications and services.
Over to you: Imagine you have a magical power to grant one wish to OAuth 2.0. What would that be? Maybe your suggestions actually lead to OAuth 3."
          imgUrl="https://media.licdn.com/dms/image/D4E22AQHradwZAkeT-A/feedshare-shrink_800/0/1705126623467?e=1707955200&v=beta&t=xCEyq-RgzdEl17c4c55X-Fd_oYr72wxUXZ1tc6D1qfw"
        />
      </div>

      {/* right */}
      <div className="basis-[25%] items-start h-full overflow-y-auto">
        <div className="bg-white rounded-lg">
          <div className="py-2.5 px-6 ">
            <span className="flex items-center justify-start gap-2 mb-2 ">
              <h3 className="text-xl font-bold text-gray-600">Trending News</h3>
              <FaLinkedinIn size={22} fill="rgb(37, 99, 235)" />
            </span>

            <p className="text-xs text-gray-600 font-medium flex flex-col mt-2.5">
              High demand for skilled manpower
              <span className="text-xs font-medium text-gray-400">
                1d ago &middot; 10,966 readers
              </span>
            </p>

            <p className="text-xs text-gray-600 font-medium flex flex-col mt-2.5">
              Careers growing horizontally too
              <span className="text-xs font-medium text-gray-400">
                2d ago &middot; 8,986 readers
              </span>
            </p>

            <p className="text-xs text-gray-600 font-medium flex flex-col mt-2.5">
              Microsoft partneers with Open AI
              <span className="text-xs font-medium text-gray-400">
                3d ago &middot; 6,000 readers
              </span>
            </p>

            <p className="text-xs text-gray-600 font-medium flex flex-col mt-2.5">
              Meta introduces 'Lexical'
              <span className="text-xs font-medium text-gray-400">
                1d ago &middot; 1,600 readers
              </span>
            </p>

            <p className="mt-5 mb-2.5 text-sm font-medium text-blue-900 cursor-pointer">
              Read More
            </p>
          </div>
        </div>

        <div className="bg-white py-3.5 px-6 rounded-lg my-3 text-center">
          <small className="float-left font-semibold">Add</small>
          <p className="mt-7 mb-2">
            Master these 6 Concepts of Wed development
          </p>
          <div className="flex items-center justify-center">
            <ProfileImage styles="w-[60px] rounded-full m-1" />
            <img
              src="https://www.techjunkie.com/wp-content/uploads/2015/03/apple-logo-black2-1.jpg"
              alt="apple logo"
              className="w-[60px] rounded-full m-1"
            />
          </div>
          <b className="block text-xs font-medium mt-2">
            Brand on Demad in Apple
          </b>
          <p className="inline-block border border-blue-900 rounded-2xl py-1 px-4 mx-auto mt-5 mb-2.5 text-xs text-blue-900">
            Learn More
          </p>
        </div>

        <div className="py-3.5 px-6 text-center">
          <p className="inline-block text-xs my-1 mx-2">About</p>
          <p className="inline-block text-xs my-1 mx-2">Accessibility</p>
          <p className="inline-block text-xs my-1 mx-2">Help Center</p>
          <p className="inline-block text-xs my-1 mx-2">Privacy Policy</p>
          <p className="inline-block text-xs my-1 mx-2">Advertising</p>
          <p className="inline-block text-xs my-1 mx-2">Ad Choices</p>
          <p className="inline-block text-xs my-1 mx-2">Business Services</p>
          <p className="inline-block text-xs my-1 mx-2">Get the LinkedIn App</p>
          <p className="inline-block text-xs my-1 mx-2">More</p>

          <div className="flex items-center justify-center mt-4 gap-1">
            <img src={logo} alt="linkedin logo" className="w-5 h-5" />
            <p className="text-xs font-semibold">
              LinkedIn &#169; 2024. All right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
