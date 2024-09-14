import { useState, useEffect } from 'react';
const usePersonalDetails = () => {
    const [personalInfo, setPersonalInfo] = useState('');

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://api.github.com/users/a-mal1k');
        const json = await data.json();
        setPersonalInfo(json);
    };

    return personalInfo;

}
export default usePersonalDetails;