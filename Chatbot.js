import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'YOUR_API_GATEWAY_URL'; // Replace with actual API Gateway URL

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'User', text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post(API_URL, {
                sessionId: 'session-1234',
                userMessage: input
            });

            const botMessage = { sender: 'Bot', text: response.data.message };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error:', error);
        }

        setInput('');
    };

    return (
        <div>
            <h2>AI Chatbot</h2>
            <div style={{ minHeight: '300px', border: '1px solid #ccc', padding: '10px' }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === 'User' ? 'right' : 'left' }}>
                        <b>{msg.sender}:</b> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;

