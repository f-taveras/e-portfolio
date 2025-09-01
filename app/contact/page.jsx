"use client"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { useState } from "react"
import { motion } from "framer-motion"
import { SiLinkedin } from "react-icons/si"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"


const MyInfo = [
    {
        icon: <SiLinkedin />,
        title: "Linkedin",
        description: "www.linkedin.com/in/f-taveras"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "felixataveras1@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Remote"
    },
]


const Contact = () => {

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [status, setStatus] = useState(null)

    const formspreeEndpoint = process.env.NEXT_FORMSPREE;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            lastname,
            email,
            phone,
            service,
            message
        };

        try {
            const res = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                setStatus("success");
                setName("");
                setLastname("");
                setEmail("");
                setPhone("");
                setService("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };



    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#227272c] rounded-xl">
                            <h3 className="text-4xl text-center text-accent">Let's work together</h3>
                            <p className="text-white/60 text-center">
                                Have a project in mind? Want to chat about your ideas? I'd love to hear from you! Whether you need help with web development, Automation, or anything in between, feel free to reach out. I'll get back to you as soon as possible!
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder=" Firstname" required />
                                <Input onChange={(e) => setLastname(e.target.value)} value={lastname} type="lastname" placeholder=" Last Name" />
                                <Input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder=" Email" required />
                                <Input onChange={(e) => setPhone(e.target.value)} value={phone} type="phonenumber" placeholder=" Phone Number" />
                            </div>

                            <Select onValueChange={(value) => setService(value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="web-development">Web Development</SelectItem>
                                        <SelectItem value="automation">Automation</SelectItem>
                                        <SelectItem value="other-service">Other Service</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea onChange={(e) => setMessage(e.target.value)} className="h-[200px]" placeholder="Type your message here" required />

                            <Button size="md" className="max-w-40" type="submit">Send Message</Button>

                            {status === 'success' && <p className="text-green-500">Message sent successfully!</p>}
                            {status === 'error' && <p className="text-red-500">Failed to send message. Please try again.</p>}
                        </form>
                    </div>

                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {MyInfo.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default Contact;
