'use client'
import { useEffect, useState } from 'react';


const Backend = () => {
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

    return (<>
        <h1>Backend Tutorials</h1>
        <ul>
            {data.map((tutorial, index) => (
                <li key={index}>
                    <a href={tutorial.url}>{tutorial.title}</a>
                </li>
            ))}
        </ul>
    
    </>
        
    )

}

export default Backend;
