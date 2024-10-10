'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaPython, FaLinux, FaMicrosoft } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiDjango, SiApache, SiMeta, SiOpenai} from 'react-icons/si';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';


const skills = {
    title: "Skills",
    description: "Proficient in a variety of programming languages and technologies, I bring a strong skill set in web development, software design, and problem-solving. With experience in both front-end and back-end development, I am capable of building responsive, dynamic applications and solutions tailored to meet specific needs.",
    skillList: [
        {
            icon: <FaPython />,
            name: "Python"
        },
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
        },
        {
            icon: <FaLinux />,
            name: "Linux"
        },
        {
            icon: <FaMicrosoft />,
            name: "Microsoft"
        },
        {
            icon: <SiDjango />,
            name: "Django"
        },
        {
            icon: <SiApache />,
            name: "Apache"
        },
        {
            icon: <SiMeta />,
            name: "Ollama"
        },
        {
            icon: <SiOpenai />,
            name: "ChatGPT"
        },
        

    ]
}

const SkillCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <TabsContent value="skills" className='w-full h-full'>
<div className="flex flex-col gap-[30px]">

    <div className='flex flex-col gap-[30px] text-center xl:text-left'>

        <h3 className='text-4xl font-bold'>{skills.title}</h3>
        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
    </div>

    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
        {skills.skillList.map((skill, index) => {
            return <li key={index}>

                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group gap-4 xl:gap-[30px]'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'> {skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                        </TooltipContent>

                    </Tooltip>

                </TooltipProvider>
            </li>
        })}
    </ul>
</div>

</TabsContent>

      </Slider>
    </div>
  );
}

export default SkillCarousel;


