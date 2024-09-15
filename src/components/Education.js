import { educationData } from '../utils/myData';
const Education = () => {
    return (
        <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
            <h2 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                <span>Education</span>
            </h2>
            <div className="rounded-md">
                <ul className="border-l border-stone-600 dark:border-slate-700">
                    {educationData.map((listData) => {
                        return (
                            <li key={listData.id} className="flex flex-col relative pl-5 lg:pl-20 before:content-[''] before:absolute before:left-[-4px] before:w-2 before:h-2 before:rounded-full before:top-0 before:bg-black dark:before:bg-slate-700 mb-14">
                                <h2 className="mb-4 flex justify-between items-center text-slate-700 dark:text-slate-300">
                                    <span className="font-bold text-xl">{listData.degree}</span>
                                </h2>
                                <h3 className="mb-4 flex flex-col justify-start items-start text-stone-600 dark:text-slate-400">
                                    <span className="font-bold ">{listData.college}</span>
                                    <span className="mt-2">{listData.year_of_passing}</span>
                                    <span className="mt-2">{listData.board}</span>
                                    <span className="mt-2">{listData.grade}</span>
                                </h3>
                            </li>
                        );
                    })}

                </ul>
            </div>
        </div>

    );
}
export default Education;