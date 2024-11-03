
import { NavLink, Outlet } from 'react-router-dom';


const About = () => {
    const navLinkClassName = ({ isActive }) =>
        `flex text-sm lg:text-lg items-center justify-center p-2 rounded-lg ${isActive ? 'bg-lime-200 dark:bg-emerald-700' : 'bg-stone-300 dark:bg-slate-600 hover:shadow-inner hover:shadow-green-200'
        }`;
    return (
        <section className="relative py-10 z-10 bg-stone-100 dark:bg-slate-800 bg-">
            <div className="container mx-auto px-4 lg:px-0">
                <nav className='flex flex-wrap items-center justify-evenly w-full lg:w-2/4 mx-auto gap-5 pb-4 border-b-slate-400 border-b-2'>
                    <NavLink className={navLinkClassName} to="" end>Personal Details</NavLink>
                    <NavLink className={navLinkClassName} to='/about/skills'>Tech Stack</NavLink>
                    <NavLink className={navLinkClassName} to='/about/education'>Education</NavLink>
                    <NavLink className={navLinkClassName} to='/about/achievements'>Achievements</NavLink>
                    <NavLink className={navLinkClassName} to='/about/certifications'>Certifications</NavLink>
                </nav>
                <Outlet />
            </div>
        </section>
    );
}
export default About;