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
                    Hello, my name is Ravi Chauhan. I am a Software Engineer at Reserve Bank Information Technology (ReBIT) with experience in Angular development. I specialize in building scalable web applications, API integration, and UI/UX enhancements.
                </p>

                <br />

                <p className="text-xl">
                    Passionate about software development, I have hands-on experience with modern technologies, including Angular, JavaScript, TypeScript, and SQL. I thrive in Agile environments, collaborating with teams to deliver high-quality solutions.
                </p>

                <br />

                <p className="text-xl">
                    I am continuously expanding my expertise in full-stack development and cloud technologies to stay ahead in the ever-evolving tech industry. I enjoy problem-solving and optimizing performance to enhance user experiences.
                </p>

                <br />

                <p className="text-xl">
                    With a strong foundation in web development and a growth-oriented mindset, I am eager to take on new challenges and contribute meaningfully to innovative projects.
                </p>
            </div>
        </div>
    );
};

export default About;
