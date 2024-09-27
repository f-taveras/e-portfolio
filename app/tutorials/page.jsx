"use client"


import Link from "next/link";


import { useDebugValue, useEffect, useState } from 'react';


const Tutorials = () => {
    const [data, setData] = useState([]);

 

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await fetch('http://localhost:8000/tutorials/');
                const data = await response.json();
                setData(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching links', error);
            }
        };
        fetchLinks();
    }, []);

    return (
};
export default Tutorials;