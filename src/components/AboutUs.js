// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h2>About ApnaCollege</h2>
            
            {/* Our History Section */}
            <section className="about-section">
                <h3>Our History</h3>
                <p>
                    Established in 1970, ApnaCollege began with a humble mission: to provide affordable and accessible education to the local community.
                    Originally founded as a small community college with only a handful of students, we have since evolved into a globally recognized institution.
                    Over the past five decades, ApnaCollege has expanded both in size and scope, offering a wide variety of undergraduate, postgraduate, and professional programs.
                </p>
                <p>
                    Throughout our history, we have remained dedicated to innovation in education, constantly adapting to the changing needs of society and the economy.
                    Our alumni network now spans the globe, with graduates excelling in diverse industries ranging from technology and business to healthcare and the arts.
                </p>
                <p>
                    ApnaCollege has always prided itself on its close-knit community, fostering a spirit of collaboration, inclusiveness, and mutual respect. Our long-standing tradition of academic excellence continues to inspire students and faculty alike.
                </p>
            </section>
            
            {/* Mission Section */}
            <section className="about-section">
                <h3>Mission</h3>
                <p>
                    At ApnaCollege, our mission is to provide world-class education that empowers students to excel in their fields of study, foster innovation, and make meaningful contributions to society.
                    We are committed to cultivating a learning environment that encourages curiosity, critical thinking, and collaboration.
                </p>
                <p>
                    Through our academic programs, we aim to develop well-rounded individuals who are not only proficient in their respective disciplines but also possess strong ethical values and a deep sense of social responsibility.
                    Our faculty and staff work tirelessly to ensure that every student has the opportunity to realize their full potential and succeed in their chosen career path.
                </p>
                <p>
                    We also strive to be a hub of innovation, encouraging students and researchers to explore new ideas, technologies, and methodologies that can address the challenges of the 21st century. By fostering a culture of lifelong learning, we prepare our students for an ever-changing global landscape.
                </p>
            </section>
            
            {/* Vision Section */}
            <section className="about-section">
                <h3>Vision</h3>
                <p>
                    Our vision is to transform ApnaCollege into a global leader in education, research, and community development.
                    We envision a future where our institution is at the forefront of academic excellence, known not only for its high-quality education but also for its contributions to societal progress and innovation.
                </p>
                <p>
                    By fostering a dynamic and inclusive campus culture, we aim to create a vibrant learning environment where students from all backgrounds feel welcome and supported. We believe that diversity enriches the educational experience and strengthens our community.
                </p>
                <p>
                    ApnaCollege aspires to be an institution that adapts to the changing needs of society, addressing global challenges such as climate change, technological disruption, and social inequality through research, innovation, and leadership.
                    We are committed to making a lasting, positive impact on the world through education and collaboration with industries, governments, and non-profit organizations.
                </p>
            </section>
            
            {/* Why Choose Us Section */}
            <section className="about-section">
                <h3>Why Choose Us?</h3>
                <p>
                    At ApnaCollege, we provide students with unparalleled opportunities for growth and success. Here are just a few reasons why ApnaCollege stands out:
                </p>
                <ul>
                    <li><strong>World-Class Faculty:</strong> Our faculty members are leaders in their respective fields, committed to both research and teaching. They bring real-world experience into the classroom, ensuring that students receive a cutting-edge education.</li>
                    <li><strong>State-of-the-Art Campus:</strong> Our campus is equipped with modern facilities, including advanced research labs, digital libraries, and collaborative learning spaces designed to inspire creativity and innovation.</li>
                    <li><strong>Vibrant Student Life:</strong> We offer a wide range of clubs, societies, and organizations that cater to all interests. Whether you're passionate about sports, arts, or technology, you'll find a community here at ApnaCollege.</li>
                    <li><strong>Global Alumni Network:</strong> With a global alumni network of professionals excelling in diverse fields, our graduates benefit from strong industry connections, mentorship, and career opportunities around the world.</li>
                    <li><strong>Strong Industry Partnerships:</strong> We work closely with leading companies and organizations to provide our students with internships, job placements, and hands-on experiences that prepare them for the professional world.</li>
                    <li><strong>Focus on Innovation:</strong> ApnaCollege is at the forefront of innovation in education, research, and technology. Our students have access to cutting-edge resources and are encouraged to think critically and creatively about the challenges facing society today.</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUs;
