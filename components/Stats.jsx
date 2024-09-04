'use client'
import CountUp from "react-countup";

const stats = [
    {
        number: 10,
        text: 'Technologies learned'
    },
    {
        number: 100,
        text: 'Projects completed'
    },
    {
        number: 1000,
        text: 'Cups of coffee'
    }
];

const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">

                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex1 flex gap-4 items-center justify-center xl:justify-start"
                                key={index}>
                                <CountUp
                                    end={item.number}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default Stats;