
import htmlLogo from '../assets/images/html5.png';
import cssLogo from '../assets/images/css.png';
import javaScriptLogo from '../assets/images/javascript.png';

import jquery from '../assets/images/jquery.png';
import demoCert from '../assets/images/certificate_demo.jpg';
import namasteJS from '../assets/images/certificate_1.png';
import namasteReact from '../assets/images/certificate_2.png';
import problemSolvingJS from '../assets/images/certificate_3.png';
import demoProject from '../assets/images/project_demo.png';

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
        degree: 'Bachelor of Technology (B.tech - CSE)',
        college: 'United College of Engineering & Research',
        board: 'A.P.J Abdul Kalam Technical University',
        year_of_passing: '2015-2019',
        grade: '82.8%',
    },
    {
        id: 1,
        degree: 'Intermediate',
        college: 'Mahatma Gandhi Inter College',
        board: 'Uttar Pradesh State Board',
        year_of_passing: '2015',
        grade: '81.8%',
    },
    {
        id: 2,
        degree: 'High School',
        college: 'Gorakhpur Public School',
        board: 'Central Board of Secondary Education',
        year_of_passing: '2013',
        grade: '87.40%',
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
        designation: 'Developer Frontend',
        companyName: 'VML',
        location: 'Noida',
        joiningDate: 'December 15, 2021',
        //lastDate: '',
        currentlyWorking: true,
        summary: [
            {text: 'Converted Figma designs and prototypes into fully functional, responsive web pages by interpreting and applying design specifications accurately and Collaborated with design teams to ensure accurate implementation and resolve any issues.'},
            {text: 'Applied various responsive design techniques to ensure cross-browser compatibility and a seamless user experience across different devices, resulting in notably increased site performance and reduced load times, which enhanced overall user experience'},
            {text: 'Additionally, I worked on Salesforce Commerce  theme design and custom theme development using ACF, Elementor and WooCommerce.'},
            {text: 'Sending updates to clients regarding work progress via email or Slack, and attending client meetings.'}
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
            {text: 'Acquired hands-on experience with HTML, CSS, JavaScript, and React, applying best practices to develop efficient and scalable web applications'},
            {text: 'Utilized HTML and CSS best practices to create responsive, mobile-first designs, ensuring optimal user experience across various devices and screen sizes'},
            {text: 'Written and executed test cases for React components to ensure functionality, reliability, and performance, contributing to robust and bug-free applications.'}
        ]
    },
]

export const unsplashPhotos = [
    {
		"id":  0,
		"thumbUrl":  demoProject,
        "largeSrc": demoProject,
        "url": '',
		"title":  "Movie app",
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
		"thumbUrl":  demoProject,
        "largeSrc": demoProject,
        "url": '',
		"title":  "Blog o pedia - not just a blog",
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
]