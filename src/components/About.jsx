import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-10 md:mt-20">
                    Hello, my name is Ravi Chauhan. As an aspiring software developer and programmer, I am currently pursuing my final year undergraduate B.tech in Computer Science and Business Systems (CSBS) from Bharati Vidyapeeth Deemed University College of Engineering. My keen interest in programming and software development has instilled in me the necessary technical skills and knowledge to excel in this field!
                </p>

                <br />

                <p className="text-xl">
                    I am now seeking opportunities to kick-start my career in software development and programming, where I can leverage my skills and knowledge to deliver high-quality solutions to complex problems. With a sharp eye for detail and a proactive approach to problem-solving, I am confident in my ability to contribute to any team that I join!
                </p>

                <br />

                <p className="text-xl">
                    My passion for programming and software development, combined with my technical skills and commitment to excellence, make me a valuable asset to any organization!
                </p>
            </div>
        </div>
    );
};

export default About;
