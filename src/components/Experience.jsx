import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import java from "../assets/java.png";

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-500",
        },
        {
            id: 5,
            src: express,
            title: "Express",
            style: "shadow-gray-500",
        },
        {
            id: 6,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 7,
            src: node,
            title: "Node",
            style: "shadow-lime-600",
        },
        {
            id: 8,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 9,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 10,
            src: nextjs,
            title: "Next JS",
            style: "shadow-white",
        },
        {
            id: 11,
            src: graphql,
            title: "GraphQL",
            style: "shadow-pink-400",
        },
        {
            id: 12,
            src: java,
            title: "Java",
            style: "shadow-blue-400",
        },
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-6 sm:px-12">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
