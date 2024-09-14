import PersonalDetails from './PersonalDetails';
import { getSkills, educationData, certificationData } from '../utils/myData';
import TechStack from './TechStack';
import Education from './Education';
import Achivement from './Achivement';
import Certification from './Certification';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LocationOnIcon from '../assets/icons/location.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import GitHubIcon from '../assets/icons/github.svg';
import EmailIcon from '../assets/icons/email.svg';
import PhonelinkRingIcon from '../assets/icons/smartphone.svg';
import usePersonalDetails from '../utils/usePersonalDetails';
import LoadingImg from './LoadingImg';
import pdf from '../assets/pdf/Resume.pdf';

const About = () => {

    const personalInfo = usePersonalDetails();

    const {
        name,
        bio,
        avatar_url,
        company,
        email,
        followers,
        following,
        location,
        public_repos,
        html_url,
    } = personalInfo;

    return (
        <section className="relative py-10 md:py-20 z-10 before:content[''] before:bg-stone-100 dark:before:bg-slate-800 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:-z-10 before:rounded-tl-none before:rounded-tr-none before:rounded-bl-full before:rounded-br-none">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col justify-between items-start">
                    <div className='flex flex-col lg:flex-row justify-between items-start'>
                        <aside className="flex flex-col w-full lg:w-3/12 mt-10 border border-gray-300 dark:border-slate-700 p-5">
                            <div className="flex flex-col justify-center items-center rounded-full ">
                                <LoadingImg src={avatar_url} alt={name} className="dark:bg-stone-50 min-h-52 bg-slate-300 rounded-full aspect-square object-cover shadow-2xl w-[200px] lg:w-auto" />
                            </div>
                            <p className="text-xl font-medium flex flex-row justify-center items-center mt-5">
                                <svg
                                    width="32px"
                                    height="32px"
                                    version="1.1"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>location-outline</title>
                                    <g fill="none" fillRule="evenodd">
                                        <g transform="translate(106.67 42.667)" fill="currentColor">
                                            <path d="m149.33 7.1054e-15c82.475 0 149.33 66.859 149.33 149.33 0 24.937-6.0948 48.433-16.916 69.108l-132.42 229.56-129.35-223.99c-12.73-21.982-19.983-47.472-19.983-74.675 0-82.475 66.859-149.33 149.33-149.33zm0 42.667c-58.91 0-106.67 47.756-106.67 106.67 0 16.94 3.9079 33.194 11.303 47.867l3.5839 6.546 91.78 158.92 92.428-160.04c9.293-16.047 14.239-34.236 14.239-53.294 0-58.91-47.756-106.67-106.67-106.67zm0 42.667c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zm0 42.667c-11.782 0-21.333 9.5513-21.333 21.333 0 11.782 9.5513 21.333 21.333 21.333 11.782 0 21.333-9.5513 21.333-21.333 0-11.782-9.5513-21.333-21.333-21.333z" />
                                        </g>
                                    </g>
                                </svg>
                                <span className="flex items-center ml-2 justify-center">
                                    <span className="mr-1">{location}, India</span>
                                </span>
                            </p>
                            <ul className="flex justify-center items-center gap-x-8 mt-4">
                                <li>
                                    <Link to="https://in.linkedin.com/in/arman-al1" target="_blank">
                                        <svg
                                            width="32px"
                                            height="32px"
                                            fill="currentColor"
                                            version="1.1"
                                            viewBox="0 0 24 24"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M22.2,0H1.8C0.8,0,0,0.8,0,1.8v20.5c0,1,0.8,1.8,1.8,1.8h20.5c1,0,1.8-0.8,1.8-1.8V1.8C24,0.8,23.2,0,22.2,0z M7.2,20.4   H3.5V9h3.6V20.4z M5.3,7.4c-1.1,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S6.5,7.4,5.3,7.4z M20.5,20.5h-3.6v-6.3   c0-1.8-0.8-2.4-1.8-2.4c-1.1,0-2.1,0.8-2.1,2.5v6.2H9.3V9h3.5v1.6h0c0.3-0.7,1.6-1.9,3.4-1.9c2,0,4.2,1.2,4.2,4.7V20.5z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={html_url} target="_blank">
                                        <svg
                                            width="36px"
                                            height="36px"
                                            fill="currentColor"
                                            version="1.1"
                                            viewBox="0 0 24 24"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m22.4 6c-1.1-1.8-2.5-3.3-4.4-4.4-1.8-1.1-3.8-1.6-6-1.6s-4.2 0.5-6 1.6c-1.9 1.1-3.3 2.5-4.4 4.4-1.1 1.8-1.6 3.8-1.6 6 0 2.6 0.8 5 2.3 7.1s3.5 3.5 5.9 4.3c0.3 0.1 0.5 0 0.6-0.1 0.2-0.1 0.2-0.3 0.2-0.5v-0.8-1.4l-0.4 0.1c-0.2 0-0.5 0.1-0.9 0.1-0.3 0-0.7 0-1.1-0.1s-0.7-0.2-1-0.5c-0.3-0.2-0.6-0.6-0.7-1l-0.2-0.4c-0.1-0.2-0.3-0.5-0.5-0.8s-0.5-0.5-0.7-0.6l-0.3-0.3c-0.1-0.1-0.1-0.1-0.1-0.2s0-0.1 0.1-0.2c0.1 0 0.2-0.1 0.5-0.1h0.3c0.2 0 0.5 0.2 0.8 0.4s0.6 0.5 0.8 0.8c0.2 0.4 0.5 0.8 0.9 1 0.3 0.2 0.7 0.3 1 0.3s0.6 0 0.9-0.1c0.2 0.1 0.4 0 0.6-0.1 0.1-0.7 0.3-1.2 0.8-1.6-0.6-0.1-1.1-0.2-1.6-0.3s-1-0.3-1.5-0.6-0.9-0.6-1.3-1c-0.3-0.4-0.6-1-0.8-1.6-0.2-0.7-0.3-1.5-0.3-2.3 0-1.3 0.4-2.3 1.2-3.2-0.3-1.1-0.3-2.2 0.2-3.3 0.3-0.1 0.7-0.1 1.3 0.2 0.6 0.2 1 0.4 1.3 0.6 0.3 0.1 0.5 0.3 0.7 0.4 1-0.3 2-0.4 3-0.4s2 0.1 3 0.4l0.6-0.4c0.4-0.2 0.9-0.5 1.4-0.7 0.6-0.2 1-0.3 1.3-0.2 0.5 1.2 0.5 2.2 0.1 3.2 0.8 0.9 1.2 2 1.2 3.2 0 0.9-0.1 1.7-0.3 2.4s-0.5 1.2-0.8 1.6-0.8 0.8-1.3 1c-0.5 0.3-1 0.5-1.5 0.6s-1 0.2-1.6 0.3c0.5 0.5 0.8 1.2 0.8 2.2v3.3c0 0.2 0.1 0.3 0.2 0.5 0.1 0.1 0.3 0.2 0.6 0.1 2.4-0.8 4.4-2.2 5.9-4.3 1.6-2 2.4-4.4 2.4-7 0-2.2-0.5-4.2-1.6-6z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="mailto:aliarman.in@gmail.com">
                                        <svg
                                            width="36px"
                                            height="36px"
                                            fill="currentColor"
                                            version="1.1"
                                            viewBox="0 0 24 24"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M24,21H0V3h24V21z M2,19h20V8.1l-10,8.2L2,8.1V19z M2,5.5l10,8.2l10-8.2V5H2V5.5z" />
                                        </svg>

                                    </Link>
                                </li>
                                <li>
                                    <Link to="tel:+919899732743">
                                        <svg
                                            width="40px"
                                            height="40px"
                                            fill="currentColor"
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20.629 5h-9.257a1.6 1.6 0 0 0-1.601 1.603V25.4a1.6 1.6 0 0 0 1.601 1.601h9.257c.883 0 1.6-.718 1.6-1.601V6.603c0-.885-.717-1.603-1.6-1.603zm-6.247 1.023h3.302v.768h-3.302v-.768zm1.619 19.395a1.024 1.024 0 0 1-1.023-1.021 1.023 1.023 0 0 1 2.044 0c-.001.494-.46 1.021-1.021 1.021zm5.028-3.501H10.971V7.704h10.058v14.213z" />
                                        </svg>
                                    </Link>
                                </li>

                            </ul>
                            <div className="flex justify-between mt-5">
                                <a href={pdf} target='_blank' className="bg-slate-700 border border-slate-700 text-white font-medium py-2 px-4 rounded-md w-full hover:bg-transparent hover:text-slate-700 dark:hover:text-slate-400 transition-all text-center">Download Resume</a>
                            </div>
                        </aside>
                        <div className="flex flex-col w-full lg:w-9/12 mt-0 rounded-md lg:p-5">
                            <h1 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-8">
                                <span>Personal Details </span>
                            </h1>
                            <h2 className="text-2xl font-bold leading-10 text-slate-700 dark:text-stone-50 mb-4">{name}</h2>
                            <p className='font-normal mb-5 text-stone-900 dark:text-slate-300'>I am employed full-time as a Frontend Developer at VML, with 4.2 years of experience in Frontend Technologies including HTML5, CSS3, JavaScript, React JS, Redux Toolkit, Bootstrap, Tailwind and proficiency in build tools like Parcel, webpack and version control systems like GitHub, Gitlab, AWS Codecommits. As a quick and focused learner, I actively seek opportunities to enhance my skills, ensuring high-quality work and readiness to undertake additional responsibilities.</p>
                            <div className="border border-slate-300 rounded-md p-4">
                                <PersonalDetails />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h1 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
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

                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h2 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Education</span>
                        </h2>
                        <div className="rounded-md">
                            <ul className="border-l border-stone-600 dark:border-slate-700">
                                {educationData.map((listData) => {
                                    return (
                                        <Education key={listData.id} title={listData.degree} issueDate={listData.year_of_passing} issueBy={listData.college} grade={listData.grade} board={listData.board} />
                                    );
                                })}

                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h2 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Achivements</span>
                        </h2>
                        <Achivement />
                    </div>

                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h2 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Certifications</span>
                        </h2>
                        <div className="rounded-md">
                            <div className="flex flex-col">
                                {certificationData.map((data) => {
                                    return (
                                        <Certification key={data.id} title={data.title} issueBy={data.issue_by} issueDate={data.issue_date} imgSrc={data.src} width={data.width} height={data.height} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default About;