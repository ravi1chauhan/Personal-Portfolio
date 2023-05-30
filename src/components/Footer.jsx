import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
    const socialLinks = [
        {
            id: 1,
            icon: <FaLinkedin size={20} />,
            href: "https://www.linkedin.com/in/ravi1chauhan/",
        },
        {
            id: 2,
            icon: <FaGithub size={20} />,
            href: "https://github.com/ravi1chauhan",
        },
        {
            id: 3,
            icon: <HiOutlineMail size={20} />,
            href: "mailto:ravichauhan5514@gmail.com",
        },
        {
            id: 4,
            icon: <BsFillPersonLinesFill size={20} />,
            href: "https://drive.google.com/file/d/1cco5qV_TmbaiunIA7rHSEczDsQ882X4Y/view?usp=sharing",
        },
    ];

    return (
        <footer className="bg-gray-900 py-6">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="flex items-center justify-center">
                    <ul className="flex space-x-4">
                        {socialLinks.map(({ id, icon, href }) => (
                            <li key={id}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition-colors duration-300"
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="mt-4 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Ravi Chauhan. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
