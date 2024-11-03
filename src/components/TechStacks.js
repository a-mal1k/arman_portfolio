import React from 'react'
import { getSkills } from '../utils/myData';
import TechStack from './TechStack';
const TechStacks = () => {
    return (
        <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
            <h1  data-aos="fade-left" className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                <span>Tech Stack</span>
            </h1>
            <div className="rounded-md">
                <ul className="flex justify-center items-stretch flex-wrap gap-3">
                    {getSkills[0].map((data) => {
                        return (
                            <TechStack key={data.id} name={data.name} techLogo={data.src} />
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TechStacks