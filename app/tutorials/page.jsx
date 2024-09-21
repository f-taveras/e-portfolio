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
import WorkSliderBtns from "../../components/WorkSliderBtns"


const projects = [
    {
        num: '01',
        category: 'Character Input',
        title: 'Challenge 1 - Character Input',
        description: 'Create a program that asks the user to enter their name and their age. Print out a message addressed to them that tells them the year that they will turn 100 years old. Note: for this exercise, the expectation is that you explicitly write out the year (and therefore be out of date the next year). If you want to do this in a generic way',
        extras: 'Add on to the previous program by asking the user for another number and printing out that many copies of the previous message. (Hint: order of operations exists in Python)Print out that many copies of the previous message on separate lines. (Hint: the string n is the same as pressing the ENTER button)',
        
        stack: [{ name: "Python3" }],
        image: <code>asdfasdfasdf</code>,
        live: 'github.com',
        github: '',
    },
    {
        num: '02',
        category: 'Odd Or Even',
        title: 'Project 2',
        description: 'The exercise comes first (with a few extras if you want the extra challenge or want to spend more time), followed by a discussion. Enjoy! Ask the user for a number. Depending on whether the number is even or odd, print out an appropriate message to the user. Hint: how does an even / odd number react differently when divided by 2?',
        stack: [{ name: "Python3" }],
        extras: 'If the number is a multiple of 4, print out a different message. Ask the user for two numbers: one number to check (call it num) and one number to divide by (check). If check divides evenly into num, tell that to the user. If not, print a different appropriate message.',
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '03',
        category: 'List Less Than Ten',
        title: 'Project 3',
        description: "Take a list, say for example this one:`a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]` and write a program that prints out all the elements of the list that are less than 5.",
        extras:'Instead of printing the elements one by one, make a new list that has all the elements less than 5 from this list in it and print out this new list. Write this in one line of Python. Ask the user for a number and return a list that contains only elements from the original list a that are smaller than that number given by the user.',
        stack: [{ name: "Python3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '04',
        category: 'Divisors',
        title: 'Project 4',
        description: 'Create a program that asks the user for a number and then prints out a list of all the divisors of that number. (If you don’t know what a divisor is, it is a number that divides evenly into another number. For example, 13 is a divisor of 26 because 26 / 13 has no remainder.)',
        extras:'',
        stack: [{ name: "Python3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '05',
        category: 'List Overlap',
        title: 'Project 5',
        description: 'Take two lists, say for example these two:a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] and write a program that returns a list that contains only the elements that are common between the lists (without duplicates). Make sure your program works on two lists of different sizes.',
        extras:'Randomly generate two lists to test this Write this in one line of Python (don’t worry if you can’t figure this out at this point - we’ll get to it soon)',
        stack: [{ name: "Python3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '06',
        category: 'List Overlap',
        title: 'Project 5',
        description: 'Take two lists, say for example these two:a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] and write a program that returns a list that contains only the elements that are common between the lists (without duplicates). Make sure your program works on two lists of different sizes.',
        extras:'Randomly generate two lists to test this Write this in one line of Python (don’t worry if you can’t figure this out at this point - we’ll get to it soon)',
        stack: [{ name: "Python3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '05',
        category: 'List Overlap',
        title: 'Project 5',
        description: 'Take two lists, say for example these two:a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] and write a program that returns a list that contains only the elements that are common between the lists (without duplicates). Make sure your program works on two lists of different sizes.',
        extras:'Randomly generate two lists to test this Write this in one line of Python (don’t worry if you can’t figure this out at this point - we’ll get to it soon)',
        stack: [{ name: "Python3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '05',
        category: 'List Overlap',
        title: 'Project 5',
        description: 'Take two lists, say for example these two:a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] and write a program that returns a list that contains only the elements that are common between the lists (without duplicates). Make sure your program works on two lists of different sizes.',
        extras:'Randomly generate two lists to test this Write this in one line of Python (don’t worry if you can’t figure this out at this point - we’ll get to it soon)',
        stack: [{ name: "Python3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '05',
        category: 'List Overlap',
        title: 'Project 5',
        description: 'Take two lists, say for example these two:a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] and write a program that returns a list that contains only the elements that are common between the lists (without duplicates). Make sure your program works on two lists of different sizes.',
        extras:'Randomly generate two lists to test this Write this in one line of Python (don’t worry if you can’t figure this out at this point - we’ll get to it soon)',
        stack: [{ name: "Python3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '05',
        category: 'List Overlap',
        title: 'Project 5',
        description: 'Take two lists, say for example these two:a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] and write a program that returns a list that contains only the elements that are common between the lists (without duplicates). Make sure your program works on two lists of different sizes.',
        extras:'Randomly generate two lists to test this Write this in one line of Python (don’t worry if you can’t figure this out at this point - we’ll get to it soon)',
        stack: [{ name: "Python3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
    {
        num: '05',
        category: 'List Overlap',
        title: 'Project 5',
        description: 'Take two lists, say for example these two:a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] and write a program that returns a list that contains only the elements that are common between the lists (without duplicates). Make sure your program works on two lists of different sizes.',
        extras:'Randomly generate two lists to test this Write this in one line of Python (don’t worry if you can’t figure this out at this point - we’ll get to it soon)',
        stack: [{ name: "Python3" }],
        image: '/assets/work/project_image_default.png',
        live: '',
        github: '',
    },
]

const Tutorials = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);

        
    }



    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition:{delay: 2.4, duration: 0.4, ease: "easeIn" }}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Challenge</h2>
                            <p className="text-white">{project.description}</p>
                            <ul> Extras:
                                <li className="text-white/60">{project.extras}</li>
                            </ul>
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
                                <Link href={project.live}>
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

                                <Link href={project.github}>
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
                                                    fill
                                                    className="object-cover"
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

export default Tutorials;