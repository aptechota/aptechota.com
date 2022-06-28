import React from "react";
import AdvertImg1 from "../assets/images/advert1.jpg";
import BusinessTeamImg from "../assets/images/office-workers.jpg";
import StudentsImg from "../assets/images/students1.jpg";
import {IntroBanner} from "../partials/IntroBanner";

const About = () => {
  return (
    <div>
      {/* Intro Banner */}
      <IntroBanner
        bannerTitle="About"
        bannerTitleYellow="Us"
        bannerText="All About Aptech Computer Education Ota"
      />

      {/* Feature 1 */}
      <section className="mt-20">
        <div className="max-w-screen-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-72 lg:h-full">
                <img
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                  src={AdvertImg1}
                  alt="Indoors house"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 ">
                <h2 className="text-2xl font-semibold text-aptechRed sm:text-3xl">
                  About Us
                </h2>

                <p className="mt-4 text-justify text-gray-700">
                  Aptech Computer Education, Sango Ota, Ogun State came into
                  being when Avigo Investment acquired the ICT Educational
                  franchise from Aptech Computer Education, Mumbai India. It was
                  based on the vision to pass a legacy of ICT training to the up
                  and coming ICT servy Nigerians and also to develop the next
                  generation of Nigerians who will continue from the present
                  generation after more than 25 years’ experience garnered in
                  the ICT space in the banking institutions, Insurance, Full
                  Fledged IT companies, etc cutting across Private companies,
                  corporate organizations, Public and multi-national companies.
                  Our soul aim was to give something back to the society for the
                  betterment of ICT in Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                src={BusinessTeamImg}
                alt="Business Team"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-2xl font-semibold capitalize text-aptechRed sm:text-3xl">
                avigo investment limited
              </h2>
              <p className="mt-2 text-justify text-gray-700">
                AVIGO, is an indigenous firm, which is one of the most effective
                environmental and allied services company in Nigeria, it was
                incorporated at Corporate Affairs Commission Abuja in the year
                2017. AVIGO is a 100% Nigerian owned Company. The company has a
                comprehensive pool of professional staff consisting of Managers,
                Software developers, Hardware Engineers, Network Engineers as
                well as grounded Informational Technology professionals. We have
                the skill set to design, and deploy Local Area Network (LAN),
                Wide Area Network (WAN), WIFI, Cisco Network Cascading, Network
                Integration, etc. We also can also offer network support
                services to existing clients network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-0 relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <img
                className="pointer-events-none absolute inset-0 h-full w-full  object-cover"
                src={StudentsImg}
                alt="Students"
              />
            </div>

            <div className="lg:py-12">
              <h2 className="text-2xl font-semibold text-aptechRed sm:text-3xl">
                Our Alliances
              </h2>

              <p className="mt-2 text-justify text-gray-700">
                <span className="text-justify font-bold">
                  Avigo inculcates strict adherence to policies, procedures and
                  high standards on every task whose overall effect will result
                  to quality and guarantee job satisfaction at final delivery
                  point.
                </span>
                Our students are trained to compete with other Aptech Centers
                (about 1,400 centers worldwide) as well as International
                students/graduates from other elite Universities.
              </p>
              <p className="mt-2 text-justify text-gray-700">
                Aptech Computer Education, Ota have alliance with Middlesex
                University as well as Portsmouth University, London, United
                Kingdom. To expatiate further, our students after 24 months
                programme in Advanced Diploma in Software Engineering (ADSE)
                will merit a full credit transfer to either Middlesex or
                Portsmouth Universities in the UK to start in the final year and
                after 12 months, graduates in Software engineering with a
                Bachelor of Science (BSC).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
