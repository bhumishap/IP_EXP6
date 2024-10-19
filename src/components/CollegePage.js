import React from 'react';
import './CollegePage.css';

const CollegePage = () => {
    return (
        <div className="college-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h1>Welcome to Apna College</h1>
                    <p>Where your dreams take flight. Join us to unlock a world of possibilities and create your bright future.</p>
                    <button className="cta-button">Apply Now!</button>
                </div>
            </section>

            {/* Why Choose Apna College Section */}
            <section className="why-choose">
                <h2>Why Choose Apna College?</h2>
                <div className="why-choose-content">
                    <div className="feature">
                        <h3>Top-Notch Faculty</h3>
                        <p>Learn from industry leaders and renowned academicians who are dedicated to your success.</p>
                    </div>
                    <div className="feature">
                        <h3>State-of-the-Art Facilities</h3>
                        <p>From labs to libraries, experience cutting-edge resources that will enhance your learning journey.</p>
                    </div>
                    <div className="feature">
                        <h3>Vibrant Campus Life</h3>
                        <p>Engage in a community full of culture, activities, and opportunities to make lifelong memories.</p>
                    </div>
                </div>
            </section>

            {/* Featured Programs Section */}
            <section className="featured-programs">
                <h2>Featured Programs</h2>
                <div className="program-cards">
                    <div className="program-card">
                        <h3>Computer Science</h3>
                        <p>Build the future with cutting-edge technology and innovation.</p>
                    </div>
                    <div className="program-card">
                        <h3>Economics</h3>
                        <p>Lead with confidence in the global business environment.</p>
                    </div>
                    <div className="program-card">
                        <h3>English Literature</h3>
                        <p>Expand your horizons with a diverse array of creative fields.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Students Say</h2>
                <div className="testimonial-card">
                    <p>"Apna College has transformed my career and opened doors to opportunities I never imagined!"</p>
                    <p>- Shreya Jadhav, Computer Science</p>
                </div>
                <div className="testimonial-card">
                    <p>"The campus life here is amazing. The balance between academics and extra-curricular activities is perfect."</p>
                    <p>- Pooja Salunkhe, English Literature</p>
                </div>
            </section>


            {/* Footer */}
            <footer>
                <p>Contact us: info@college.edu</p>
                <p>Follow us on social media!</p>
            </footer>
        </div>
    );
};

export default CollegePage;
