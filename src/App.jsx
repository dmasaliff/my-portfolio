import React, { useEffect } from "react"
import {useRef,useState} from "react"
import ThemeToggle from "./darkMode";
import myImage from './assets/img/2.jpg'
import myImage1 from './assets/img/1 (2).jpg'
import myImage2 from './assets/img/2 (2).png'
import myImage3 from './assets/img/1 (4).png'
import myImage4 from './assets/img/2 (3).png'

function App() {
  const hamburgerRef = useRef(null);
  const navMenu = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header');
    const fixedNav = header ? header.offsetTop : 0;

    const handleScroll = () => {
      if(window.pageYOffset > fixedNav) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }

  },[]);


  const handleClick = () => {
    setIsActive(!isActive);
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle('hamburger-active');
      navMenu.current.classList.toggle('hidden');
    }
  };

  return (
    <>
      <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${isFixed?'navbar-fixed':''}`}>
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-10">
              <a href="#home" className="font-bold text-lg text-dark block py-6 hover:text-red-500 dark:text-white">Dimas.</a>
            </div>
            <div className="flex items-center px-4">
              <button ref={hamburgerRef} id="hamburger" name="hamburger" type="button" className="block absolute right-10 lg:hidden" onClick={handleClick}>
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav ref={navMenu} id="nav-menu" className="hidden absolute py-5 bg-white [&>*]:text-dark:text-base:py-2 shadow-lg dark:bg-dark dark:shadow-slate-500 rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:dark:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex">
                  <li className="group">
                    <a href="#home" className=" mx-8 flex group-hover:text-red-500 dark:text-white">Home</a>
                  </li>
                  <li className="group">
                    <a href="#about" className=" mx-8 flex group-hover:text-red-500 dark:text-white">About Me</a>
                  </li>
                  <li className="group">
                    <a href="#portfolio" className=" mx-8 flex group-hover:text-red-500 dark:text-white">Portfolio</a>
                  </li>
                  <li className="group">
                    <a href="#contact" className=" mx-8 flex group-hover:text-red-500 dark:text-white">Contact</a>
                  </li>
                  <ThemeToggle />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id='home' className='py-32 bg-primary dark:bg-dark'>
        <div className="container">
          <div className='flex flex-wrap'>
            <div className="w-full self-center px-9 lg:pt-16 lg:w-1/2">
              <h1 className='font-mono font-semibold text-dark dark:text-white md:text-xl'>Hello I'm <span className='block font-sans font-bold text-dark dark:text-white text-4xl mt-2 lg:text-5xl'>Dimas Alif Ferdiansyah</span> </h1>
              <h2 className='font-medium text-dark dark:text-white text-lg mb-1 mt-1 lg:text-2xl'>Full Stack Developer & UI / UX Designer</h2>
              <p className="font-semibold text-base text-dark dark:text-white mt-2 mb-5">Focused on crafting engaging and user-friendly web experiences.</p>
              <button className="text-base font-semibold text-white bg-rose-500 py-3 px-7 rounded-full mb-20 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                <a href="https://wa.me/6285726129692">Contact Me</a>
              </button>
            </div>
            <div className="w-full self-end px-9 lg:w-1/2 lg:pl-32 lg:pb-9">
              <div className="relative w-80 h-80 lg:mb-12 xl:mt-5 rounded-lg shadow-lg overflow-hidden">
                <img src={myImage} alt="foto saya" className="imageSendiri object-cover w-auto h-auto rounded-lg "/>
              <div class="absolute inset-0 border-4 border-black border-opacity-50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id='about' className="pt-20 pb-10 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-9 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-dark dark:text-white text-lg mb-3">About Me</h4>
              <h2 className="font-bold text-dark dark:text-white text-3xl mb-5 lg:text-4xl">My Journey in Web Development</h2>
              <p className="font-medium text-base text-slate-800 dark:text-white max-w-xl mb-5 lg:text-lg ">Since my college years, I have been fascinated by how technology shapes the world around us, particularly by how digital interactions are built. This initial interest quickly evolved into a deep passion for web development. I began my journey by learning the fundamentals of pure HTML, CSS, and JavaScript. Subsequently, I continued to delve into various modern frameworks and libraries, including ReactJS and NodeJS, to hone my skills. I also have experience in backend development and database programming using PHP. With a strong background in web development, I am capable of translating design concepts into clean, efficient, and user-friendly code, primarily utilizing ReactJS and Tailwind CSS.</p>
              <div class="flex flex-wrap gap-4">
                <span class="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-blue-200 transition-colors duration-200">
                ReactJS
                </span>
                <span class="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-green-200 transition-colors duration-200">
                Tailwind CSS
                </span>
                <span class="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-yellow-200 transition-colors duration-200">
                JavaScript
                </span>
                <span class="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-purple-200 transition-colors duration-200">
                Node.js
                </span>
                <span class="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-red-200 transition-colors duration-200">
                Figma (UI/UX)
                </span>
                <span class="inline-block bg-gray-400 text-gray-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 transition-colors duration-200">
                Git & GitHub
                </span>
                <span class="inline-block bg-slate-400 text-slate-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-slate-200 transition-colors duration-200">
                PHP
                </span>
              </div>
            </div>
            <div className="w-full px-10 lg:w-1/2">
              <h1 className="text-dark dark:text-white text-2xl font-semibold mb-4 lg:text-3xl lg:pt-10">Let's Connect</h1>
              <p className="font-medium text-base text-slate-800 dark:text-white mb-6 lg:text-lg">Connect with us through social media and communication platforms available below.</p>
              <div className="flex items-center">
                <a href="https://www.youtube.com/DimasAlifFerdiansyah" target="_blank" className="w-9 h-9 rounded-full border border-primary flex justify-center items-center mr-3 hover:bg-primary hover:text-white dark:text-white hover:dark:text-dark">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.instagram.com/dmasaliff" target="_blank" className="w-9 h-9 rounded-full border border-primary flex justify-center items-center mr-3 hover:bg-primary hover:text-white dark:text-white hover:dark:text-dark">
                <svg role="img" width='20' className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                </a>
                <a href="https://www.line.me/dmasaliff" target="_blank" className="w-9 h-9 rounded-full border border-primary flex justify-center items-center mr-3 hover:bg-primary hover:text-white dark:text-white hover:dark:text-dark">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LINE</title><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="pt-36 pb-16 bg-slate-200 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-xl text-dark dark:text-white mb-2">Portfolio</h4>
              <h2 className="font-bold text-dark dark:text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">My latest projects</h2>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={myImage1} alt="landing page" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark dark:text-white mt-5 mb-3">Dimas Landing Page</h3>
              <p className="font-medium text-base text-slate-800 dark:text-slate-100 ">My latest UI/UX project is a portfolio website design</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={myImage2} alt="e-commerce" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark dark:text-white mt-5 mb-3">E-Commerce</h3>
              <p className="font-medium text-base text-slate-800 dark:text-slate-100 ">My second UI/UX project is a e-commerce website design</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={myImage3} alt="landing page" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark dark:text-white mt-12 mb-3">Sellora</h3>
              <p className="font-medium text-base text-slate-800 dark:text-slate-100 ">My latest web project is a marketplace</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={myImage4} alt="E-Commerce" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark dark:text-white mt-5 mb-3">E-Commerce</h3>
              <p className="font-medium text-base text-slate-800 dark:text-slate-100 ">My UI/UX project is a e-commerce website design</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pt-36 pb-32 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="font-bold text-dark dark:text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Contact Us</h2>
            </div>
          </div>
          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label htmlFor="name" className="text-base text-primary font-bold">Name</label>
                <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full px-4 mb-8">
                <label htmlFor="email" className="text-base text-primary font-bold">Email</label>
                <input type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full px-4 mb-8">
                <label htmlFor="message" className="text-base text-primary font-bold">Message</label>
                <textarea type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-dark pt-24 pb-12 dark:bg-slate-800">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h3 className="font-bold text-2xl mb-2">Contact me</h3>
              <p>085726129692</p>
              <p>dimasalifferdiansyah@gmail.com</p>
              <p>Jakarta</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Link</h3>
              <ul className="text-slate-300">
                <li>
                  <a href="#home" className="inline-block text-base hover:text-primary mb-3">Home</a>
                </li>
                <li>
                  <a href="#about" className="inline-block text-base hover:text-primary mb-3">About Me</a>
                </li>
                <li>
                  <a href="#portfolio" className="inline-block text-base hover:text-primary mb-3">Portfolio</a>
                </li>
                 <li>
                  <a href="#contact" className="inline-block text-base hover:text-primary mb-3">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <p className="font-medium text-sm text-slate-500 text-center">Built by <a href="http://instagram.com/dmasaliff" target="_blank" className="font-bold text-primary">Dimas Alif Ferdiansyah</a>, using React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </>
  )
};

export default App
