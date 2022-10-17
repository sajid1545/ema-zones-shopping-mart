import React, { useContext } from 'react';
import { AuthContext } from './../../Context/UserContext';

const About = () => {

    const {user} = useContext(AuthContext)

    return (
        <div className='text-center'>
            <h1>This is About Page { user?.email }</h1>
        </div>
    );
};

export default About;