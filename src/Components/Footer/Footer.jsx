

const Footer = () => {
    return (
      <footer className="mainFooter">
      <div className=" container">
          <div className=" md:flex md:justify-evenly border-b md:gap-4 border-solid border-white pl-4 sm:pl-8">
              <div className="">
                  
                  <a href="">
                      <div className="w-[15rem]  ">
                        <img src="../../../src/assets/10001.jpg" alt="" className=" w-[10rem] h-[10rem] rounded-full "/>
                      {/* <img src="../../assets/afribgimage.jpeg" alt="Logo Image" className='lx:w-14 md:72 mt-6 lg:w-96 h-auto p-5' /> */}
                      </div>
                  </a>
                  {/* </Link> */}
              </div>
  
              <div className=" sm:flex justify-between sm:w-full md:gap-2 mb-[-1rem] mt-2  pr-32">
              <div className="mb- sm:mb- lg:mb-12 ">
                  <span>
                          <ul className=''>
                              <li className=''>
                                  <h1 className="headingTwo">Our Initiative</h1>
                              </li>
                              <li className=''>
                                  <a href="" className='anchorTag'>About Us</a>
                              </li>
                              <li className=''>
                                  <a href="" className='anchorTag'>Contact Us</a>
                              </li>
                              <li className=''>
                                  <a href="" className='anchorTag'>Our Service</a>
                              </li>
                              
                          </ul>
                  </span>
              </div>
              <div className="mb-4 sm:mb-8 lg:mb-12">
                  {/* <h2>Get In Touch</h2> */}
                 <span>
                      <ul>
                          <li>
                              <h2 className="headingTwo">Get In Touch</h2>
                          </li>
                          <li>
                              <a href="" className='anchorTag'>Twitter</a>
                          </li>
                          <li>
                              <a href="" className='anchorTag'>Facebook</a>
                          </li>
                          <li>
                              <a href="" className='anchorTag'>Instagram</a>
                          </li>
                      </ul>
                 </span>
                  
              </div>
              <div className="mb-4 sm:mb-8 lg:mb-12">
                  <ul>
                      <li>
                          <h2 className="headingTwo">Contact Info</h2>
                      </li>
                      <li>
                          <p className="text-white text-base font-sans font-light no-underline block transition-all duration-300 ease-in-out leading-6 pt-2">
                            44 KG 548 St, Kigali
                            </p>
                      </li>
                      <li>
                          <p className="text-white text-base font-sans  font-light no-underline block transition-all duration-300 ease-in-out leading-6 pt-2">+250-789-276-080</p>
                      </li>
                  </ul>
              </div>
              </div>
          </div>
          <div className="md:flex justify-between py-2 pl-4 sm:pl-8">
              <div className="pl-9">
                  <p className="text-white text-sm font-medium">Copyright © wezesha women</p>
              </div>
              <div className="pr-20">
                  <p className="text-white text-sm font-normal">Designed By wezesha women</p>
              </div>
          </div>
          
          </div>
      </footer>
    )
  }
  
  export default Footer