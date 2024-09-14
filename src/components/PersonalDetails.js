import {Link} from 'react-router-dom';
import usePersonalDetails from '../utils/usePersonalDetails';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import GitHubIcon from '../assets/icons/github.svg';
const PersonalDetails = ({title, number}) => {
    const personalInfo = usePersonalDetails();

    const {
        company,
        location,
        html_url,
    } = personalInfo;

    //console.log(personalInfo);
    return(
        <ul className="flex justify-start items-start flex-wrap">
            <li className="mb-5 w-full sm:w-6/12 lg:w-6/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Email Id</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    <Link to="mailto:aliarman.in@gmail.com">aliarman.in@gmail.com</Link>
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Phone No</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    <Link to="tel:+919899732743">9899732743</Link>
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Gender</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    Male
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">LinkedIn Profile</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    <Link to="https://in.linkedin.com/in/arman-al1" target="_blank"><img src={LinkedInIcon} className="" /></Link>
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Github Profile</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    <Link to={html_url} target="_blank"><img src={GitHubIcon} className="" /></Link>
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Current Company</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    {company}
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Location</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    {location}
                </h2>
            </li>
        </ul>
    );
}
export default PersonalDetails;