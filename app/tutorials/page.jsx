"use client"



import Link from "next/link";


import { useDebugValue, useEffect, useState } from 'react';


const Tutorials = () => {
    const [data, setData] = useState([]);

 
    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_TUTORIAL_API}`);
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
        <div className="flex flex-col items-center">
            <h1 className="text-xl mb-8">Tutorial List</h1>
            {data.length > 0 ? (
                
                <ul className="lg:min-w-[160vh] xl:min-w-[160vh] ">
                    {data.map((tutorial, index) => (
                        <li key={index}>
                            <Link href={`/tutorials/${tutorial.id}`}>
                                    {tutorial.number}.{tutorial.title} - {tutorial.difficulty}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tutorials found</p>
            )
                
            }
        </div>
 
);
};
export default Tutorials;