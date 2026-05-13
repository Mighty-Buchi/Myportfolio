"use client";
import React from 'react';
import {motion} from 'framer-motion'

const testimonies = [
    {
        image: "/tes1.jpg",
        title: "CEO Devote",
        description: "He was the best man for the job and delivered a very great work, beyond my expectations.",
        tag: "verified"
    },
    {
        image: "/tes2.jpg",
        title: "Lead V.A",
        description: "He's trustworthy and above all, delivers excellently well in jobs. I can always recommend him",
        tag: "verified"
    },
    {
        image: "/tes3.jpg",
        title: "Emmy Designs",
        description: "A very professional developer.i was abosolutely satisfied with the delivery and i love your works.",
        tag: "verified"
    }
];

const Testimonies = () => {
    const list = [...testimonies, ...testimonies, ...testimonies];

    return (
        <motion.div
            initial={{ opacity: 0, rotateX: "90deg"}}
            whileInView={{ opacity: 1, rotateX: 0  }}
            transition={{ duration: 1, }}
            className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-[#222222] mb-12">
                Testimonies
            </h2>

            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group">
                <div className="flex w-max animate-scroll">
                    {list.map((item, index) => (
                        <div
                            key={index}
                            /* On mobile: w-[calc(50vw-1.5rem)] ensures 2 cards are visible.
                               On desktop: w-[400px] keeps them at a professional size.
                            */
                            className="w-[calc(50vw-1.5rem)] md:w-[400px] mx-2 md:mx-4 border border-gray-100 rounded-2xl md:rounded-3xl p-4 md:p-8 bg-white shadow-sm flex flex-col gap-3 md:gap-4 whitespace-normal transition-colors hover:border-blue-100"
                        >
                            <div className="flex items-center gap-2 md:gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-inner flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-gray-900 text-xs md:text-lg leading-tight">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 text-[10px] md:text-base leading-relaxed italic line-clamp-3 md:line-clamp-none">
                                "{item.description}"
                            </p>
                            <div className="flex items-center gap-2 mt-auto">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
                                    {item.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-33.333%); }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    display: flex;
                }

                @media (hover: hover) {
                    .group:hover .animate-scroll {
                        animation-play-state: paused;
                    }
                }

                @media (hover: none) {
                    .group:active .animate-scroll {
                        animation-play-state: paused;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default Testimonies;