import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dummyCourses } from "./DummyData";
import { IoMdSearch } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCardClick = (course) => {
    const token = localStorage.getItem("token");
    if (token === null) {
      
      navigate(`/courses/${course.id}`);
    } else {
      console.log("we are here")
      navigate(`/courses/${course.id}`);
    }
  };

  const filteredCourses = dummyCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.year.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div
        style={{ background: "#F8FAFA", paddingLeft: "8rem" }}
        className="w-full h-full lg:h-[80rem] pt-[6rem]"
      >
        <div className="flex justify-end ">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="h-[2.5rem] pl-4 pr-[10rem] rounded-3xl border-2 border-white-600 focus:border-white-600 outline-none"
          />
          <div>
            <IoMdSearch
              size={10}
              style={{ backgroundColor: "#A16733" }}
              className="text-white w-10 h-[2.5rem] mr-[6rem] bg-white ml-[-2rem] rounded-r-3xl  "
            />
          </div>
        </div>
        <div className="flex justify-start content-start gap-6 flex-wrap mt-[2rem] ">
          {filteredCourses.map((course) => (
            <div
              // to={`/courses/${course.id}`}
              key={course.id}
              className=" bg-white w-[20rem] h-[23rem] block px-4 py-2 shadow-xl rounded-md border-2  ease-in-out duration-300 hover:scale-105 transition-all"
              onClick={() => handleCardClick(course)}
            >
              <img
                src={course.imgi}
                alt=""
                className="w-full h-[12rem] object-cover mx-auto my-3 pt-2 rounded-t-md rounded-lg"
              />
              <h2
                style={{ color: "#e453a2" }}
                className="m-2 flex justify-start bg-white  font-light  italic"
              >
                {" "}
                WEZESHA WOMEN
              </h2>
              <h2 className=" font-semibold font-serif text-left">
                {course.name}
              </h2>
              <p className=" font-light text-left pt-2">{course.year}</p>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Courses;
