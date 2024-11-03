import React from 'react'
import Achivement from './Achivement';
import { achievementData } from '../utils/myData';

export const Achievements = () => {
  return (
    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
    <h2 data-aos="fade-left" className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
        <span>Achievements</span>
    </h2>
    <div className="rounded-md">
        <ul className="border-l border-stone-600 dark:border-slate-700">
            {achievementData.map((listData) => {
                return (
                    <Achivement key={listData.id} title={listData.title} year={listData.year} description={listData.description} company={listData.company} />
                );
            })}

        </ul>
    </div>
</div>
  )
}
