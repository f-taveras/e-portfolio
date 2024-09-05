'use client';

import { FaHtml5, FaCss3, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';

const about = {
    title: 'About Me',
    description: 'I am a full stack developer with a focus on front end development. I have experience with React, Next.js, Node.js, and TailwindCSS. I am passionate about creating beautiful, responsive, and accessible web applications. I am currently seeking a full-time position as a front end developer.',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Felix Taveras"
        },
        {
            fieldName: "Email",
            fieldValue: "felixataveras1@gmail.com"
        },
        {
            fieldName: "Experience",
            fiedlValue: "Junior Developer"
        },
        {
            fieldName: "Freelance",
            fiedlValue: "Available"
        },
        {
            fieldName: "Currently like",
            fieldValue: "Automation"
        },
        {
            fieldName: "Languages",
            fiedlValue: "English, Spanish"
        },
    ],
};


const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Experience',
    description: 'I have experience with React, Next.js, Node.js, and TailwindCSS. I am passionate about creating beautiful, responsive, and accessible web applications.',
    items: [
        {
            company: 'Company Name',
            possition: "possition",
            duration: '2021 - Present',
        },
        {
            company: 'Company Name',
            possition: "possition",
            duration: '2021 - Present',
        },
        {
            company: 'Company Name',
            possition: "possition",
            duration: '2021 - Present',
        },
        {
            company: 'Company Name',
            possition: "possition",
            duration: '2021 - Present',
        },
        {
            company: 'Company Name',
            possition: "possition",
            duration: '2021 - Present',
        },
        {
            company: 'Company Name',
            possition: "possition",
            duration: '2021 - Present',
        },
        {
            company: 'Company Name',
            possition: "possition",
            duration: '2021 - Present',
        },
    ]
}


const education = {
    icon: '/assets/resume/cap.svg',
    title: 'Education',
    description: 'I have experience with React, Next.js, Node.js, and TailwindCSS. I am passionate about creating beautiful, responsive, and accessible web applications.',
    items: [
        {
            institution: 'institution Name',
            degree: "possition",
            duration: '2021 - Present',
        },
        {
            institution: 'institution Name',
            degree: "possition",
            duration: '2021 - Present',
        },
        {
            institution: 'institution Name',
            degree: "possition",
            duration: '2021 - Present',
        },

    ]
}

const skills = {
    title: "Skills",
    description: "I have experience with React, Next.js, Node.js, and TailwindCSS. I am passionate about creating beautiful, responsive, and accessible web applications.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML"
        },
        {
            icon: <FaCss3 />,
            name: "CSS"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "TailwindCSS"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js"
        }
    ]
}


import { ScrollArea } from '../../components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn'
                },
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'

        >
            <div className='container mx-auto'>

                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>

                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value="experience" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold' >{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (

                                                <li
                                                    key={index}
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left' >{item.possition}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>

                                                </li>)
                                        })}
                                    </ul>


                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold' >{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (

                                                <li
                                                    key={index}
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left' >{item.institution}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>

                                                </li>)
                                        })}
                                    </ul>


                                </ScrollArea>
                            </div>
                        </TabsContent>


                        <TabsContent value="skills" className='w-full h-full'>
                            <div className="flex flex-col gap-[30px]">

                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>

                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>

                                <ul className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>

                                            <TooltipProvider delayDuration={1}>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'> {skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{skill.name}</p>
                                                    </TooltipContent>

                                                </Tooltip>

                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>

                        </TabsContent>





                        <TabsContent value="about" className='w-full'>

                            about me
                        </TabsContent>
                    </div>

                </Tabs>
            </div>

        </motion.div>
    )
};

export default Resume