    "use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"


import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns"


const projects = [
    {
        num: '01',
        category: 'Classic Snake Game',
        title: 'Snake Game',
        description: 'A simple classic snake game where players control a growing snake, guiding it to eat food while avoiding walls and its own tail. The snake speeds up as it eats more, and the goal is to survive as long as possible while achieving a high score.',
        stack: [{ name: "Html 5" }, { name: "Javascript" }, { name: "Css 3" }],
        image: '/assets/work/project_image_1.png',
        live: 'https://f-taveras.github.io/ClassicSnakeGame',
        github: 'https://github.com/f-taveras/ClassicSnakeGame',
    },
    {
        num: '02',
        category: 'Full stack app',
        title: 'Restaurant App',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.',
        stack: [{ name: "NextJs" }, { name: "MongoDB" }, { name: "Javascript" }, { name: "TailwindCss" }],
        image: '/assets/work/restaurant.png',
        live: 'https://restaurant.prtflio.info/',
        github: 'https://github.com/f-taveras/restaurant-app',
    },
    {
        num: '03',
        category: 'API Development',
        title: 'Project 3',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.',
        stack: [{ name: "Html 5" }, { name: "Javascript" }, { name: "Css 3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '04',
        category: 'Web Development',
        title: 'Project 4',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.',
        stack: [{ name: "Html 5" }, { name: "Javascript" }, { name: "Css 3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '05',
        category: 'Web Development',
        title: 'Project 5',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.',
        stack: [{ name: "Html 5" }, { name: "Javascript" }, { name: "Css 3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);


    }



    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">{project.stack.map((item, index) => {
                                return (
                                    <li key={index} className="text-xl text-accent">{item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>

                                )
                            })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">

                                {/* live project button  */}
                                <Link href={project.live} target="_blank" >
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>

                                </Link>

                                {/* github project button  */}

                                <Link href={project.github} target="_blank" >
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                <TooltipContent>
                                                    <p>GitHub</p>
                                                </TooltipContent>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>

                                </Link>
                            </div>
                        </div>


                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (

                                    <SwiperSlide key={index} className="w-full">

                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    layout="fill" // Ensures the image covers the parent element
                                                    objectFit="cover" // This keeps the aspect ratio intact
                                                    alt='project image'
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}

                            <WorkSliderBtns
                                containerStyles="flex gap=2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>

        </motion.section>

    )
};

export default Work