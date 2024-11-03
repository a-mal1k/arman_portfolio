
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { industryProjectData, advanceProjectData, personalProjectData } from '../../utils/myData';

const ProjectGroup = () => {
    const projectData = {
        industry: industryProjectData,
        personal: personalProjectData,
        advance: advanceProjectData
    };
    const navLinkClassName = ({ isActive }) =>
        `flex text-sm lg:text-lg items-center justify-center p-2 rounded-lg ${isActive ? 'bg-lime-200 dark:bg-emerald-700' : 'bg-stone-300 dark:bg-slate-600 hover:shadow-inner hover:shadow-green-200'
        }`;
    const { projectType = 'industry' } = useParams();
    const data = projectData[projectType];


    return (
        <section className="relative py-10 z-10 bg-stone-100 dark:bg-slate-800 bg-">
            <div className="container mx-auto px-4 lg:px-0">
                <nav className='flex flex-wrap items-center justify-evenly w-full lg:w-2/4 mx-auto gap-5 pb-4 border-b-slate-400 border-b-2'>
                    <NavLink className={navLinkClassName} to="" end>Industry</NavLink>
                    <NavLink className={navLinkClassName} to="personal">Personal</NavLink>
                    <NavLink className={navLinkClassName} to="advance">Advance</NavLink>
                </nav>
                <section className="relative py-10 z-10 bg-stone-100 dark:bg-slate-800">
                    <div className="container mx-auto px-4 lg:px-0">
                        <div className="flex flex-col justify-between items-start">
                            <div className="flex flex-col w-full rounded-md lg:p-5">
                                <h2 data-aos="fade-left" className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                                    <span className='capitalize'>{projectType} Projects</span>
                                </h2>
                                <div className="rounded-md">
                                    <ul className="flex justify-start items-stretch flex-wrap -m-4">
                                        <Outlet context={{ data }} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}
export default ProjectGroup;