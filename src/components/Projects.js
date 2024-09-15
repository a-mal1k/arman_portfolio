import React from 'react';
import { unsplashPhotos } from '../utils/myData';
import LoadingImg from './LoadingImg';
const Projects = () => {

    return (
        <section className="relative py-10 md:py-20 z-10 bg-stone-100 dark:bg-slate-800">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col justify-between items-start">
                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h1 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Projects</span>
                        </h1>
                        <div className="rounded-md">
                            <ul className="flex justify-start items-stretch flex-wrap -m-4">
                                {unsplashPhotos.map((image, index) => (
                                    <li key={index} className="w-full md:w-1/2 lg:w-1/3 rounded-md p-4 grid-full">
                                        <span className="cursor-pointer w-full h-[250px] relative block">
                                            <LoadingImg className="image-card aspect-square w-full object-cover h-[250px] block" src={image.thumbUrl} />
                                        </span>
                                        <h1 className="flex items-center text-2xl gap-4 my-4">
                                            <span>{image.title}</span>
                                            {image.url && (<a href={image.url} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                                            </svg></a>)
                                            }
                                        </h1>
                                        <div className='flex flex-wrap justify-start items-start'>
                                            {image.techStack.map((tech, index) => {
                                                return (
                                                    <span className="font-normal text-slate-700 dark:text-slate-300 relative border border-stone-400 py-1 px-4 rounded-md dark:border-slate-700 mr-2 mb-2" key={index}>{Object.values(tech)}</span>
                                                );
                                            })}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;