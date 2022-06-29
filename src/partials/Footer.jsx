import React from "react";
import { Link } from "react-router-dom";
import { ImWhatsapp } from "react-icons/im";
import { SiFacebook, SiInstagram, SiReact } from "react-icons/si";
import AptechLogo from "../assets/images/aptech-logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pt-1 pb-4 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <span className="mx-auto block w-fit lg:ml-0">
              <img
                src={AptechLogo}
                alt="Aptech Logo"
                className="pointer-events-none h-14"
              />
            </span>

            <p className="mt-4 text-center text-white lg:w-5/6 lg:text-left lg:text-md">
              IT is required in every industry. Today, the world is moving
              towards automation of skills, an area in which IT is urgently
              required. Enroll and get your skills now !!!
            </p>

            <div className="mt-6 flex justify-center gap-4 text-gray-300 lg:justify-start">
              <a
                className="transition hover:text-aptechOrange"
                href="https://www.facebook.com/Aptech-Sango-ota-110209775063204v"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <SiFacebook className="h-5 w-5" />
              </a>

              <a
                className="transition hover:text-aptechOrange"
                href="https://www.instagram.com/aptechsango/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>

                <SiInstagram className="h-5 w-5" />
              </a>

              <a
                className="transition hover:text-aptechOrange"
                href="https://wa.me/message/2VCKIV7CHKDVP1"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> WhatsApp </span>

                <ImWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-jost text-md font-semibold uppercase tracking-wide text-aptechOrange">
                More Info
              </strong>

              <nav className="mt-4 flex flex-col space-y-2 text-md text-gray-300">
                <Link
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                  to="/"
                  reloadDocument
                >
                  {" "}
                  Home{" "}
                </Link>
                <Link
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                  to="/about"
                  reloadDocument
                >
                  {" "}
                  About{" "}
                </Link>
                <Link
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                  to="/courses"
                  reloadDocument
                >
                  Courses
                </Link>
                <Link
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                  to="/contact"
                  reloadDocument
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <strong className="font-jost text-md font-semibold uppercase tracking-wide text-aptechOrange">
                Follow Us
              </strong>

              <nav className="mt-4 flex flex-col space-y-2 text-md text-gray-300">
                <p className="transition">
                  {" "}
                  No 1, Joju bustop, ogbohu plaza, beside Gt bank, Ota ,Ogun
                  state , Nigeria
                </p>
              </nav>
            </div>

            <div>
              <strong className="font-jost text-md font-semibold uppercase tracking-wide text-aptechOrange">
                Contact
              </strong>

              <nav className="mt-4 flex flex-col space-y-1 text-sm text-gray-300">
                <a className="transition" href="mailto:aptech.ota@gmail.com">
                  {" "}
                  <span className="font-bold">
                    Email:
                  </span> aptech.ota@gmail.com{" "}
                </a>
                <a className="transition" href="tel:+2348084636061">
                  {" "}
                  <span className="font-bold">Telephone:</span> <br />
                  +234 (0)808 463 6061{" "}
                </a>
                <div className="transition">
                  {" "}
                  <span className="font-bold">Office Hours:</span> <br /> Mon -
                  Sat | 9:00am - 5:00pm GMT +1
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-3">
          <p className="text-center text-xs leading-relaxed text-gray-300">
            © Company <span id="year">2022</span>. All rights reserved.
            <br />
            Created with{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className="underline transition hover:text-white"
            >
              <SiReact className="mx-1 inline h-4 w-4" />
            </a>{" "}
            by{"  "}
            <a
              href="https://israelakinoso.netlify.app/"
              target="_blank"
              className="underline transition hover:text-white"
              rel="noreferrer"
            >
              Israel
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
