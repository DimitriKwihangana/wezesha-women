import React from 'react'
import {HiOutlineLightBulb} from 'react-icons/hi';
import {BiServer} from 'react-icons/bi';
import {FaGraduationCap} from 'react-icons/fa';

const History = () => {
  return (
    <div>
      <div className="bg-[#F3F5F5] py-[6rem]">
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

export default History