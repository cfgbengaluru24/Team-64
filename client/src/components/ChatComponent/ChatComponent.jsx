import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatComponent.css';

const socket = io('http://localhost:5000');

function ChatComponent() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState('student'); // or 'admin'
    const [userId, setUserId] = useState('');

    useEffect(() => {
        if (userId) {
            socket.emit('joinRoom', { userId });

            socket.on('receiveMessage', (data) => {
                setMessages((prevMessages) => [...prevMessages, data]);
            });

            return () => {
                socket.off('receiveMessage');
            };
        }
    }, [userId]);

    const handleSendMessage = () => {
        const receiver = user === 'student' ? 'admin' : 'student';
        socket.emit('sendMessage', { sender: user, receiver, message });
        setMessage('');
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender === user ? 'sender' : 'receiver'}`}
                    >
                        <strong>{msg.sender}:</strong> {msg.message}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatComponent;
