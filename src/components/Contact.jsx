import React, { useState, useEffect, useRef } from 'react';
import gsapContact from '../GSAPanimation/gsapContact';

const ContactMe = () => {
    const ref = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    useEffect(() => {
        gsapContact(ref);
    }, []);

    return (
        <div className="p-6 sm:p-10 lg:p-[100px] min-h-[600px] flex flex-col justify-center bg-darker text-light">
            <div ref={ref} className="contact bg-dark blur-[8px] w-full max-w-[400px] anton mx-auto px-4 sm:px-6 py-8 border-0 rounded-2xl shadow-md">
                <div id="contact" className="text-[30px] sm:text-[40px] font-bold mb-6 sm:mb-10 text-center">Contact Me</div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 sm:mb-8">
                        <label className="ml-2 sm:ml-4 block text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 text-sm font-sans block w-full p-2 border-darker border-b-neon-blue border-[2px] bg-darker rounded-full outline-none px-3 sm:px-4"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="ml-2 sm:ml-4 block text-sm font-medium text-gray-300" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 text-sm font-sans block w-full p-3 sm:p-4 border-darker border-b-neon-blue border-[2px] bg-darker rounded-2xl rounded-r-none rounded-t-2xl outline-none"
                            rows="4"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 sm:p-3 text-white text-lg sm:text-xl rounded-md drop-shadow-lg bg-neon-green"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;