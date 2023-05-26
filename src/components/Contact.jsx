import React from "react";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                // Successful form submission
                form.reset();
                alert("Thank you for your message!");
            } else {
                // Form submission error
                alert("Oops! Something went wrong. Please try again.");
            }
        };
        xhr.send(formData);
    };

    return (
        <div
            name="contact"
            className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        action="https://formspree.io/f/mayzzbrk"
                        method="POST"
                        onSubmit={handleSubmit}
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                            required
                        />
                        <input
                            type="email"
                            name="_replyto"
                            placeholder="Enter your email"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="5"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                            required
                        ></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
