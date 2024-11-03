import { useOutletContext } from 'react-router-dom';
import LoadingImg from '../LoadingImg';

const Projects = () => {
    const { data } = useOutletContext();
    return <>
        {data.map((project, index) => (
            <li key={index} className="w-full md:w-1/2 lg:w-1/3 rounded-md p-4 grid-full">
                <span className="cursor-pointer w-full h-[250px] relative block">
                    <LoadingImg className="image-card aspect-square w-full object-cover h-[250px] block" src={project.thumbUrl} />
                </span>
                <h1 className="flex items-center text-2xl gap-4 my-4">
                    <span>{project.title}</span>
                    {project.url && (
                        <a href={project.url} target='_blank' rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                            </svg>
                        </a>
                    )}
                </h1>
                <div className='flex flex-wrap justify-start items-start'>
                    {project.techStack.map((tech, i) => (
                        <span key={i} className="font-normal text-slate-700 dark:text-slate-300 relative border border-stone-400 py-1 px-4 rounded-md dark:border-slate-700 mr-2 mb-2">
                            {Object.values(tech)}
                        </span>
                    ))}
                </div>
            </li>
        ))}
    </>
}

export default Projects;
