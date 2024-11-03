import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Work from './components/Work';
import Projects from './components/projects/Projects';
import { ThemeProvider } from './utils/ThemeContext';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import PersonalInfo from './components/PersonalInfo';
import TechStacks from './components/TechStacks';
import Certifications from './components/Certifications';
import { Achievements } from './components/Achievements';
import Education from './components/Education';
import ProjectGroup from './components/projects/ProjectGroup';


const App = () => {

    return(
        <ThemeProvider>
            <Header />
            <Outlet/>
            <Footer/>
        </ThemeProvider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About />,
                children: [
                  {
                    index: true,
                    element: <PersonalInfo />
                  },
                  {
                    path: 'info',
                    element: <PersonalInfo />
                  },
                  {
                    path: 'skills',
                    element: <TechStacks />
                  },
                  {
                    path: 'education',
                    element: <Education />
                  },
                  {
                    path: 'achievements',
                    element: <Achievements />
                  },
                  {
                    path: 'certifications',
                    element: <Certifications />
                  }
                ],
                errorElement: <Error />
            },
              
            {
                path: '/work',
                element: <Work/>,
            },
            {
                path: '/projects',
                element: <ProjectGroup/>,
                children: [
                    {
                      index: true,
                      element: <Projects />
                    },
                    {
                        path: ':projectType',
                        element: <Projects />
                    },
                ]
            }
        ],
        errorElement: <Error/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);