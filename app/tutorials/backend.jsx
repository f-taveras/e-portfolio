'use client'
import { useEffect, useState } from 'react';


const Tutorials = () => {
    const [data, setData] = useState([]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        SetCurrentTutorial(data[currentIndex]);
    }

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await fetch('http://localhost:8000/tutorials/');
                const data = await response.json();
                setData(data);
                SetCurrentTutorial(data[0]);
                console.log(data)
            } catch (error) {
                console.error('Error fetching links', error);
            }
        };
        fetchLinks();
    }, []);

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
                                {data.number    }
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