import { motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "0%",

    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"],
    },
}


//ca;culate the reverse index for staggered delay 

const reverseIndex = (index) => {
    const totalSteps = 6; // numer of steps
    return totalSteps - index - 1;

}

const Stairs = () => {
    return (
        <>

            {/* render 6 motion devs, each represeting a step pf the stair 
        Each div will have the same animation defined in the stairAnimation object 
        the delay for each div is calculated sinomically based on its reversed index,
        creating a staggered effect with devreasing delay for each subsequent step
        */}

            {[...Array(6)].map((_, index) => {

                return(
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-white relative "
                />)
            })}
        </>
    )
}

export default Stairs;