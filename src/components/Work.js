import { useState, useEffect } from 'react';
import { workData } from '../utils/myData';
import WorkExpList from './WorkExpList';

const Work = () => {

    const [workExp, setWorkExp] = useState(0);

    useEffect(() => {
        handleExperience();
    }, [])

    function handleExperience() {
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const year = day * 365;
        let totalExp = 0;

        workData.forEach((dataItem) => {
            let joinDate = new Date(dataItem.joiningDate);
            const endDate = dataItem.currentlyWorking ? new Date() : new Date(dataItem.lastDate);
            const diff = endDate.getTime() - joinDate.getTime();
            totalExp += diff / year;
        });

        setWorkExp(parseFloat(totalExp.toFixed(2)));
    }

    return (
        <section className="relative py-10 md:py-20 z-10 bg-stone-100 dark:bg-slate-800">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col w-full lg:mt-10 rounded-md lg:p-5">
                        <h1 className="flex justify-between flex-col gap-3  lg:flex-row items-start lg:items-center text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span data-aos="fade-left">Work History</span>
                            <span data-aos="fade-left" data-aos-delay="200" className="font-medium text-xl lg:text-3xl relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 after:w-5 after:h-5 after:rounded-full after:-z-10">{workExp} Years</span>
                        </h1>
                        <ul className="border-l border-stone-600 dark:border-slate-700">
                            {workData.map((listData) => (

                                <WorkExpList key={listData.id} designation={listData.designation} companyName={listData.companyName} summary={listData.summary.map((item) => (<span className='block w-full mb-3 relative'><svg
                                    width="20px"
                                    height="20px"
                                    version="1.1"
                                    viewBox="0 0 16 16"
                                    className="absolute left-[-30px] top-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g transform="rotate(45 1254.8 524.44)">
                                        <path
                                            d="m11.532 1048.3h-1.996v-9h-9v-2h11z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                        />
                                    </g>
                                </svg>{item?.text}</span>))} joiningDate={listData.joiningDate} lastWorkingDate={listData.lastDate} currentlyWorking={listData.currentlyWorking} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Work;