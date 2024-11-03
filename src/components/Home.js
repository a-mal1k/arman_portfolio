import React from "react";
import { getSkills } from '../utils/myData';
import usePersonalDetails from '../utils/usePersonalDetails';

import UserImg from '../assets/images/userPic_light2.gif';
import UserImgDark from '../assets/images/userPic_dark2.gif'
import { useTheme } from "../utils/ThemeContext";


const Home = () => {

    const personalInfo = usePersonalDetails();
    const { isDarkMode } = useTheme();

    const {
        name,
        bio,
    } = personalInfo;

    return (
        <section className="relative z-10 bg-stone-100 dark:bg-slate-800">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className='flex flex-col lg:mt-10 lg:pt-5  items-center justify-center  w-full p-0 bg-stone-200 dark:bg-slate-700 lg:bg-transparent dark:lg:bg-transparent'>
                        <img data-aos="zoom-in" src={isDarkMode ? UserImg : UserImgDark} alt="Arman Ali" className="max-w-80 lg:max-w-full lg:rounded-full" />
                    </div>
                    <div className="flex px-4 lg:px-0 flex-col w-full lg:w-8/12 mt-10 rounded-md lg:p-5 pt-0 lg:pl-14">
                        <h1 data-aos="zoom-in-down" className="text-4xl font-bold leading-10 text-slate-700 dark:text-stone-50 mb-4">{name}</h1>
                        <p data-aos="fade-left" data-aos-delay="100"  className="my-4 text-slate-500 dark:text-slate-300 font-normal">{bio}</p>
                        <ul className="flex flex-col mt-3 ">
                            <li className="mb-8">
                                <span className="font-normal text-gray-600 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Role</span>
                                <h2 data-aos="fade-left" data-aos-delay="200"  className="text-slate-700 dark:text-slate-300 font-bold text-xl mt-0">Frontend Developer</h2>
                            </li>
                            <li className="mb-8">
                                <span className="font-normal text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Year of Experience</span>
                                <h3  data-aos="fade-left" data-aos-delay="300"  className="text-slate-700 dark:text-slate-300 font-bold text-xl mt-0">5 Years</h3>
                            </li>
                            <li className="mb-8">
                                <span className="font-normal text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Skillsets</span>
                                <div className="mt-2 flex flex-wrap gap-y-3 gap-x-3">
                                    {getSkills[0].map((data, index) => {
                                        return (
                                            <span data-aos="fade-up" data-aos-delay={`${index}00`}  key={data.id} className="font-normal text-slate-700 dark:text-slate-300 relative border border-stone-400 py-1 px-4 rounded-md dark:border-slate-700">{data.name} - <strong>{data.experience}</strong></span>
                                        );
                                    })}

                                </div>

                            </li>
                            <li className="mb-8">
                                <span className="font-normal text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Soft Skills</span>
                                <div className="mt-2 flex flex-wrap gap-y-3 gap-x-3">
                                    {getSkills[1].map((data, index) => {
                                        return (
                                            <span data-aos="fade-up" data-aos-delay={`${index}00`} key={data.id} className="font-normal text-slate-700 dark:text-slate-300 relative border border-stone-400 py-1 px-4 rounded-md dark:border-slate-700">{data.name}</span>
                                        );
                                    })}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home;