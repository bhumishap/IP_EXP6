import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Log the form data or implement your API logic here
        console.log('Form submitted:', formData);

        // Show a confirmation alert
        alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);

        // Reset the form fields to blank
        setFormData({
            name: '',
            email: '',
            message: '',
            subject: ''
        });
    };

    return (
        <div className="contact-us-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Subject:
                    <input 
                        type="text" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Message:
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <button type="submit" className="send-button">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
