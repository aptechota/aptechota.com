import React from "react";
import { IntroBanner } from "../partials/pageBanners";
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
  const shortTimeCourses = [
    {
      id: 1,
      title: "MS Office 2019 Office Automation",
      img: "https://cdn.appuals.com/wp-content/uploads/2019/08/office-insider-build-780x379.png",
      duration: "1 Month",
      order: "last",
    },
    {
      id: 2,
      title: "Advanced Excel 2019",
      img: "data:image/jpeg;base64,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",
      duration: "1 Month",
      order: "0",
    },
    {
      id: 3,
      title: "Responsive Web Development",
      img: "https://thumbs.dreamstime.com/z/responsive-web-design-page-promotion-different-display-devices-office-studio-desk-cioncept-graphic-elements-wall-174870257.jpg",
      duration: "4 Months",
      order: "last",
    },
    {
      id: 4,
      title: "Python Programming",
      img: "https://ourcodeworld.com/public-media/articles/articleocw-5c65fbda1ea05.jpg",
      duration: "3 Months",
      order: "0",
    },
    {
      id: 5,
      title: "Oracle Database 11g, 12c (OCA), (OCP)",
      img: "https://ensmark.com/wp-content/uploads/2021/08/oracle_db.jpg",
      duration: "2/2 Months",
      order: "last",
    },
    {
      id: 6,
      title: "AUTOCAD (Autodesk)",
      img: "https://www.nicepng.com/png/detail/915-9153210_autodesk-autocad-.png",
      duration: "1 Month",
      order: "0",
    },
    {
      id: 7,
      title: "Graphics Design",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92Lj2zB1fHcN5q_zuhnrvUxE7LtdT0EboGg&usqp=CAU",
      duration: "2 Months",
      order: "last",
    },
    {
      id: 8,
      title: "Digital Marketing",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/history_and_evolution_of_digital_marketing.jpg",
      duration: "2 Months",
      order: "0",
    },
    {
      id: 9,
      title: "Linux",
      img: "data:image/jpeg;base64,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",
      duration: "1 Month",
      order: "last",
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
      <section className="mt-16 text-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Short Time Courses */}
      <section className=" text-gray-900">
        <div className="mx-auto mt-20 max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-medium capitalize sm:text-4xl">
              short time courses
            </h2>

            <p className="mt-1 text-gray-600">
              Aptech Short Time Career Courses
            </p>
          </div>
        </div>

        <div className="container mx-auto p-4">
          {shortTimeCourses.map((course) => (
            <div
              key={course.id}
              className="mx-auto my-10 rounded-lg bg-gray-50 px-4 py-6 sm:px-6 lg:px-8"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
                <div
                  className={`relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-${course.order} lg:h-full`}
                >
                  <img
                    className="absolute inset-0 h-full w-full object-contain"
                    src={course.img}
                    alt="Man using a computer"
                  />
                </div>

                <div className="sm:col-span-2  lg:py-12">
                  <h2 className="text-2xl font-medium sm:text-3xl">
                    {course.title}
                  </h2>

                  <p className=" mt-4 text-gray-600">
                    <span className="font-jost font-semibold">Duration:</span>
                    {course.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-1 text-center">
        <a
          className="feature-btn mt-5 inline-flex items-center rounded bg-aptechRed px-6 py-3 text-white hover:shadow-md"
          href="/contact"
        >
          <span className="text-sm font-semibold">Enroll Now</span>

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
        </a>
      </div>
    </div>
  );
};

export default Courses;
