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
    }, [])



    return (
        <div className="p-[100px] min-h-[800px] flex flex-col justify-center bg-gray-100">
            <div ref={ref} className="contact bg-white blur-[8px] w-[400px] anton max-w-md mx-auto px-6 py-8 border rounded-2xl shadow-md">
                <div id="contact" className="text-[40px] font-bold mb-10 text-center">Contact Me</div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <label className="ml-4 block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 text-sm font-sans block w-full p-2 border-gray-300 border-b-neon-blue border-[2px] bg-white rounded-full outline-none px-4"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="ml-4 block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 text-sm font-sans block w-full p-4 border-gray-300 border-b-neon-blue border-[2px] bg-white rounded-2xl rounded-r-none rounded-t-2xl outline-none px-4"
                            rows="3"
                        />
                    </div>

                    <button
                        type="submit"
                        className={'w-full p-2 text-white text-xl rounded-md drop-shadow-xl bg-neon-green'}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
