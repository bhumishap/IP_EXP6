// src/components/StudentCorner.js
import React from 'react';
import './StudentCorner.css'; // Create this CSS file for styling

const StudentCorner = () => {
    return (
        <div className="student-corner">
            <h1>Student Corner</h1>
            <p>Welcome to the Student Corner! Here you'll find resources, important links, and events tailored for our students.</p>

            <div className="resources">
                <h2>Resources</h2>
                <ul>
                    <li><a href="#">Academic Calendar</a></li>
                    <li><a href="#">Library Resources</a></li>
                    <li><a href="#">Student Handbook</a></li>
                    <li><a href="#">Counseling Services</a></li>
                </ul>
            </div>

            <div className="important-links">
                <h2>Important Links</h2>
                <ul>
                    <li><a href="#">Course Registration</a></li>
                    <li><a href="#">Financial Aid Information</a></li>
                    <li><a href="#">Student Organizations</a></li>
                    <li><a href="#">Campus Safety</a></li>
                </ul>
            </div>

            <div className="events">
                <h2>Upcoming Events</h2>
                <ul>
                    <li>Orientation Week - September 1-7</li>
                    <li>Career Fair - October 15</li>
                    <li>Final Exams - December 10-15</li>
                    <li>Winter Break - December 20 - January 5</li>
                </ul>
            </div>

            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default StudentCorner;
