import React, { useState } from 'react';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('neon-green');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="p-[100px] min-h-[800px] flex flex-col justify-center">
            <div className="w-[400px] anton max-w-md mx-auto p-5 border rounded-2xl shadow-md">
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
                            className="mt-1 text-sm font-sans block w-full p-2 border-b-neon-blue border-t-white border-x-white border-[2px] bg-white rounded-full outline-none px-6"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="ml-4 block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 text-sm font-sans block w-full p-2 border-b-neon-blue border-t-white border-x-white border-[2px] bg-white rounded-2xl rounded-r-none outline-none px-6"
                            rows="3"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full p-2 text-white text-xl rounded-md focus:outline-none ${
                            color === 'neon-green' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
