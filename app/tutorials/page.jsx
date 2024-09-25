"use client"

import TutorialDetail from "./[id]"
import { motion } from "framer-motion"
// import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"


import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog"
import WorkSliderBtns from "../../components/WorkSliderBtns"

import { useEffect, useState } from 'react';


const Tutorials = () => {
    const [data, setData] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setCurrentTutorial(data[currentIndex]);
    }

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await fetch('http://localhost:8000/tutorials/');
                const data = await response.json();
                setData(data);
                setCurrentTutorial(data[0]);
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
                                <li>
                                    {tutorial.number}.{tutorial.title} - {tutorial.difficulty}
                                </li>
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