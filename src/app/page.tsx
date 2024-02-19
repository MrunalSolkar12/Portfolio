"use client";

import { NextUIProvider } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import AnimatedCursor from "react-animated-cursor";
import { Image, Button, Tooltip } from "@nextui-org/react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { IntroPage } from "./components/IntroPage";

import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const handleBackToTop = () => {
    gsap.to(window, {
      duration: 2, // Animation duration in seconds
      scrollTo: 500,
      ease: "power2.out",
    });
  };

  const handleBackToContact = () => {
    gsap.to(window, {
      duration: 3, // Animation duration in seconds
      scrollTo: ".contact-details",
      ease: "power2.out",
    });
  };

  const handleBackToProjects = () => {
    gsap.to(window, {
      duration: 3, // Animation duration in seconds
      scrollTo: ".projects-text",
      ease: "power2.out",
    });
  };

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/1200/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Mumbai,India.",
      title: "Location",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/1200/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.802.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "8369746017",
      title: "Phone",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/1200/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "mrunalsolkar11@gmail.com",
      title: "Email",
    },
  ];

  return (
    <>
      <NextUIProvider>
        <AnimatedCursor
          innerSize={13}
          outerSize={16}
          color="193, 11, 118"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[".intro-text", ".myimage"]}
        />

        {showIntro ? (
          <Slide duration={1400} direction="down">
            <IntroPage />
          </Slide>
        ) : (
          <div>
            <Zoom duration={1000} fraction={0.5} triggerOnce>
              <div className="max-w-screen-2xl mx-auto px-4 py-28 gap-12 text-gray-600 md:pt-52 md:px-8">
                <div className=" space-y-5  max-w-7xl mx-auto text-center">
                  <h1 className="hero text-sm text-indigo-600 font-medium">
                    Build by Mrunal Solkar
                  </h1>
                  <h2 className="hero text-5xl text-gray-800 font-extrabold mx-auto md:text-6xl lg:text-8xl">
                    Mrunal is a
                    <span className="text-white">
                      Software Developer in Mumbai,India
                    </span>
                  </h2>
                </div>

                <div className="flex  justify-center flex-wrap md:flex-nowrap space-x-6  mt-10">
                  <Tooltip showArrow={true} content="Email" placement="bottom">
                    <Button
                      isIconOnly
                      color="default"
                      aria-label="Like"
                      style={{
                        width: 80,
                        height: 80,

                        borderRadius: 25,
                        backgroundColor: "#343a40",
                      }}
                      className="button-logo rotate-0 md:rotate-[-10deg] md:mt-3"
                      onClick={handleBackToContact}
                    >
                      <svg
                        xmlns="http://www.w3.org/1200/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-8 h-8"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                      </svg>
                    </Button>
                  </Tooltip>
                  <Tooltip showArrow={true} content="Github" placement="bottom">
                    <Button
                      isIconOnly
                      color="default"
                      aria-label="Like"
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 25,
                        backgroundColor: "#343a40",
                      }}
                      className="button-logo rotate-0 md:rotate-[-5deg] md:mt-0"
                    >
                      <Link href="https://github.com/MrunalSolkar12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-12 h-12"
                          viewBox="0 0 128 128"
                          id="github"
                        >
                          <g fill="white">
                            <path
                              fillRule="evenodd"
                              d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                              clipRule="evenodd"
                            ></path>
                            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                          </g>
                        </svg>
                      </Link>
                    </Button>
                  </Tooltip>

                  <Tooltip
                    showArrow={true}
                    content="LinkedIn"
                    placement="bottom"
                  >
                    <Button
                      isIconOnly
                      color="default"
                      aria-label="Like"
                      style={{
                        width: 80,
                        height: 80,

                        borderRadius: 25,
                        backgroundColor: "#343a40",
                      }}
                      className="button-logo rotate-0 md:rotate-[0deg] "
                    >
                      <Link href="https://www.linkedin.com/in/mrunal-solkar-49a1ba226/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          className="w-12 h-12"
                          viewBox="0 0 512 512"
                          id="linkedin"
                        >
                          <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path>
                        </svg>
                      </Link>
                    </Button>
                  </Tooltip>

                  <Tooltip showArrow={true} content="Resume" placement="bottom">
                    <Button
                      isIconOnly
                      color="default"
                      aria-label="Like"
                      style={{
                        width: 80,
                        height: 80,

                        borderRadius: 25,
                        backgroundColor: "#343a40",
                      }}
                      className="button-logo rotate-0 md:rotate-[5deg] md:mt-0 mt-5"
                    >
                      <Link href="/MrunalSolkar.pdf">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="white"
                          className="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                          />
                        </svg>
                      </Link>
                    </Button>
                  </Tooltip>

                  <Tooltip
                    showArrow={true}
                    content="Projects"
                    placement="bottom"
                  >
                    <Button
                      isIconOnly
                      color="default"
                      aria-label="Like"
                      style={{
                        width: 80,
                        height: 80,

                        borderRadius: 25,
                        backgroundColor: "#343a40",
                      }}
                      className="button-logo rotate-0 md:rotate-[10deg] md:mt-3 mt-5"
                      onClick={handleBackToProjects}
                    >
                      <svg
                        xmlns="http://www.w3.org/1200/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-8 h-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                          clipRule="evenodd"
                        />
                        <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                        <path
                          fillRule="evenodd"
                          d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </Tooltip>
                </div>

                <div className="flex justify-center text-md mt-10">
                  <h3 className="border-2 py-2 px-6 rounded-full border-white text-white">
                    CURRENT
                  </h3>
                </div>
                <div className="flex justify-center text-md md:text-xl  text-center mt-10 text-white font-sans">
                  <h2>Software Developer / Consultant at Credence Analytics</h2>
                </div>
              </div>
            </Zoom>

            <div className="intro">
              <Fade duration={1200} fraction={0.5}>
                <h1 className="intro-text  font-sans lg:w-full text-5xl text-white py-14 lg:py-28  lg:text-9xl lg:pt-28  lg:pl-20 pl-6">
                  I create elevating digital experiences that inspire and
                  connect with people through development and design.
                </h1>
              </Fade>
            </div>

            <div className="aboutme">
              <h1 className="aboutme-text text-5xl py-16 lg:py-32 flex justify-center items-center lg:text-9xl ">
                <svg
                  className="hidden sm:block sm:scale-125 xl:scale-[200%]"
                  width="20"
                  height="20"
                  viewBox="0 0 32 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
                    fill="white"
                  ></path>
                </svg>

                <Slide duration={1000} fraction={0.5} direction="down">
                  <span className="px-10 text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] font-sans">
                    ABOUT ME
                  </span>
                </Slide>
                <svg
                  className="hidden sm:block sm:scale-125 xl:scale-[200%]"
                  width="20"
                  height="20"
                  viewBox="0 0 32 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="image-section w-full px-6 img group inline-block overflow-hidden duration-200 ease-linear  lg:rounded-xl">
                <Image
                  src="/images/myimage2.jpg"
                  alt="Developer Image"
                  isZoomed
                  className="myimage h-full w-screen bg-bottom  md:h-full rounded-md"
                />
              </div>

              <div className="about-container  text-white w-full px-6 pt-5 font-sans ">
                <Fade duration={1200} fraction={0.5}>
                  <h1 className="text-4xl  font-bold md:text-5xl lg:text-7xl">
                    A brief intro, who am I?
                  </h1>
                </Fade>

                <Fade duration={1200} fraction={0.5}>
                  <h2 className="about-text text-lg pt-4 font-light md:text-2xl lg:text-4xl lg:pt-16 ">
                    I am an independent Full-Stack developer, primarly focused
                    as frontend developer based in Mumbai, India.
                  </h2>
                </Fade>

                <Fade duration={1200} fraction={0.5}>
                  <h2 className="about-text text-lg pt-6 font-light md:text-2xl lg:text-4xl lg:pt-16">
                    My expertise lies in creating comprehensive and
                    user-friendly designs, coupled with robust backend
                    development, aimed at providing startups and small
                    businesses with a distinctive digital presence.
                  </h2>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <h2 className="about-text text-lg pt-6 font-light md:text-2xl lg:text-4xl lg:pt-16">
                    My goal is to make a profound impact through elevated and
                    intuitive solutions. 😎
                  </h2>
                </Fade>
              </div>
            </div>

            <div className="professional-skillset w-68 text-center lg:w-full">
              <div className="flex justify-center items-center pr-10  text-5xl  lg:text-9xl pt-48">
                <Slide duration={1000} fraction={0.1} direction="down">
                  <svg
                    className="hidden sm:block sm:scale-125 xl:scale-[200%]"
                    width="20"
                    height="20"
                    viewBox="0 0 32 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
                      fill="white"
                    ></path>
                  </svg>

                  <span className="px-10 text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] font-sans">
                    PROFESSIONAL <span className="pl-20 md:p-0">SKILLSET</span>
                  </span>

                  <svg
                    className="hidden sm:block sm:scale-125 xl:scale-[200%]"
                    width="20"
                    height="20"
                    viewBox="0 0 32 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
                      fill="white"
                    ></path>
                  </svg>
                </Slide>
              </div>
            </div>

            <div className="skillset-description mt-10  grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24  lg:pl-20 pl-6">
              <div className="space-y-6">
                <div className="skillset-innertext space-y-3 text-white 2xl:space-y-10">
                  <Fade duration={1200} fraction={0.5}>
                    <h3 className="text-heading-3 md:text-5xl  lg:text-7xl font-semibold leading-tight translate-y-10  text-4xl">
                      my expertises.
                    </h3>
                  </Fade>
                  <Fade duration={1200} fraction={0.5}>
                    <p className="max-w-md xl:max-w-2xl text-body-1 md:text-2xl lg:text-4xl translate-y-10  text-lg  font-light font-sans">
                      I focus on all things design and web related. With each of
                      my services, my goal is to deliver an impactful and
                      elevating digital experience for everyone.
                    </p>
                  </Fade>
                </div>
                <div
                  className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="select-none leading-[2.3rem]  md:leading-[2.5rem] lg:leading-[3.4rem] translate-y-10 opacity-1 ">
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans  text-special md:text-5xl  lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    Frontend
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special md:text-5xl  lg:text-7xl font-extrabold  text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    Backend
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special md:text-5xl  lg:text-7xl font-extrabold  text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    API Development
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special md:text-5xl  lg:text-7xl font-extrabold  text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    Problem Solving
                  </p>
                </Fade>
              </div>
            </div>

            <div className=" skillset-description  mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24 lg:pl-20 pl-6  ">
              <div className="space-y-6">
                <div className="skillset-innertext space-y-3 text-white 2xl:space-y-10">
                  <Fade duration={1200} fraction={0.5}>
                    <h3 className="text-heading-3 md:text-5xl lg:text-7xl font-semibold leading-tight translate-y-10 opacity-1 text-4xl ">
                      my digital tool box.
                    </h3>
                  </Fade>
                  <Fade duration={1200} fraction={0.5}>
                    <p className="max-w-md xl:max-w-2xl text-body-1 md:text-2xl lg:text-4xl translate-y-10 opacity-1 text-lg  font-light font-sans">
                      These are my go to tech stack to make any projects happen.
                      I am always eager of learning more about my current stack,
                      and new technologies that could expand my horizons.
                    </p>
                  </Fade>
                </div>
                <div
                  className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"
                  style={{ width: "100%" }}
                ></div>
              </div>

              <div className="select-none leading-[2.3rem]  md:leading-[2.5rem] lg:leading-[3.4rem] translate-y-10 opacity-1 ">
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special  md:text-5xl  lg:text-7xl font-extrabold  text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    JavaScript
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special  md:text-5xl lg:text-7xl font-extrabold  text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    TypeScript
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special md:text-5xl lg:text-7xl font-extrabold  text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    HTML
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special   md:text-5xl lg:text-7xl font-extrabold  text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    CSS
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special  md:text-5xl  lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    Tailwind CSS
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special   md:text-5xl lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    React
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special  md:text-5xl  lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    Redux
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special   md:text-5xl lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    NextJS
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special   md:text-5xl lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    NodeJS
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special   md:text-5xl lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    MongoDB
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special   md:text-5xl lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    MySQL
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special  md:text-5xl  lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    Docker
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special   md:text-5xl lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    AWS
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special   md:text-5xl lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    Linux
                  </p>
                </Fade>
                <Fade duration={1200} fraction={0.5}>
                  <p className="font-sans text-special   md:text-5xl lg:text-7xl font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    Rest API
                  </p>
                </Fade>
              </div>
            </div>

            <div className="projects">
              <h1 className="projects-text text-5xl pt-40 flex justify-center items-center lg:text-9xl ">
                <svg
                  className="hidden sm:block sm:scale-125 xl:scale-[200%]"
                  width="20"
                  height="20"
                  viewBox="0 0 32 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
                    fill="white"
                  ></path>
                </svg>

                <Slide duration={1000} fraction={0.5} direction="down">
                  <span className="px-10 text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] font-sans">
                    PROJECTS
                  </span>
                </Slide>
                <svg
                  className="hidden sm:block sm:scale-125 xl:scale-[200%]"
                  width="20"
                  height="20"
                  viewBox="0 0 32 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-7 lg:px-20 mt-20 lg:mt-32">
              <div className="">
                <Link href="https://github.com/MrunalSolkar12/Pixels">
                  <Image
                    isZoomed
                    className="myimage project-img w-screen h-80 object-cover  lg:h-full lg:w-screen"
                    src="/images/Capture.png"
                    alt="Pixels"
                  />
                </Link>
                <div className="mt-4 ">
                  <div className="flex space-x-2 mb-3 text-white">
                    <p className=" font-extralight bg-transparent  flex justify-center items-center px-6 py-0  text-sm text-body-4 2xl:text-3xl">
                      2023
                    </p>
                    <p className=" font-extralight bg-transparent  flex justify-center items-center px-4 py-1 text-sm  text-body-4 2xl:text-3xl">
                      NextJS • TailwindCSS • Mongodb • Zod • TypeScript • Resend
                      • NodeJs
                    </p>
                  </div>
                  <div className="2xl:space-y-3  text-white">
                    <h3 className="text-works-title 2xl:text-5xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                      Pixels Website
                    </h3>
                  </div>
                </div>
              </div>

              <div className="">
                <Link href="https://white-board-test.vercel.app/">
                  <Image
                    isZoomed
                    className="myimage project-img w-screen h-80 object-cover  lg:h-auto"
                    src="/images/WhiteBoard2.png"
                    alt="Pixels"
                    width="400"
                    height="400"
                  />
                </Link>
                <div className="mt-4 ">
                  <div className="flex space-x-2 mb-3 text-white">
                    <Fade duration={1200} fraction={0.5}>
                      <p className="rounded-full font-extralight bg-transparent  flex justify-center items-center px-6 py-0  text-sm text-body-4 2xl:text-3xl">
                        2023
                      </p>
                    </Fade>
                    <Fade duration={1200} fraction={0.5}>
                      <p className="rounded-full font-extralight bg-transparent  flex justify-center items-center px-4 py-1 text-sm  text-body-4 2xl:text-3xl">
                        NextJS • TailwindCSS • React • Canva
                      </p>
                    </Fade>
                  </div>
                  <div className="2xl:space-y-3  text-white">
                    <Fade duration={1200} fraction={0.5}>
                      <h3 className="text-works-title 2xl:text-5xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                        WhiteBoard Website
                      </h3>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>

            <div className="aboutme">
              <h1 className="aboutme-text text-5xl pt-40 flex justify-center items-center lg:text-9xl ">
                <svg
                  className="hidden sm:block sm:scale-125 xl:scale-[200%]"
                  width="20"
                  height="20"
                  viewBox="0 0 32 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
                    fill="white"
                  ></path>
                </svg>

                <Slide duration={1000} fraction={0.5} direction="down">
                  <span className="px-10 text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] font-sans">
                    CONTACT
                  </span>
                </Slide>
                <svg
                  className="hidden sm:block sm:scale-125 xl:scale-[200%]"
                  width="20"
                  height="20"
                  viewBox="0 0 32 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </h1>
            </div>

            <div key="1" className="contact-details flex flex-wrap lg:px-10 py-10 lg:flex-nowrap">
              <main className="py-14 ">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                  <div className="max-w-6xl space-y-3">
                    <Fade duration={1200} fraction={0.5}>
                      <p className="contact-header text-white  font-semibold text-3xl md:text-5xl lg:text-7xl">
                        Love to hear from you ? Get in touch.
                      </p>
                    </Fade>
                    <Fade duration={1200} fraction={0.5}>
                      <p className=" text-md md:text-xl lg:text-xl text-white font-sans">
                        I am open to Job opportunities where I can contribute,
                        learn and grow. If you have a good opportunity that
                        matches my skills and experience then dont hesitate to
                        contact me...
                      </p>
                    </Fade>
                  </div>
                </div>
              </main>

              <div>
                <ul className="lg:mt-12  flex flex-wrap  pl-10 lg:flex-row  gap-x-12 gap-y-3 pr-10 items-center lg:gap-y-6 lg:flex-nowrap lg:w-full lg:gap-x-24">
                  {contactMethods.map((item, index) => (
                    <Fade key={1} duration={1200} fraction={0.5}>
                      
                        <li>
                          <h4 className="text-gray-600 lg:text-lg font-medium  text-white">
                            {item.title}
                          </h4>
                          <div className="mt-3 flex items-center gap-x-3 text-white">
                            <div className="flex-none text-gray-400">
                              {item.icon}
                            </div>
                            <p className="md:text-xl font-sans">
                              {item.contact}
                            </p>
                          </div>
                        </li>
                      
                    </Fade>
                  ))}
                </ul>
              </div>
            </div>

            <footer className="footer lg:flex lg:items-end lg:justify-between lg:text-xl px-5 py-4 flex justify-around text-body-4 md:text-body-3 bg-black text-sm text-white">
              <div className="flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between">
                <div className="flex space-x-1">
                  <span className="font-light ">©</span>
                  <span className="font-light ">2024</span>
                  <span className="font-extrabold uppercase 2xl:text-body-1">
                    Mrunal Solkar
                  </span>
                </div>
                <div>
                  <span className=" text-body-4 2xl:text-body-1 font-light ">
                    Site designed and coded with ❤️
                  </span>
                </div>
              </div>
              <button
                className="col-span-2 flex items-center space-x-2 w-fit group 2xl:text-body-1 pl-2"
                onClick={handleBackToTop}
              >
                <span className="font-extrabold uppercase hover:font-black duration-200">
                  BACK TO TOP
                </span>
                <span className="group-hover:-translate-y-3 duration-300 ease-in-out">
                  <svg
                    className="-rotate-80"
                    width="24"
                    height="24"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/1200/svg"
                  >
                    <g clipPath="url(#clip0_238_1313)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
                        fill="url(#paint0_linear_238_1313)"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_238_1313"
                        x1="14"
                        y1="26"
                        x2="179"
                        y2="179.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#D1D1C7"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </button>
            </footer>
          </div>
        )}
      </NextUIProvider>
    </>
  );
}
