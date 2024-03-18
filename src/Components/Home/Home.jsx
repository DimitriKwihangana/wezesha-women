import React from 'react'
import { Link } from 'react-router-dom';
import {BiServer} from 'react-icons/bi';
import {FaGraduationCap} from 'react-icons/fa';
import {HiOutlineLightBulb} from 'react-icons/hi'
import {MdOutlineWbSunny} from 'react-icons/md';
import {TfiLightBulb} from 'react-icons/tfi';
import {AiOutlineHome} from 'react-icons/ai'

const Home = () => {
  return (
    <div>
      {/* Home image  */}
      <div className=" bg-image   bg-cover bg-center ">
        <div className="flex justify-evenly py-44">
          <div className=" my-[6rem] lg:10 mx-3 xl:w-[35rem] lg:w-[20rem]  h-[9rem] ">
            <h1 className="lg:text-4xl text-lg text-white">
              This's{" "}
              <span
                
                className="uppercase border-l-red-400 font-semibold text-white"
              >
                WEZESHA WOMEN
              </span>{" "}
             site for women empowerment.{" "}
            </h1>
        
            <Link to="/signUp">
              <button
                style={{ backgroundColor: "#e453a2" }}
                className="h-14 w-48 mt-5 rounded-full text-white 
                  uppercase font-semibold  overflow-hidden position transition duration-300 ease-in-out bg-gray-100 
                   hover:bg-A16733 cursor-pointer"
              >
                register{" "}
              </button>
            </Link>
          </div>
          <div className="xl:my-[-2rem]   my-[4rem] lg:my-[1rem] lg:w-[18rem] xl:w-[32rem]  lg:h-[5rem]">
            <img src="../../../src/assets/nglogo.png" alt="" className="" />
          </div>
        </div>
      </div>

      {/* OUR HISTORY AND WHAT WE ARE  */}
      <div className=" w-full pt-[4rem] bg-[#F8FAFA] ">
        <div className=" md:flex  justify-evenly  md:h-[30rem]">
          <div className=" md:w-[37rem] pl-6 md:h-[29rem]">
            <h1 className="mt-[0.5rem] uppercase text-3xl font-light">
              Who we are
            </h1>
            <p className="font-light">We are wezesha women </p>
            <p className="mt-[1.2rem] font-light">
           
            Welcome to Wezesha Women, a platform dedicated to celebrating the remarkable achievements of women who have blazed trails and inspired change around the world. From pioneering scientists and groundbreaking activists to visionary leaders and creative innovators, women have left an indelible mark on history through their resilience, courage, and determination. Join us as we honor their legacies, share their stories, and empower future generations to dream big and pursue their passions fearlessly. Together, let's draw inspiration from the extraordinary women who have shaped our world and continue 
            to pave the way for a brighter, more equitable future.
            </p>
          </div>
          <div className=" md:h-[23rem] xl:w-[32rem] md:w-[30rem] sm:w-[10rem] sm:h-[40rem] block justify-end px-4 py-2">
            <span className="flex justify-end ">
              <img
                src="../../../src/assets/10001.jpg"
                alt=""
                className="bg-[#F3F5F5] mt-2 md:w-[29rem]"
              />
            </span>

            <span className=" flex justify-end ">
              <p
                style={{ color: "#e453a2" }}
                className="mt-3 bg-white italic font-bold"
              >
                WEZESHA WOMEN{" "}
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* COURSES THAT WE OFFERS */}

      <div className="bg-image-1 h-[20re] p-10">
        <div className="space-y-[2rem] pt-4 p-10">
          <h2
           
            className="text-center  font-bold text-2xl uppercase font-serif text-white"
          >
            Our Objectives
          </h2>
        </div>
        <div className=" font-light md:flex xl:justify-evenly h-full w-full gap-2 px-5 pb-[10rem] xl:pr-20 xl:pl-20">
          <div className=" bg-[#F8FAFA]   shadow-slate  shadow-xl sm:w-[70rem] xl:h-[20rem] border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-#CB8342 hover:rounded-lg mt-3">
            <div
              style={{ backgroundColor: "#e453a2" }}
              className=" flex items-center justify-center w-20 h-20 rounded-full ml-auto mr-auto mt-6"
            >
              <MdOutlineWbSunny className=" text-white text-5xl  " />
            </div>
            <h2
              style={{ color: "#e453a2" }}
              className=" mt-1 flex justify-center font-semibold text-xl uppercase font-serif"
            >
              Mission
            </h2>
            <p className="m-10 ">
              A single comprehensive program that covers various aspects of the
              culture, including history, traditions, language, arts, and social
              practices.
            </p>
          </div>
          <div className="shadow-slate shadow-xl bg-[#F8FAFA] sm:w-[70rem] xl:h-[20rem] border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-#CB8342 hover:rounded-lg mt-3">
            <div
              style={{ backgroundColor: "#e453a2" }}
              className="  flex items-center justify-center w-20 h-20 rounded-full ml-auto mr-auto mt-6"
            >
              <TfiLightBulb className="text-white text-5xl" />
            </div>
            <h2
              style={{ color: "#e453a2" }}
              className=" mt-1 flex justify-center font-semibold text-xl uppercase font-serif"
            >
              vision
            </h2>
            <p className=" m-10 ">
              Programs that facilitate cultural exchange, either through travel
              or virtual means, providing participants with hands-on experiences
              and interactions with people from the culture .
            </p>
          </div>
          <div className="shadow-slate shadow-xl bg-[#F8FAFA] sm:w-[70rem] xl:h-[20rem] border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-#CB8342 hover:rounded-lg mt-3">
            <div
              style={{ backgroundColor: "#e453a2" }}
              className="  flex items-center justify-center w-20 h-20 rounded-full ml-auto mr-auto mt-6"
            >
              <AiOutlineHome className="text-white text-5xl" />
            </div>
            <h2
              style={{ color: "#e453a2" }}
              className=" mt-1 flex justify-center font-semibold text-xl uppercase font-serif "
            >
              Goal
            </h2>
            <p className=" m-10 ">
              Programs that apply cultural studies to real-world scenarios, such
              as business practices, diplomacy, or intercultural communication.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F8FAFA] py-[6rem]">
        <div className="space-y-[2rem]">
          <h2
            style={{ color: "#e453a2" }}
            className="text-center  font-semibold text-xl uppercase font-serif"
          >
          Women's History
          </h2>
          {/* <p className="text-center text-[#3A3A3A]">Trending culture </p> */}
        </div>
        <div className="flex lg:flex-row md:flex-col space-y-6 flex-col p-[3rem] container mx-auto justify-around lg:space-x-8">
  <div className="flex-grow bg-white rounded-lg p-4">
    <h2
      style={{ color: "#e453a2" }}
      className="font-serif font-semibold text-lg flex flex-row items-center"
    >
      <span className="text-3xl px-2">
        <HiOutlineLightBulb />
      </span>
      1848 - Seneca Falls Convention
    </h2>
    <p className="max-w-md pl-12 pt-2 text-[#3A3A3A]">
      The Seneca Falls Convention, held in 1848 in Seneca Falls, New York, is widely considered the beginning of the modern women's rights movement in the United States. Organized by Elizabeth Cady Stanton and Lucretia Mott, the convention brought together women and a few men to discuss the status of women and their rights. The convention produced the Seneca Falls Declaration, which called for women's 
      suffrage, property rights, and equal opportunities in education and employment.
    </p>
  </div>
  <div className="flex-grow bg-white rounded-lg p-4">
    <h2
      style={{ color: "#e453a2" }}
      className="font-serif flex flex-row items-center font-semibold text-lg"
    >
      <span className="px-2 text-3xl">
        <HiOutlineLightBulb />
      </span>
      1920 - The passage of the 19th Amendment 
    </h2>
    <p className="px-16 max-w-2xl text-[#3A3A3A]">
      The 19th Amendment to the United States Constitution, ratified in 1920, prohibited states and the federal government from denying the right to vote on the basis of sex. This was a major victory for the women's suffrage movement, which had been campaigning for voting rights for women for over 70 years. 
      The passage of the 19th Amendment marked a significant step forward in women's empowerment in the United States.
    </p>
  </div>
  <div className="flex-grow bg-white rounded-lg p-4">
    <h2
      style={{ color: "#e453a2" }}
      className="font-serif font-semibold text-lg flex flex-row items-center"
    >
      <span className="text-2xl px-2">
        <HiOutlineLightBulb />
      </span>
      2006 - The Election of Ellen Johnson Sirleaf as President of Liberia
    </h2>
    <p className="max-w-md pl-16 text-[#3A3A3A]">
      In 2006, Ellen Johnson Sirleaf was elected president of Liberia, becoming the first woman to be democratically elected head of state in Africa. Sirleaf, who had previously been imprisoned for her opposition to Liberian warlords,  faced a country devastated by civil war. Her election and subsequent leadership role inspired 
      women across Africa and  demonstrated the growing political power of women on the continent.
    </p>
  </div>
</div>

      </div>
    </div>
  );
}

export default Home