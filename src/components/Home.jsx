import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Hi, Welcome to my world!
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am a passionate Software Engineer with a background in programming, who enjoys solving problems. Currently, I love to work on web applications using technologies like MongoDB, Express, React, Node.js, and Tailwind CSS.
                    </p>

                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full transition-transform duration-300 transform-gpu hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;


// **********With Get Resume Button Code**********
// import React from "react";
// import HeroImage from "../assets/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

// const Home = () => {
//     const handleGetResumeClick = () => {
//         // window.open("https://example.com/resume.pdf", "_blank");
//         window.open("https://drive.google.com/file/d/1J-Wj8yowM7hY6gNI9lYl3Sbxb0rDKZKP/view?usp=sharing", "_blank");
//     };

//     return (
//         <div
//             name="home"
//             className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
//         >
//             <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//                 <div className="flex flex-col justify-center h-full">
//                     <h2 className="text-4xl sm:text-7xl font-bold text-white">
//                         Hi, Welcome to my world!
//                     </h2>
//                     <p className="text-gray-500 py-4 max-w-md">
//                         I am a passionate Software Engineer with a background in programming,
//                         who enjoys solving problems. Currently, I love to work on web applications
//                         using technologies like MongoDB, Express, React, Node.js, and Tailwind CSS.
//                     </p>

//                     <div className="flex items-center">
//                         <Link
//                             to="portfolio"
//                             smooth
//                             duration={500}
//                             className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//                         >
//                             Portfolio
//                             <span className="group-hover:rotate-90 duration-300">
//                                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//                             </span>
//                         </Link>

//                         <button
//                             className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-2 ml-4 rounded-md hover:scale-110 duration-300"
//                             onClick={handleGetResumeClick}
//                         >
//                             Get Resume
//                         </button>
//                     </div>
//                 </div>

//                 <div className="relative">
//                     <img
//                         src={HeroImage}
//                         alt="my profile"
//                         className="rounded-2xl mx-auto w-2/3 md:w-full transition-transform duration-300 transform-gpu hover:scale-110"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
