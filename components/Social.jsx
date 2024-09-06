import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const socials = [
    
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/f-taveras/"},
    {icon: <FaGithub />, path: "https://www.github.com/f-taveras/"},
]

const Social = ({containerStyles, iconStyles}) => {
    return (

        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon} 
                    </Link>
                )
            })}
        </div>

        // <div className=' w-full h-34 flex gap-4'>
            
        //     <div className="flex overflow-hidden">

        //         <a className="rounded-full flex justify-center text-accent hover:bg-accent" href="https://www.linkedin.com/in/f-taveras/" target="_blank">
        //             <FaLinkedin className="" src="/assets/icons/linkedin_icon.png" alt="linkedin icon" />
        //         </a>
        //     </div>
        //     <div className="flex overflow-hidden">

        //         <a className="rounded-full flex justify-center text-accent hover:bg-accent" href="https://github.com/f-taveras" target="_blank">
        //             <FaGithub className=""  alt="github icon" />
        //         </a>
        //     </div>
            

        // </div>
        )
};

export default Social;
