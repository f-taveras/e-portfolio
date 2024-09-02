// "use client";
import Link from "next/link";
import { FaGithub, FaLinkedIn, FaYoutube } from "react-icons/fa";



const socials = [
    {icon: <FaGithub />, path: "" },
    {icon: <FaLinkedIn />, path: "" },

];

const Social = ({ containerStyles, iconStyles }) => {
    return (
<>
<div className={containerStyles}>
    console.log('socials');  
{/* 
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}

                    </Link>
                );
                })}
                */}
        </div> 
            </>
    )

}


export default Social;
