import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

import jumboImg from "../assets/images/jumboImg.jpg";
import coursesAcnsImg from "../assets/images/course-acns.jpg";
import coursesAdseImg from "../assets/images/course-adse.jpg";
import coursesSmartProImg from "../assets/images/course-smartpro.jpg";
import SchoolsBanner from "../assets/images/schools-banner.png";
import Testimonials from "../partials/Testimonials";

const Home = () => {
  const features = [
    {
      id: 1,
      title: "aptech's certificates enjoy global recognition",
      description:
        "Aptech’s courses lead to professional I.T. certifications from leading I.Tbrands such as Microsoft and from Aptech itself.Each course includes classroom learning as well as practical sessions in the lab. Students are given optimum time in the lab and can work on their projects/assignments whenever they wish.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-10 w-10 text-aptechOrange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "our interntional education alliances",
      description:
        "Aptech has alliance with the best international Universities and institutes across the globe to benefit Aptech students. It helps students pursue an international ICT degree staying in Nigeria or at our partner universities in UK, Australia, Dubai, Malta, Ireland or Malaysia. Get set and register with Aptech, Enquire now!",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-10 w-10 text-aptechOrange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "aptech's mission",
      description:
        "I.T. is an empowering tool, which when appropriately utilized, leads to an increase in productivity improvements and prosperity at the individual, organizational, societal, national and global levels. Education is also an enabler, which leads to continued improvement in productivity and prosperity.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-10 w-10 text-aptechOrange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
  ];
  const popularCourses = [
    {
      id: 1,
      title: "aptech ACNS career courses",
      img: coursesAcnsImg,
      link: "/acns",
    },
    {
      id: 2,
      title: "advanced diploma in software engineering (ADSE)",
      img: coursesAdseImg,
      link: "/adse",
    },
    {
      id: 3,
      title: "aptech smart professional courses",
      img: coursesSmartProImg,
      link: "/smart-pro",
    },
  ];
  return (
    <div className="sm:mt-14">
      {/* Carousel */}
      <div className="h-[70vh] sm:h-[85vh]">
        <Carousel
          slideInterval={10000}
          slide={false}
          rightControl=" "
          leftControl=" "
        >
          <div className="slide1 flex h-full cursor-default items-center justify-center capitalize text-white">
            <h1 className="animate__animated animate__fadeInUp text-center text-3xl font-medium sm:text-5xl">
              Build your IT career{" "}
              <span className="font-semibold text-aptechOrange">with us</span>
            </h1>
          </div>
          <div className="slide2 flex h-full cursor-default items-center justify-center capitalize text-white">
            <h1 className="text-center text-3xl font-medium sm:text-5xl">
              Get the right{" "}
              <span className="font-semibold text-aptechOrange ">skills</span>
            </h1>
          </div>
          <div className="slide3 flex h-full cursor-default items-center justify-center capitalize text-white">
            <h1 className="text-center text-3xl font-medium sm:text-5xl">
              Enjoy Global{" "}
              <span className="font-semibold text-aptechOrange">
                Recognition
              </span>
            </h1>
          </div>
        </Carousel>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20">
        <div className="container mx-auto p-2 text-center capitalize">
          <h1 className="text-3xl font-semibold sm:text-4xl">why choose us?</h1>
          <p className="mt-2 font-medium normal-case text-gray-600">
            Here are a few reasons why you should choose Aptech
          </p>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="features block rounded-lg p-6 text-center"
              >
                {feature.svg}
                <h3 className="mt-4 text-xl font-bold capitalize text-black">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <a
              className="feature-btn mt-5 inline-flex items-center rounded bg-aptechRed px-6 py-3 text-white"
              href="/contact"
            >
              <span className="text-sm font-semibold"> Make Enquiry </span>

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
      </div>

      {/* Jumbotron */}
      <section className="mt-24">
        <div className="mx-auto max-w-screen-xl bg-gray-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                src={jumboImg}
                alt="Man using a computer"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Why should I enroll?
              </h2>

              <p className="mt-4 text-gray-300">
                A career in programming is actually possible whether you are old
                or young, male or female and one of the very best reasons to
                become a computer programmer is the bounty of jobs out there.
                And because we are an increasingly technologically reliant
                society it is also apparent that there will be jobs in the
                programming sector for a long time to come. As other industries
                decline and cease to be, programming is growing and expanding
                into almost all areas of life.
              </p>

              <a
                className="feature-btn mt-6 inline-flex items-center rounded bg-aptechOrange px-6 py-3 text-black"
                href="/contact"
              >
                <span className="text-sm font-bold"> Enroll Now </span>

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
        </div>
      </section>

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
                  to="/courses"
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
              className="feature-btn mt-5 inline-flex items-center rounded bg-aptechRed px-6 py-3 text-white"
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

      {/* Testimonials */}
      <div className="mx-auto mt-5 bg-gray-800 py-10">
        <div className="mx-auto mb-12 max-w-lg text-center">
          <h2 className="text-3xl font-medium capitalize text-white sm:text-4xl">
            testimonials
          </h2>

          <p className="text-gray-300">What our students say about us</p>
        </div>
        <Testimonials />
      </div>

      {/* Footer Banner */}
      <div className=" mt-20">
        <h6 className="text-center text-3xl font-medium">
          In Collaboration with{" "}
        </h6>
        <img
          src={SchoolsBanner}
          alt="Schools Banner"
          className="pointer-events-none mx-auto w-fit"
        />
      </div>

      {/* Future Programs */}
      <div className="container mx-auto mt-20 p-2 text-center capitalize">
        <h1 className="text-2xl font-semibold sm:text-3xl">future programs</h1>
        <p className="mx-auto mt-2 w-5/6 font-medium  normal-case text-gray-600 sm:w-4/6">
          For the first time Aptech is launching futuristic cutting-edge Digital
          Transformation Programs which include some of the Newest, Fastest
          growing Technologies aligned with Industry 4.0 like;
        </p>
        <div className="grid-col-1 mx-auto mt-6 grid gap-y-2 p-3 sm:w-5/6 sm:gap-0 md:grid-cols-2">
          <div className="bg-gray-200 text-start">
            <p className="p-2 px-4 text-base ">
              Power Business Intelligence (BI)
            </p>
            <p className="bg-gray-50 p-2 px-4 text-base">
              Artificial Intelligence (AI)
            </p>
            <p className="p-2 px-4 text-base">Software Engineering</p>
            <p className="bg-gray-50 p-2 px-4 text-base">
              Digital Marketing (SEO, SEM, Mobile & Email Marketing, ORM)
            </p>
          </div>
          <div className="bg-gray-200 text-start">
            <p className="bg-gray-50 p-2 px-4 text-base">Block Chain</p>
            <p className="p-2 px-4 text-base ">Machine Learning with R</p>
            <p className="bg-gray-50 p-2 px-4 text-base">
              Data Analytics (Machine Learning using R & Python, Artificial
              Intelligence, Business Intelligence)
            </p>
            <p className="p-2 px-4 text-base ">Big Data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
