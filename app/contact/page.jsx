"use client"

import { Button } from "../../components/ui/button"

import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "347 596 4464"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "felixataveras1@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "New York, NY"
    },
]


import { motion } from "framer-motion"


const Contact = () => {
    return (
        <div>contac paget</div>
    )
};

export default Contact