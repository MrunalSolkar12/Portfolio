"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
//import Scrollbar from 'smooth-scrollbar';
import "gsap/EasePack";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useEffect(() => {
    
    //const scrollDistance = 100; // Adjust the distance as needed
    //const targetScrollPosition = window.scrollY + scrollDistance;

    // Set the scroll position with smooth scrolling using standard JavaScript
    /*gsap.to(window, {
      duration: 2, // Animation duration in seconds
      scrollTo: { y: 300, autoKill: true },
      ease: "power2.out", // Easing function
    });
*/
    
   /* gsap.to(".intro", {
      scrollTrigger: {
        trigger: ".intro",
        start: "top 40%",
        end: "2% 20%",
        markers: false,
        scrub: 4,
        onUpdate: (self) => {
          // Update the background color dynamically based on scroll position
          const progress = self.progress;
          const backgroundColor = progress > 0 ? "black" : "white";
          const navbarbackgroundColor = progress > 0 ? "black" : "white";
          const DiffbackgroundColor = progress > 0 ? "black" : "#b39c4d";
          const textColor = progress > 0 ? "white" : "white"; // Set to initial to use the default text color
          const navtextColor = progress > 0 ? "white" : "black"; // Set to initial to use the default text color
          const introtextColor = progress > 0 ? "#b39c4d" : "#b39c4d";

          gsap.to(".intro", {
            backgroundColor,
            color: introtextColor,
            duration: 0.5,
            ease: "power2.easeOut", // Use an easing function for a smoother transition
          });

          gsap.to(".navbar", {
            backgroundColor: navbarbackgroundColor,
            color: navtextColor,
            position:"fixed",
            duration: 1,
            ease: "power2.Out", // Use an easing function for a smoother transition
          });
          gsap.to(".diff1", {
            backgroundColor: DiffbackgroundColor,
            color: textColor,
            duration: 0.8,
            ease: "power2.easeOut", // Use an easing function for a smoother transition
          });

         
        },
      },
    });
*/
   

    // Get the text and container elements
    const text = document.querySelector(".aboutme-text");
    const container = document.querySelector(".aboutme");

    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline for the animation
   const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 60%", // Adjust the start position as needed
        end: "30% 70%", // Adjust the end position as needed
        scrub:4, // Smoothly animate the timeline as you scroll
        markers: false, // Show markers for debugging (remove in production)
      },
    });
    

    gsap.to(".intro", {
      backgroundColor: "white",
      duration: 0.2,
      ease: "Linear.easeNone",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "30% 70%",
        scrub: 4,
        markers: false,
      },
    });

    gsap.to(".navbar", {
      backgroundColor: "white",
      color: "black",
      duration: 0.1,
      ease: "Linear.easeNone",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "30% 70%",
        scrub: 4,
        markers: false,
      },
    });


    
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".professional-skillset",
        start: "top 60%", // Adjust the start position as needed
        end: "bottom 40%", // Adjust the end position as needed
        scrub: 2, // Smoothly animate the timeline as you scroll
        markers: false, // Show markers for debugging (remove in production)
      },
    });

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-text",
        start: "top 80%", // Adjust the start position as needed
        // Adjust the end position as needed
        scrub: 2, // Smoothly animate the timeline as you scroll
        markers: false, // Show markers for debugging (remove in production)
      },
    });

    const t5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-text ",
        start: "top 70%", // Adjust the start position as needed
        end : "center 50%",
        scrub: 4, // Smoothly animate the timeline as you scroll
        markers: false, // Show markers for debugging (remove in production)
      },
    });

    const t7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-text",
        start: "bottom 95%", // Adjust the start position as needed
        // Adjust the end position as needed
        scrub: 2, // Smoothly animate the timeline as you scroll
        markers: false, // Show markers for debugging (remove in production)
      },
    });

    const t8 = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro-text",
        start: "top 90%",
        end: "bottom 30%",
        scrub: 2,
        markers: false,
      },
    });

    // Add animation to the timeline
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 1, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    tl.to(".about-container", {
      color:"black",
      opacity: 1,
      y: 0,
      duration: 0.2, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

   

    tl.to(".skillset-innertext", {
      color:"black",
      opacity: 1,
      y: 0,
      duration: 0.2, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    


   

    t2.to(".skillset-text", {
      opacity: 1,
      y: 0,
      duration: 0.2, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    t2.to(".skillset-description ", {
      opacity: 1,
      y: 0,
      duration: 0.2, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });



    t3.to(".projects-text",{
      opacity: 1,
      y: 0,
      duration: 0.2, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    t3.to(".intro,.navbar", {
      backgroundColor:"black",
      duration: 0.2, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    t3.to(".navbar", {
      color:"white",
      duration: 0.1, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    t3.to(".navbar", {
      backgroundColor:"black",
      color:"white",
      duration: 0.1, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    t5.to(".contact-text", {
      opacity: 1,
      y: 0,
      duration: 0.2, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    t5.to(".intro,.navbar",{
      backgroundColor:"white",
      opacity: 1,
      y: 0,
      duration: 0.1, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    t5.to(".navbar",{
     color:"black",
      duration: 0.1, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    t5.to(".contact-header",{
      color:"black",
       duration: 0.1, // Adjust the duration as needed
       ease: "Linear.easeNone", // Adjust the easing function as needed
     });
     
    


    t7.to(".contact-details", {
      opacity: 1,
      y: 0,
      duration: 0.2, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });

    t8.to(".intro-text", {
      opacity: 1,
      y: 0,
      duration: 0.2, // Adjust the duration as needed
      ease: "Linear.easeNone", // Adjust the easing function as needed
    });


    //Cursor Animation Code
    // gsap.set(".follower", { xPercent: -50, yPercent: -50 });
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    // var follow = document.querySelector(".follower");
    var cur = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {
      gsap.set(cur.closest(".container"), {
        cursor: "none",
      });
      gsap.to(cur, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        cursor: "none",
      });
      
    });


   


  }, []);

  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
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
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "8369746017",
      title: "Phone",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
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

  const handleBackToTop = () => {
    gsap.to(window, {
      duration: 2, // Animation duration in seconds
      scrollTo: 0,
      ease: "power2.out",
    });
  };

  const handleContact = () => {
    gsap.to(window, {
      duration: 2, // Animation duration in seconds
      scrollTo: ".contact-section",
      ease: "power2.out",
    });
  };

  const handleSkillset = () => {
    gsap.to(window, {
      duration: 2, // Animation duration in seconds
      scrollTo: ".skillset-text",
      ease: "power2.out",
    });
  };

  const handleProjects = () => {
    gsap.to(window, {
      duration: 2, // Animation duration in seconds
      scrollTo: ".projects-text",
      ease: "power2.out",
    });
  };
  
  const handleAbout = () => {
    gsap.to(window, {
      duration: 2, // Animation duration in seconds
      scrollTo: ".aboutme-text",
      ease: "power2.out",
    });
  };

  return (
    <>
    <div>
      <div className="cursor"></div>
      <div className="navbar w-screen h-18  top-0 z-50 lg:w-full lg:h-20">
        
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={handleSkillset}>SKillSet</a>
              </li>
              <li>
                <a onClick={handleProjects}>Projects</a>
              </li>
              <li>
                <a onClick={handleAbout}>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-2xl"><Image className="w-10 h-10" src="/images/logo1.png" width={100} height={100}/></a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-neutral lg:text-xl" onClick={handleContact}>
            Let's Talk
          </button>
        </div>
      </div>

      
          <div className="diff aspect-[16/14] lg:aspect-[16/7]">
            <div className="diff-item-1">
              <div className="diff1 bg-black text-white font-black grid place-content-center text-6xl pl-16 lg:text-9xl">
                FullStack Developer
              </div>
            </div>
            <div className="diff-item-2">
              <div className="diff2 bg-base-200 font-black grid place-content-center text-6xl pl-20 lg:text-9xl">
                Hey, I'm Mrunal
              </div>
            </div>
            <div className="diff-resizer"></div>
          </div>

          {/* Introduction Section Starts*/}
          <div className=" intro h-full lg:h-max">
         
            <h1 className="intro-text w-11/12  text-5xl py-28  lg:text-9xl lg:pt-28 ">
              I create elevating digital experiences that inspire and connect
              with people through development and design.
            </h1>

            <div className="aboutme">
              <h1 className="aboutme-text text-5xl flex justify-center items-center lg:text-9xl ">
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
                    fill="#b39c4d"
                  ></path>
                </svg>

                <span className="px-10 text-special">ABOUT ME</span>

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
                    fill="#b39c4d"
                  ></path>
                </svg>
              </h1>
            </div>

            <div className="about-section w-full  pt-20 lg:flex justify-center  lg:h-screen lg:px-20">
              <div className="image-section w-full px-6 img group inline-block overflow-hidden duration-200 ease-linear lg:w-6/12 lg:rounded-xl">
                <img
                  src="/images/myimage.jpg"
                  className="h-96 w-full object-cover  duration-700 ease-in-out group-hover:scale-105 lg:h-full rounded-md"
                />
              </div>

              <div className="about-container  text-white w-full px-6 pt-5 cursive lg:w-6/12 ">
                <h1 className="text-3xl  font-bold lg:text-7xl">
                  A brief intro, who am I?
                </h1>

                <h2 className="about-text text-lg pt-4 font-light  lg:text-4xl lg:pt-16 ">
                  {" "}
                  I am an independent Full-Stack developer, primarly focused as frontend developer based in Mumbai, India.
                </h2>

                <h2 className="about-text text-lg pt-6 font-light lg:text-4xl lg:pt-16">
                My expertise lies in creating comprehensive and user-friendly designs, coupled with robust backend development, aimed at providing startups and small businesses with a distinctive digital presence. 
               
                </h2>

                <h2 className="about-text text-lg pt-6 font-light lg:text-4xl lg:pt-16">
                My goal is to make a profound impact through elevated and intuitive solutions.  😎
                </h2>
              </div>
            </div>
            {/*Skill Set Starts*/}
            <div className="professional-skillset w-64 text-center lg:w-full">
              <div className="flex justify-center items-center  skillset-text text-5xl  lg:text-9xl pt-48">
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
                    fill="#b39c4d"
                  ></path>
                </svg>
                <span className="px-10 text-special">
                  {" "}
                  PROFESSIONAL SKILLSET{" "}
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
                    fill="#b39c4d"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="skillset-description mt-10  grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24 ">
              <div className="space-y-6">
                <div className="skillset-innertext space-y-3 text-white 2xl:space-y-10">
                  <h3 className="text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-1 text-3xl pl-5">
                    my expertises.
                  </h3>
                  <p className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl translate-y-10 opacity-1 text-lg px-5 font-light">
                    I focus on all things design and web related. With each of
                    my services, my goal is to deliver an impactful and
                    elevating digital experience for everyone.
                  </p>
                </div>
                <div
                  className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem] translate-y-10 opacity-1 px-5">
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  Frontend 
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold  text-4xl">
                 Backend 
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold  text-4xl">
                 API Development
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold  text-4xl">
                Problem Solving
                </p>
               
              </div>
            </div>

            <div className=" skillset-description  mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
              <div className="space-y-6">
                <div className="skillset-innertext space-y-3 text-white 2xl:space-y-10">
                  <h3 className="text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-1 text-3xl px-5">
                    my digital tool box.
                  </h3>
                  <p className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl translate-y-10 opacity-1 text-lg px-5 font-light">
                    These are my go to tech stack to make any projects happen. I
                    am always eager of learning more about my current stack, and
                    new technologies that could expand my horizons.
                  </p>
                </div>
                <div
                  className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem] translate-y-10 opacity-1 px-5">
                <p className="font-general text-special 2xl:text-7xl font-extrabold  text-4xl">
                  JavaScript
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold  text-4xl">
                  HTML
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold  text-4xl">
                  CSS
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  Tailwind CSS
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  React
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  Redux
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  NextJS
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  NodeJS
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  MongoDB
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  MySQL
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  Docker
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  AWS
                </p>
                <p className="font-general text-special 2xl:text-7xl font-extrabold text-4xl">
                  Linux
                </p>
              </div>
            </div>
            {/*Skill Set Ends*/}

            <div className="projects-section w-64 text-center lg:w-full mt-24">
              <div className="projects-text flex justify-center items-center   text-5xl  lg:text-9xl pt-20 ">
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
                    fill="#b39c4d"
                  ></path>
                </svg>
                <span className="px-10 text-special"> PROJECTS </span>
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
                    fill="#b39c4d"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="projects-image-section mt-20  grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
              <div className=" col-span-1  md:col-span-12 ">
                <div className="px-6 lg:px-16 ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/MrunalSolkar12/Pixels"
                    className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
                  >
                    <Image 
                      className="project-img w-screen h-80 duration-700 ease-in-out group-hover:scale-105 lg:h-auto"
                      src="/images/pixels.png"
                      alt="IBGroup vietnam website mockup"
                      width={2000}
                      height={2000}
                    />
                    
                  </a>
                  <div className="mt-4 ">
                    <div className="flex space-x-2 mb-3">
                      <p
                        className="rounded-full font-extralight bg-transparent  flex justify-center items-center px-6 py-0  text-sm text-body-4 2xl:text-3xl"
                        style={{ border: "1px solid #b39c4d" }}
                      >
                        2023
                      </p>
                      <p
                        className="rounded-full font-extralight bg-transparent  flex justify-center items-center px-4 py-1 text-sm  text-body-4 2xl:text-3xl"
                        style={{ border: "1px solid #b39c4d" }}
                      >
                        NextJS • TailwindCSS • Mongodb
                      </p>
                    </div>
                    <div className="2xl:space-y-3  text-white">
                      <h3 className="text-works-title 2xl:text-5xl font-bold uppercase text-primary-200">
                        Pixels Website
                      </h3>
                      <p className="text-body-2 2xl:text-4xl font-extralight text-primary-400">
                        Pixels is a place where user can download high quality
                        images.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" col-span-1  md:col-span-12 mt-20">
                <div className="px-6 lg:px-16 ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://white-board-test.vercel.app/"
                    className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
                  >
                    <Image
                      className="project-img  w-screen h-64 duration-700 ease-in-out group-hover:scale-105 lg:h-auto"
                      src="/images/white-board.png"
                      alt="IBGroup vietnam website mockup"
                      width={2000}
                      height={2000}
                    />
                  </a>
                  <div className="mt-4 ">
                    <div className="flex space-x-2 mb-3">
                      <p
                        className="rounded-full font-extralight bg-transparent  flex justify-center items-center px-6 py-0  text-sm text-body-4 2xl:text-3xl"
                        style={{ border: "1px solid #b39c4d" }}
                      >
                        2023
                      </p>
                      <p
                        className="rounded-full  font-extralight bg-transparent   flex justify-center items-center px-4 py-1 text-sm  text-body-4 2xl:text-3xl"
                        style={{ border: "1px solid #b39c4d" }}
                      >
                        NextJS • TailwindCSS • Canvas
                      </p>
                    </div>
                    <div className="2xl:space-y-3 text-white">
                      <h3 className="text-works-title  2xl:text-5xl font-bold uppercase text-primary-200">
                        WhiteBoard
                      </h3>
                      <p className="text-body-2 2xl:text-4xl font-extralight text-primary-400">
                        WhiteBoard is a place where user can draw there ideas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Contact Section Starts*/}
            <div className="contact-section w-64 text-center lg:pt-28 lg:pb-16 lg:w-full">
              <div className="contact-text flex justify-center items-center text-5xl  lg:text-9xl pt-24 ">
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
                    fill="#b39c4d"
                  ></path>
                </svg>
                <span className="px-10 text-special"> CONTACT </span>
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
                    fill="#b39c4d"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="contact-details flex flex-wrap pl-6 py-10 lg:flex-nowrap">
              <main className="py-14 ">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                  <div className="max-w-6xl space-y-3">
                    <p className="contact-header text-white font-semibold text-3xl lg:text-7xl">
                      Love to hear from you ? Get in touch.
                    </p>
                    <p className=" text-md lg:text-xl">
                      I'm open to Job opportunities where I can contribute,
                      learn and grow. If you have a good opportunity that
                      matches my skills and experience then don't hesitate to
                      contact me..
                    </p>
                  </div>
                </div>
              </main>

              <div>
                <ul className="lg:mt-12  flex flex-wrap  pl-6 lg:flex-row  gap-x-12 gap-y-3 pr-10 items-center lg:gap-y-6 lg:flex-nowrap lg:w-full lg:gap-x-24">
                  {contactMethods.map((item, idx) => (
                    <li key={idx}>
                      <h4 className="text-gray-600 lg:text-lg font-medium">
                        {item.title}
                      </h4>
                      <div className="mt-3 flex items-center gap-x-3">
                        <div className="flex-none text-gray-400">
                          {item.icon}
                        </div>
                        <p className="text-md">{item.contact}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="pt-10 pl-4 flex space-x-4 ">

                      <a href="https://www.instagram.com/__mrunal12__/"><Image className="w-8 h-8 lg:w-12 lg:h-12" src="/images/insta.png" width={50} height={50}/></a>
                      <a href="https://github.com/MrunalSolkar12/"><Image  className="w-8 h-8  lg:w-12 lg:h-12"  src="/images/github.png" width={50} height={50}/></a>
                      <a href="https://www.linkedin.com/in/mrunal-solkar-49a1ba226/"><Image  className="w-8 h-8  lg:w-12 lg:h-12"  src="/images/linkedin.png" width={50} height={50}/></a>

                </div>
              </div>

             
            </div>
            {/*Contact Section Ends*/}
          </div>

          {/*Footer Section Starts*/}
          <footer className="footer lg:flex lg:items-end lg:justify-between lg:text-xl px-5 py-4 flex justify-around text-body-4 md:text-body-3 bg-black text-sm text-gray-600">
            <div className="flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between">
              <div className="flex space-x-1">
                <span className="font-light ">©</span>
                <span className="font-light ">2023</span>
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
                  className="-rotate-90"
                  width="24"
                  height="24"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <g clipPath="url(#clip0_238_1313)">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
                      fill="url(#paint0_linear_238_1313)"
                    ></path>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="paint0_linear_238_1313"
                      x1="14"
                      y1="26"
                      x2="179"
                      y2="179.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stopColor="#D1D1C7"></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                </svg>
              </span>
            </button>
          </footer>
          {/*Footer Section Ends*/}

          {/* Introduction Section Ends*/}
      
      </div>
    </>
  );
}
