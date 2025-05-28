import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {
    const ref = useRef(0);
    const [text, setText] = useState('');

    // Debugging Log
    useEffect(() => {
        console.log("Home component is rendering!");
    }, []);

    // Typing effect for the name
    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText(prevText => prevText + name[ref.current - 1]); // Fixes stale state issue
            } else {
                clearInterval(interval);
            }
        }, 500);

        return () => clearInterval(interval);
    }, []); // Removed `text` from dependencies to prevent infinite loops

    return (
        <div className='area relative z-0 bg-black w-screen h-screen'>
            <ul className="circles"> {/* Fixed class to className */}
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
                <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
                    <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
                        Hi, I'm <span className='text-yellow-200 font-extrabold'>{text}</span>
                    </h1>
                    <p className='mt-3 text-xl'>
                        I have a strong passion for learning and developing dashboards and conducting data analysis.
                    </p>
                </div>      
            </div>
            <Footer />
        </div>  
    );
};

export default Home;
