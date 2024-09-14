import { Link } from 'react-router-dom';
import usePersonalDetails from '../utils/usePersonalDetails';

const PersonalDetails = ({ title, number }) => {
    const personalInfo = usePersonalDetails();

    const {
        company,
        location,
        html_url,
    } = personalInfo;

    return (
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
                    <Link to="https://in.linkedin.com/in/arman-al1" target="_blank"><svg
                        width="32px"
                        height="32px"
                        fill="currentColor"
                        version="1.1"
                        viewBox="0 0 24 24"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M22.2,0H1.8C0.8,0,0,0.8,0,1.8v20.5c0,1,0.8,1.8,1.8,1.8h20.5c1,0,1.8-0.8,1.8-1.8V1.8C24,0.8,23.2,0,22.2,0z M7.2,20.4   H3.5V9h3.6V20.4z M5.3,7.4c-1.1,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S6.5,7.4,5.3,7.4z M20.5,20.5h-3.6v-6.3   c0-1.8-0.8-2.4-1.8-2.4c-1.1,0-2.1,0.8-2.1,2.5v6.2H9.3V9h3.5v1.6h0c0.3-0.7,1.6-1.9,3.4-1.9c2,0,4.2,1.2,4.2,4.7V20.5z" />
                    </svg></Link>
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-stone-200 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Github Profile</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    <Link to={html_url} target="_blank"><svg
                        width="36px"
                        height="36px"
                        fill="currentColor"
                        version="1.1"
                        viewBox="0 0 24 24"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m22.4 6c-1.1-1.8-2.5-3.3-4.4-4.4-1.8-1.1-3.8-1.6-6-1.6s-4.2 0.5-6 1.6c-1.9 1.1-3.3 2.5-4.4 4.4-1.1 1.8-1.6 3.8-1.6 6 0 2.6 0.8 5 2.3 7.1s3.5 3.5 5.9 4.3c0.3 0.1 0.5 0 0.6-0.1 0.2-0.1 0.2-0.3 0.2-0.5v-0.8-1.4l-0.4 0.1c-0.2 0-0.5 0.1-0.9 0.1-0.3 0-0.7 0-1.1-0.1s-0.7-0.2-1-0.5c-0.3-0.2-0.6-0.6-0.7-1l-0.2-0.4c-0.1-0.2-0.3-0.5-0.5-0.8s-0.5-0.5-0.7-0.6l-0.3-0.3c-0.1-0.1-0.1-0.1-0.1-0.2s0-0.1 0.1-0.2c0.1 0 0.2-0.1 0.5-0.1h0.3c0.2 0 0.5 0.2 0.8 0.4s0.6 0.5 0.8 0.8c0.2 0.4 0.5 0.8 0.9 1 0.3 0.2 0.7 0.3 1 0.3s0.6 0 0.9-0.1c0.2 0.1 0.4 0 0.6-0.1 0.1-0.7 0.3-1.2 0.8-1.6-0.6-0.1-1.1-0.2-1.6-0.3s-1-0.3-1.5-0.6-0.9-0.6-1.3-1c-0.3-0.4-0.6-1-0.8-1.6-0.2-0.7-0.3-1.5-0.3-2.3 0-1.3 0.4-2.3 1.2-3.2-0.3-1.1-0.3-2.2 0.2-3.3 0.3-0.1 0.7-0.1 1.3 0.2 0.6 0.2 1 0.4 1.3 0.6 0.3 0.1 0.5 0.3 0.7 0.4 1-0.3 2-0.4 3-0.4s2 0.1 3 0.4l0.6-0.4c0.4-0.2 0.9-0.5 1.4-0.7 0.6-0.2 1-0.3 1.3-0.2 0.5 1.2 0.5 2.2 0.1 3.2 0.8 0.9 1.2 2 1.2 3.2 0 0.9-0.1 1.7-0.3 2.4s-0.5 1.2-0.8 1.6-0.8 0.8-1.3 1c-0.5 0.3-1 0.5-1.5 0.6s-1 0.2-1.6 0.3c0.5 0.5 0.8 1.2 0.8 2.2v3.3c0 0.2 0.1 0.3 0.2 0.5 0.1 0.1 0.3 0.2 0.6 0.1 2.4-0.8 4.4-2.2 5.9-4.3 1.6-2 2.4-4.4 2.4-7 0-2.2-0.5-4.2-1.6-6z" />
                    </svg></Link>
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