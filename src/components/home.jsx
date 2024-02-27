import React from 'react'
import { Zoom, Fade, Bounce } from 'react-reveal';
import { useNavigate } from "react-router-dom";
const HomePage = (props) => {
    const navigate = useNavigate();
    const OpenModelPage = () => {
        navigate("/contracts");
    }
    return (

        <div id="home" className="w-full z-[2] dark:bg-[rgb(22,22,22)] transition-all h-screen">
            <div className="flex justify-center items-center h-full">
                <div className="w-full mx-auto main-visual flex flex-wrap items-center justify-center h-full">
                        <div className="w-full flex flex-row items-center justify-between main-visual">
                            <div className="w-[50%] md:max-w-[50%] ">
                                <Fade right cascade>
                                    <div className="pt-[0px] w-full flex justify-center items-center flex-col gap-2">
                                        <h1 className=" text-[3rem] pb-3 dark:text-white text-center">
                                            Welcome to the <span className="text-[#ffb4ed] dark:text-[#FFD6F5] hover:animate-pulse duration-500">commune</span>!
                                        </h1>
                                        <p className="hero__subtitle text-2xl text-center dark:text-white">
                                            The most <span className="text-[#ffb4ed] dark:text-[#FFD6F5]">popular</span> <span className="text-[#6db1ff] dark:text-[#6db1ff]">smart</span> <span className="text-[#FF8F8F]  dark:text-[#FF8F8F]">contracts</span> on <span className="text-[#ffef40] dark:text-[#FFF7A1]">evm</span>.
                                        </p>
                                        <button onClick={OpenModelPage} class="relative inline-flex items-center px-12 py-3 mt-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 dark:bg-[rgb(22,22,22)]">
                                            <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 dark:bg-[rgb(31,31,31)] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span class="relative">Get Started</span>
                                        </button>
                                    </div>
                                </Fade>
                            </div>
                            <div className='hidden md:flex md:flex-col items-center justify-end w-[50%] '>
                                <Fade right cascade>
                                    <img src="./images/commune.gif" className="mt-[0px] max-w-[720px] max-h-[680px] w-[50%]" alt="" />
                                </Fade>
                            </div>

                        </div>
                </div>

            </div>
        </div>

    )

}

export default HomePage;
