const Achivement = ({title, company, year, description}) => {
    return(
 
        <li data-aos="fade-up" className="flex flex-col relative pl-5 lg:pl-20 before:content-[''] before:absolute before:left-[-4px] before:w-2 before:h-2 before:rounded-full before:top-0 before:bg-black dark:before:bg-slate-700 mb-14">
        <h2 className="mb-4 flex justify-between items-center text-slate-700 dark:text-slate-300">
            <span className="font-bold text-xl">{title}</span>
        </h2>
        <h3 className="mb-4 flex flex-col justify-start items-start text-stone-600 dark:text-slate-400">
            <span className="font-bold ">{description}</span>
            <span className="mt-2">{company} - {year}</span>
        </h3>
    </li>
    );
}

export default Achivement;