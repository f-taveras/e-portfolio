'use client';

import { ScrollArea } from '../../components/ui/scroll-area';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import SkillCarousel from '../../components/SkillCarousel';

const about = {
    title: 'About Me',
    description: 'I am a full-stack developer with a focus on Python. I have experience with React, Next.js, Node.js, and TailwindCSS. I am passionate about creating beautiful, responsive, and accessible web applications. I am currently seeking a full-time position as a Full-Stack developer.',
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
            fieldValue: "Junior"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Currently like",
            fieldValue: "Automation"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Spanish"
        },
    ],
};


const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Experience',
    description: 'I have experience with React, Next.js, Django, Python3 and TailwindCSS. I am passionate about creating beautiful, responsive, and accessible Code',
    items: [
        {
            company: 'Ultimate Technologies Group',
            position: "AV/IT Specialist",
            duration: '2021 - Present',
        },
        {
            company: 'Indeed',
            position: "AV Coordinator",
            duration: '2019-2022',
        },
        {
            company: 'Bronx Community College',
            position: "A/V Associate",
            duration: '2017-2019',
        },
        {
            company: 'US Army',
            position: "92-S",
            duration: '2018 - Present',
        },


    ]
}


const education = {
    icon: '/assets/resume/cap.svg',
    title: 'Education',
    description: 'My education has provided me with a solid foundation in software development and technology, giving me the skills and knowledge needed to solve problems and adapt to new challenges in the industry.',
    items: [
        {
            institution: 'Code Fellows',
            degree: "Advanced Software Development in Full-Stack JavaScript",
            duration: '2024',
        },
        {
            institution: 'Bronx Community College',
            degree: "Associates in Media & Film Production",
            duration: '2018',
        },
        {
            institution: 'John Jay College of Criminal Justice',
            degree: "Computer science",
            duration: '2019',
        },

    ]
}


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

                        {/* Experience section */}

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
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left' >{item.position}</h3>
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

                        {/* Education section */}

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
                                                        <p className='text-white/60'>{item.degree}</p>
                                                    </div>

                                                </li>

                                            )
                                        })}
                                    </ul>


                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Skills section */}

                        <TabsContent value='skills' className='lg:max-w-[1000px]'>
                            <SkillCarousel />
                        </TabsContent>

                        {/* About section */}

                        <TabsContent value="about" className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className='flex items-center xl:justify-start gap-4'
                                            >
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-xl'>{item.fieldValue}</span>

                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};

export default Resume