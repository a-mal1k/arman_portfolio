import React, {useState} from 'react';
import LightModeIcon from '../assets/icons/sunicon.svg';
import DarkModeIcon from '../assets/icons/moon.svg';
import { useTheme } from '../utils/ThemeContext';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo_light.svg';
import LogoDark from '../assets/images/logo_dark.svg'
import LoadingImg from './LoadingImg';


const Header = () => {

    const {isDarkMode, toggleMode} = useTheme();
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleNavMenu = () => {
        setToggleMenu(!toggleMenu);
        //console.log('clicked');
    }
    const closeMenu = () => {
        setToggleMenu(false);
    }

    return(
        <header className={`flex flex-col w-full bg-stone-200 dark:bg-slate-700 fixed lg:relative bottom-0 z-50 ${toggleMenu ? 'opened' : ''}`}>
            <div className="container mx-auto px-4 lg:px-0">
                <nav className="flex justify-between items-center">
                    <Link to="/" className="logo text-5xl dark:text-yellow-300 text-yellow-500 capitalize">
                         <LoadingImg src={isDarkMode ? Logo : LogoDark} alt="Logo" className='w-16' />
                        
                    </Link>
                    <div className="flex justify-end items-center">
                        <ul className={`flex nav_menu flex-col lg:flex-row justify-start lg:justify-end lg:items-center gap-y-3 gap-x-8 fixed lg:static  w-full h-auto z-40 lg:z-auto bg-stone-200 dark:bg-slate-900 dark:lg:bg-transparent lg:bg-transparent text-left left-0 lg:p-0 transition-all ${toggleMenu ? 'bottom-0' : 'bottom-[-250px]'} `}>
                            <li>
                                <Link to="/" className="dark:text-white text-slate-900 text-xl" 
                                onClick={closeMenu}>Home</Link> 
                            </li>
                            <li>
                                <Link to="/about" className="dark:text-white text-slate-900 text-xl" onClick={closeMenu}>About me</Link> 
                            </li>
                            <li>
                                <Link to="/project" className="dark:text-white text-slate-900 text-xl" onClick={closeMenu}>Projects</Link> 
                            </li>
                            <li>
                                <Link to="/work" className="dark:text-white text-slate-900 text-xl" onClick={closeMenu}>Work</Link> 
                            </li>
                        </ul>
                        <ul className="flex flex-row justify-end items-center gap-y-3 gap-x-5 ml-6">
                            <li>
                                <button type="button" onClick={toggleMode}>
                                    {isDarkMode ? <img src={LightModeIcon} className=" text-gray-800 dark:text-white" /> : 
                                    <img src={DarkModeIcon} className="  text-gray-800 dark:text-white" />}               
                                </button>                              
                            </li>
                            <li>
                                <button className="humberger-menu flex items-center z-50 relative lg:hidden" onClick={handleNavMenu}>
                                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                                </button>
                            </li>                            
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;