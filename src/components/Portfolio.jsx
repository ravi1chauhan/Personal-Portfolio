import React from "react";
import entertainmentWorld from "../assets/portfolio/entertainmentWorld.jpg";
import cryptoWorld from "../assets/portfolio/cryptoWorld.jpg";
import communik8 from "../assets/portfolio/communik8.jpg";
import weather from "../assets/portfolio/weather.jpg";
import textutils from "../assets/portfolio/textutils.jpg";
import dictionary from "../assets/portfolio/dictionary.jpg";
import { useState } from 'react';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: entertainmentWorld,
            demoLink: "https://entertainment-world.netlify.app/",
            codeLink: "https://github.com/ravi1chauhan/Entertainment-World",
        },
        {
            id: 2,
            src: cryptoWorld,
            demoLink: "https://our-crypto-world.netlify.app/",
            codeLink: "https://github.com/ravi1chauhan/Crypto-World",
        },
        {
            id: 3,
            src: communik8,
            demoLink: "https://github.com/ravi1chauhan/MERN-Chat-Station",
            codeLink: "https://github.com/ravi1chauhan/MERN-Chat-Station",
        },
        {
            id: 4,
            src: weather,
            demoLink: "https://cloudigent.netlify.app/",
            codeLink: "https://github.com/ravi1chauhan/CloudiGent-Weather-App",
        },
        {
            id: 5,
            src: textutils,
            demoLink: "https://ravitextutils.netlify.app/",
            codeLink: "https://github.com/ravi1chauhan/TextUtils",
        },
        {
            id: 6,
            src: dictionary,
            demoLink: "https://mywordhunt.netlify.app/",
            codeLink: "https://github.com/ravi1chauhan/Word_Hunt",
        },
    ];

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const displayedPortfolios = showAll ? portfolios : portfolios.slice(0, 3);

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-4">
                    {displayedPortfolios.map(({ id, src, demoLink, codeLink }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center space-x-4 mt-4">
                                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                                    <button className="px-4 py-2 text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md hover:from-cyan-600 hover:to-blue-600">
                                        Demo
                                    </button>
                                </a>
                                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                                    <button className="px-4 py-2 text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md hover:from-cyan-600 hover:to-blue-600">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {!showAll && (
                    <div className="flex justify-center mt-8">
                        <button
                            className="px-4 py-2 text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md hover:from-cyan-600 hover:to-blue-600"
                            onClick={toggleShowAll}
                        >
                            See More
                        </button>
                    </div>
                )}
                {showAll && (
                    <div className="flex justify-center mt-8">
                        <button
                            className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-700"
                            onClick={toggleShowAll}
                        >
                            See Less
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
