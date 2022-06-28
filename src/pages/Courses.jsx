import React from "react";
import {IntroBanner} from "../partials/IntroBanner";
import coursesAcnsImg from "../assets/images/course-acns.jpg";
import coursesAdseImg from "../assets/images/course-adse.jpg";
import coursesSmartProImg from "../assets/images/course-smartpro.jpg";
import { Link } from "react-router-dom";

const Courses = () => {
  const popularCourses = [
    {
      id: 1,
      title: "aptech ACNS career courses",
      img: coursesAcnsImg,
      link: "acns",
    },
    {
      id: 2,
      title: "advanced diploma in software engineering (ADSE)",
      img: coursesAdseImg,
      link: "adse",
    },
    {
      id: 3,
      title: "aptech smart professional courses",
      img: coursesSmartProImg,
      link: "smart-pro",
    },
  ];
  return (
    <div>
      {/* Intro Banner */}
      <IntroBanner
        bannerTitle="Our "
        bannerTitleYellow="Courses"
        bannerText="Check out the courses and programs we offer and select the one best suited for you..."
      />

      {/* Popular Courses */}
      <section className="mt-12 text-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-medium capitalize sm:text-4xl">
              most chosen courses
            </h2>

            <p className="mt-1 text-gray-600">
              A few of our most popular courses
            </p>
          </div>

          <div className="container mx-auto mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {popularCourses.map((course) => (
              <div
                key={course.id}
                className="relative block h-[45vh] overflow-hidden rounded-md bg-cover bg-center bg-no-repeat md:h-[70vh]"
                style={{
                  backgroundImage: `linear-gradient(62deg,rgba(0, 0, 0, 0.2) 50%,rgba(0, 0, 0, 0.2) 50%),url(${course.img})`,
                }}
              >
                <Link
                  reloadDocument
                  to={`/courses/${course.link}`}
                  className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1.5 h-4 w-4 font-bold text-aptechOrange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>

                <div className="relative h-full bg-black bg-opacity-40 p-8 pt-40 text-center text-white">
                  <h5 className="text-2xl font-semibold capitalize">
                    {course.title}
                  </h5>
                  {/* <p className="text-sm">Italy</p> */}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              reloadDocument
              className="feature-btn mt-5 inline-flex items-center rounded bg-aptechRed px-6 py-3 text-white hover:shadow-md"
              to="/courses"
            >
              <span className="text-sm font-semibold"> View Courses </span>
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="mt- text-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-medium capitalize sm:text-4xl">
              short time courses
            </h2>

            <p className="mt-1 text-gray-600">
              Our short time courses are designed to help you achieve so much within a short period
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
