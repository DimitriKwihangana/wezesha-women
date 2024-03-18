import React from 'react'
import {MdOutlineWbSunny} from 'react-icons/md';
import {TfiLightBulb} from 'react-icons/tfi';
import {AiOutlineHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';




const About = () => {
  return (
    <div>
          <div className=' bg-image-about  bg-cover bg-center'>
          <div className=' py-[6rem] lg:py-44'>
            <div className=' my-10 mx-[7rem] xl:w-[40rem] lg:w-[40rem] ' >
                <h1 style={{color: '#A16733'}} className='text-white lg:text-4xl uppercase  text-lg font-semibold font-serif '>
                  About Us
                </h1>
            </div>
            <div className=' font-light my-10 mx-[7rem] xl:w-[40rem] lg:w-[40rem] '>
              <p   className='mt-[0.5rem] text-xl text-white font-bold'>
                Africa root culture encompasses foundational elements of
               heritage, including core values, traditions, and practices with deep historical roots, contributing to the diverse cultures across the continent
              </p>
              <Link to='/'>
              <button 
                style={{backgroundColor: '#A16733' }}  
                className='h-14 w-48 mt-5 rounded-full text-white uppercase font-semibold relative overflow-hidden transition duration-300 ease-in-out bg-gray-100 hover:bg-A16733 cursor-pointer'>
                Read more 
              </button>
              </Link>
            </div>

          </div>
        </div>

{/* OUR HISTORY AND WHAT WE ARE  */}
        <div className=' w-full pt-[4rem] '>
        <div className=' md:flex justify-evenly  md:h-[30rem]'>
          <div className=' md:w-[37rem] pl-6 md:h-[29rem]'>
            <h1 className='mt-[0.5rem] text-2xl font-serif uppercase'>Who we are</h1>
            <p className='font-light'>We are African </p>
            <p className='mt-[1.2rem] font-light'>
            Africa root culture could potentially refer to the foundational or fundamental
            aspects of African culture. The term <b>root</b> often conveys the idea of something essential,
            fundamental, or originating. In the context of African culture, it might imply the core values,
            traditions, and practices that have deep historical roots and form the basis of the diverse cultures found across the continent.
            African culture is incredibly diverse, with each region, ethnic group, and community having its unique traditions, languages, art forms, and 
            If there is a specific context or source where <b>Africa root culture</b> is discussed, it would be beneficial to refer to that context for a more precise understanding.
            </p>
          </div>
          <div className=' md:h-[23rem] xl:w-[32rem] md:w-[30rem] sm:w-[10rem] sm:h-[40rem] block justify-end px-4 py-2 '>
            <span className='flex justify-end '>
            <img src="../../../src/assets/igisoro-removebg-preview.jpg" alt="" className=' mt-2 md:w-[29rem]'/>
            </span>

            <span className=' flex justify-end '>
              <p style={{ color: '#CB8342' }} className='mt-3 bg-white italic font-bold'>AFRI ROOT </p>
            </span>
            
          </div>
        </div>
      </div>

      <div className=' h-full '>
        <div className=' font-light md:flex xl:justify-evenly h-full w-full gap-2 px-5 pb-[10rem] xl:pr-20 xl:pl-20'>
        <div className='shadow-slate-300 shadow-xl sm:w-[70rem] xl:h-[20rem] border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-#CB8342 hover:rounded-lg mt-3'>
          <div style={{ backgroundColor: '#CB8342' }}  className='  flex items-center justify-center w-20 h-20 rounded-full ml-auto mr-auto mt-6'>
            <MdOutlineWbSunny  className=' text-white text-5xl  ' />
          </div>
          <h2 style={{color: '#CB8342'}} className=' mt-1 flex justify-center font-semibold text-xl uppercase font-serif'>Mission</h2>
          <p className=' mt-10 ml-2 '>        
              A single comprehensive program that covers various aspects of the culture, including history, traditions, language, arts, and social practices.
          </p>
        </div>
        <div className='shadow-slate-300 shadow-xl sm:w-[70rem] xl:h-[20rem] border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-#CB8342 hover:rounded-lg mt-3'>
          <div style={{ backgroundColor: '#CB8342' }}  className='  flex items-center justify-center w-20 h-20 rounded-full ml-auto mr-auto mt-6'>
            <TfiLightBulb className='text-white text-5xl' />
          </div>
          <h2 style={{color: '#CB8342'}} className=' mt-1 flex justify-center font-semibold text-xl uppercase font-serif'>vision</h2>
          <p className=' mt-10 ml-2'>
            Programs that facilitate cultural exchange, either through travel or virtual means, providing participants with hands-on experiences and interactions with people from the culture
          .</p>
        </div>
        <div className='shadow-slate-300 shadow-xl sm:w-[70rem] xl:h-[20rem] border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-#CB8342 hover:rounded-lg mt-3'>
          <div style={{ backgroundColor: '#CB8342' }}  className='  flex items-center justify-center w-20 h-20 rounded-full ml-auto mr-auto mt-6'>
            <AiOutlineHome className='text-white text-5xl'/>
          </div>
          <h2  style={{color: '#CB8342'}} className=' mt-1 flex justify-center font-semibold text-xl uppercase font-serif '>Goal</h2>
          <p className=' mt-10 ml-2'>
            Programs that apply cultural studies to real-world scenarios, such as business practices, diplomacy, or intercultural communication.
          </p>
        </div>
        </div>
      </div>

    </div>
  )
}

export default About