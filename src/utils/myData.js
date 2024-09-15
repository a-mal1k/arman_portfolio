
import htmlLogo from '../assets/images/html5.png';
import cssLogo from '../assets/images/css.png';
import javaScriptLogo from '../assets/images/javascript.png';

import jquery from '../assets/images/jquery.png';
import demoCert from '../assets/images/certificate_demo.jpg';
import namasteJS from '../assets/images/certificate_1.png';
import namasteReact from '../assets/images/certificate_2.png';
import problemSolvingJS from '../assets/images/certificate_3.png';

import blogoPedia from '../assets/images/blogoPedia.png';
import movie from '../assets/images/moovie.png';
import mstudio from '../assets/images/mstudio.png';

import github from '../assets/images/github.png';
import bootstrap from '../assets/images/bootstrap.svg';
import tailwindCSS from '../assets/images/tailwind.png';
import sass from '../assets/images/sass.png';

import chatgpt from '../assets/images/chatgpt.png';
import redux from '../assets/images/redux-icon.webp';
import parceljs from '../assets/images/chatgpt.png';
import reactjs from '../assets/images/react.png'

export const getSkills = [
    [
        {
            id: 0,
            name: 'HTML5',
            src: htmlLogo,
            experience: '4 years'
        },
        {
            id: 1,
            name: 'CSS3',
            src: cssLogo,
            experience: '4 years'
        },
        {
            id: 3,
            name: 'Bootstrap',
            src: bootstrap,
            experience: '3 years'
        },
        {
            id: 4,
            name: 'Tailwind CSS',
            src: tailwindCSS,
            experience: '2 years'
        },
        {
            id: 5,
            name: 'JavaScript',
            src: javaScriptLogo,
            experience: '4 years'
        },
        {
            id: 11,
            name: 'React Js',
            src: reactjs,
            experience: '3 years'
        },
        {
            id: 17,
            name: 'Redux Toolkit',
            src: redux,
            experience: '2 years'
        },
        {
            id: 18,
            name: 'Parcel',
            src: parceljs,
            experience: '1 years'
        },
        {
            id: 15,
            name: 'Git',
            src: github,
            experience: '4 years'
        },
        {
            id: 6,
            name: 'SASS',
            src: sass,
            experience: '3 years'
        },
        {
            id: 10,
            name: 'jQuery',
            src: jquery,
            experience: '3 years'
        },
        
        {
            id: 16,
            name: 'Prompt',
            src: chatgpt,
            experience: '1 years'
        }
        
    ],
    [
        {
            id: 0,
            name: 'Time management'
        },
        {
            id: 1,
            name: 'Interpersonal'
        },
        {
            id: 2,
            name: 'Quick learner'
        },
        {
            id: 3,
            name: 'Communication'
        },
        {
            id: 4,
            name: 'Teamwork'
        },
        {
            id: 5,
            name: 'Leadership'
        },
        {
            id: 6,
            name: 'Problem solving'
        },
    ]    
];

export const educationData = [
    {
        id: 0,
        degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
        college: 'United College of Engineering & Research',
        board: 'A.P.J Abdul Kalam Technical University',
        year_of_passing: '2015 - 2019',
        grade: '82.8%',
        description: 'Graduated with a focus on advanced computing and software development. Achieved a solid academic standing while engaging in various projects and internships related to technology and engineering.'
    },
    {
        id: 1,
        degree: 'Intermediate (12th Grade)',
        college: 'Mahatma Gandhi Inter College',
        board: 'Uttar Pradesh State Board',
        year_of_passing: '2015',
        grade: '81.8%',
        description: 'Completed intermediate education with a strong foundation in science and mathematics. Prepared for higher education with a solid academic performance.'
    },
    {
        id: 2,
        degree: 'High School (10th Grade)',
        college: 'Gorakhpur Public School',
        board: 'Central Board of Secondary Education',
        year_of_passing: '2013',
        grade: '87.4%',
        description: 'Achieved high marks in high school, demonstrating strong analytical and problem-solving skills. This foundation set the stage for future academic and professional success.'
    }
]

export const achievementData = [
    {
        id: 0,
        title: 'Team Limelight Award (Manyavar Project)',
        description: 'Honored with the prestigious Team Limelight Award for exceptional individual and team contributions to the Manyavar Project. This award recognizes outstanding performance, innovation, and leadership in driving project success.',
        company: 'VML',
        year: 'Oct 2023',
    },
    {
        id: 1,
        title: 'Relay Award',
        description: 'Recipient of the Relay Award for exemplary teamwork and superior performance. This accolade acknowledges significant contributions to team dynamics and project excellence.',
        company: 'VML',
        year: 'Nov 2022',
    },
    {
        id: 2,
        title: 'Star of the Month Award',
        description: 'Awarded the Star of the Month for exceptional performance and notable achievements recognized by clients. This honor reflects consistent excellence and a commitment to delivering high-impact results.',
        company: 'VML',
        year: 'Nov 2022',
    }
]


export const certificationData = [
    {
        id: 0,
        title: 'Namaste Frontend System Design',
        issue_by: 'Chirag Goel, Akshay Saini - NamastDev.com',
        issue_date: 'In progress...',
        isCompleted: false,
        src: demoCert,
        width: '1600',
        height: '1190'
    },
    {
        id: 1,
        title: 'Javascript problem solving',
        issue_by: 'CodingGame',
        issue_date: 'July 17, 2024',
        isCompleted: true,
        src: problemSolvingJS,
        width: '1600',
        height: '1190'
    },
    {
        id: 2,
        title: 'Certificate of Completion - Namaste React',
        issue_by: 'Akshay Saini - NamasteDev.com',
        issue_date: 'November 2023',
        src: namasteReact,
        isCompleted: true,
        width: '1093',
        height: '773'
    },
    {
        id: 2,
        title: 'Namaste JavaScript',
        issue_by: 'Akshay Saini - NamasteDev.com',
        issue_date: 'February, 2023',
        src: namasteJS,
        isCompleted: true,
        width: '1093',
        height: '773'
    },
]

export const workData = [
    {
        id: 0,
        designation: 'Frontend Developer',
        companyName: 'VML',
        location: 'Noida',
        joiningDate: 'December 15, 2021',
        currentlyWorking: true,
        summary: [
            {text: 'Transformed Figma designs and prototypes into fully functional, responsive web pages, ensuring precise adherence to design specifications. Worked closely with design teams to resolve issues and deliver high-quality implementations.'},
            {text: 'Implemented responsive design techniques to achieve cross-browser compatibility and a seamless user experience across diverse devices. Enhanced site performance and reduced load times, significantly improving overall user satisfaction.'},
            {text: 'Engaged in Salesforce Commerce theme design and custom theme development, utilizing ACF, Elementor, and WooCommerce to tailor solutions to client needs and preferences.'},
            {text: 'Maintained effective communication with clients through regular updates via email and Slack, and actively participated in client meetings to discuss progress and gather feedback.'}
        ]
    },
    {
        id: 1,
        designation: 'System Engineer',
        companyName: 'Tata Consultancy Services',
        location: 'Bangalore',
        joiningDate: 'June 17, 2019',
        lastDate: 'December 13, 2021',
        currentlyWorking: false,
        summary: [
            {text: 'Gained hands-on experience with HTML, CSS, JavaScript, and React, applying industry best practices to develop efficient, scalable web applications that met client specifications and project requirements.'},
            {text: 'Created responsive, mobile-first designs using HTML and CSS, ensuring optimal user experiences across various devices and screen sizes, contributing to increased user engagement and satisfaction.'},
            {text: 'Developed and executed comprehensive test cases for React components to verify functionality, reliability, and performance, resulting in robust, bug-free applications and streamlined development processes.'}
        ]
    },
]


export const unsplashPhotos = [
    {
		"id":  0,
		"thumbUrl":  movie,
        "largeSrc": movie,
        "url": 'https://mooooviee.web.app/',
		"title":  "Movie app - watch movies",
		"techStack": [
            {
                'react': "React Js"
            },
            {
                'html': "HTML5"
            },
            {
                'css': "Tailwind Css"
            },            
            {
                'api': 'TMDB API',
            },
            {
                'api': 'Firebase API',
            },
            {
                'api': 'Github API',
            },
            {
                'redux': 'Redux Toolkit',
            },
            {
                'firebase': 'Firebase'
            },
            {
                'parcel': 'Parcel',
            },
            {
                'npm': 'NPM',
            }
        ]
	},
	{
		"id":  1,
		"thumbUrl":  blogoPedia,
        "largeSrc": blogoPedia,
        "url": 'https://blogoopedia.web.app/',
		"title":  "Blog-o-pedia - a blogging site",
		"techStack": [
            {
                'react': "React Js"
            },
            {
                'html': "HTML5"
            },
            {
                'css': "Tailwind Css"
            },            
            {
                'wordpress': 'Parcel'
            },
            {
                'api': 'Twingly API',
            },
            {
                'redux': 'Redux Toolkit',
            },
            {
                'firebase': 'Firebase'
            },
            {
                'parcel': 'Parcel',
            },
            {
                'npm': 'NPM',
            }
        ]
	},
    {
		"id":  1,
		"thumbUrl":  mstudio,
        "largeSrc": mstudio,
        "url": 'https://meraclestudio.web.app/',
		"title":  "Miracle Studio - Ecommerce Site",
		"techStack": [
            {
                'react': "React Js"
            },
            {
                'html': "HTML5"
            },
            {
                'css': "Tailwind Css"
            },            
            {
                'wordpress': 'Parcel'
            },
            {
                'api': 'Firebase API',
            },
            {
                'redux': 'Redux Toolkit',
            },
            {
                'firebase': 'Firebase'
            },
            {
                'parcel': 'Parcel',
            },
            {
                'npm': 'NPM',
            }
        ]
	},
]