import React, { useRef } from "react";
import { IntroBanner } from "../partials/pageBanners";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import { TextInput, Textarea } from "flowbite-react";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const sendBtn = document.getElementById("send-btn");
    const formAlert = document.getElementById("form-alert");
    const closeAlert = document.getElementById("close-form-alert");
    sendBtn.innerHTML = "Submitting ...";
    const serviceID = "service_mnst071";
    const templateID = "template_ob9ps46";

    emailjs
      .sendForm(serviceID, templateID, form.current, "A_4PkoyBAy2N0vm6a")
      .then(
        (result) => {
          formAlert.style.display = "flex";
          closeAlert.onclick = function () {
            window.location.reload(true);
          };
        },
        (error) => {
          toast.error("Email failed to send");
          sendBtn.innerHTML = "Send Message ";
        }
      );
  };
  return (
    <div className="">
      {/* Intro Banner */}
      <IntroBanner
        bannerTitle="Contact"
        bannerTitleYellow="Us"
        bannerText="Reach out to us and make enquiries through any of the following means..."
      />

      {/* Details Section */}
      <div className="container mx-auto mt-28 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Email */}
        <div className="relative block p-8 text-center">
          <div className="text-gray-600">
            <div className="mx-auto w-fit rounded-lg bg-gray-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>

            <h5 className="mt-4 text-xl font-semibold text-gray-900">
              Email us
            </h5>

            <p className="mt-2 hidden text-sm sm:block">
              Email us for general queries, including scholarship and job
              opportunities.
            </p>

            <a
              href="mailto:aptech.ota@gmail.com"
              className="text-sm font-bold text-aptechRed transition-all hover:underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              aptech.ota@gmail.com
            </a>
          </div>
        </div>

        {/* Phone Number */}
        <div className="relative block p-8 text-center">
          <div className="text-gray-600">
            <div className="mx-auto w-fit rounded-lg bg-gray-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>

            <h5 className="mt-4 text-xl font-semibold text-gray-900">
              Call us
            </h5>

            <p className="mt-2 hidden text-sm sm:block">
              Call us to make your enquiry. We are always happy to help.
            </p>
            <a
              href="tel:+2348084636061"
              className="text-sm font-bold text-aptechRed transition-all hover:underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              +234(0)-808-463-6061
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="block rounded-lg p-6 sm:border">
          <div className="mt-2 text-center">
            <div className="mx-auto w-fit rounded-lg bg-gray-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h5 className="mt-4 text-xl font-semibold text-gray-900">
              Link up with us on:
            </h5>

            <dl className="mx-auto mt-8 flex w-4/6 items-center justify-center space-x-6 text-xs">
              <a
                href="https://www.facebook.com/Aptech-Sango-ota-110209775063204"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:inline-flex sm:shrink-0 sm:items-center"
              >
                <SiFacebook className="h-6 w-6 text-aptechOrange transition-all hover:text-aptechRed" />
              </a>

              <a
                href="https://www.instagram.com/aptechsango/"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:inline-flex sm:shrink-0 sm:items-center"
              >
                <SiInstagram className="h-6 w-6 text-aptechOrange transition-all hover:text-aptechRed" />
              </a>

              <a
                href="https://wa.me/message/2VCKIV7CHKDVP1"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:inline-flex sm:shrink-0 sm:items-center"
              >
                <SiWhatsapp className="h-6 w-6 text-aptechOrange transition-all hover:text-aptechRed" />
              </a>
            </dl>
          </div>
        </div>
      </div>

      {/* Form and Map */}
      <div className="mt-28">
        <div className="mx-auto grid w-11/12 grid-cols-1 gap-4 gap-y-12 md:w-10/12 md:grid-cols-2">
          {/* Google Map */}
          <div className="">
            <iframe
              title="Aptech Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.498230204673!2d3.2357156174438475!3d6.708883700000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b995b41b7dd6d%3A0xb6c08985374e0e09!2sAptech%20Computer%20Education%20-Sango%20Ota!5e0!3m2!1sen!2sng!4v1656412993623!5m2!1sen!2sng"
              className="h-[70vh] w-full md:h-full"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-2 py-16 sm:p-8">
            <div
              id="form-alert"
              className="mx-3 mb-5 hidden items-center justify-between gap-4 rounded border border-green-900/10 bg-green-50 p-4 text-green-700 "
              role="alert"
            >
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-green-600 p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>

                <p>
                  <strong className="text-sm font-bold"> Hooray! </strong>

                  <span className="block text-xs font-semibold">
                    Your message has been sent.
                  </span>
                </p>
              </div>

              <button
                className="opacity-90"
                id="close-form-alert"
                type="button"
              >
                <span className="sr-only"> Close </span>

                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              {/* FullName */}
              <div className="mb-4">
                <TextInput
                  type="text"
                  name="full_name"
                  autoComplete="none"
                  placeholder="Full Name"
                  className="input-field require-padding items-center font-mulish "
                  required={true}
                  icon={CgProfile}
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <TextInput
                  type="email"
                  name="email"
                  autoComplete="none"
                  placeholder="Your email"
                  className="input-field require-padding items-center font-mulish"
                  required={true}
                  icon={HiMail}
                />
              </div>

              {/* Message */}
              <div id="textarea">
                <Textarea
                  id="message"
                  name="message"
                  autoComplete="none"
                  placeholder="Leave a message..."
                  className="input-field resize-y items-center font-mulish"
                  required={true}
                  rows={6}
                />
              </div>

              <div className="mt-4 text-center">
                <button
                  type="submit"
                  className="feature-btn mt-5 inline-flex items-center rounded bg-aptechRed px-6 py-3 text-white hover:shadow-md"
                >
                  <span className="text-sm font-semibold" id="send-btn">
                    {" "}
                    Send Message{" "}
                  </span>
                  <MdSend className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
