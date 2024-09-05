"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"


import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog"


const projects = [
    {
        num: '01',
        category: 'Web Development',
        title: 'Project 1',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.',
        stack: [{ name: "Html 5" }, { name: "Javascript" }, { name: "Css 3" }],
        image: '/assets/work/1.png',
        live: '',
        github: '',
    },
    {
        num: '02',
        category: 'Web Development',
        title: 'Project 2',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.',
        stack: [{ name: "Python3" }, { name: "MongoDB" }, { name: "Javascript" }],
        image: '/assets/work/2.png',
        live: '',
        github: '',
    },
    {
        num: '03',
        category: 'API Development',
        title: 'Project 3',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.',
        stack: [{ name: "Html 5" }, { name: "Javascript" }, { name: "Css 3" }],
        image: '/assets/work/1.png',
        live: '',
        github: '',
    },
    {
        num: '04',
        category: 'Web Development',
        title: 'Project 4',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.',
        stack: [{ name: "Html 5" }, { name: "Javascript" }, { name: "Css 3" }],
        image: '/assets/work/1.png',
        live: '',
        github: '',
    },
    {
        num: '05',
        category: 'Web Development',
        title: 'Project 5',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.',
        stack: [{ name: "Html 5" }, { name: "Javascript" }, { name: "Css 3" }],
        image: '/assets/work/1.png',
        live: '',
        github: '',
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        setProject(projects[swiper.activeIndex]);
    };
    
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80ch] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl-gap-[30px]">
                    <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div>
                        <div className="text-8xl leading none font-extrabold text-transparent text-otline">{project.num}</div>
                        </div>
                        

                        </div>
                    <div className="w-full xl:w-[50%]">slider</div> 
                </div>
            </div>

        </motion.section>

    )
};

export default Work