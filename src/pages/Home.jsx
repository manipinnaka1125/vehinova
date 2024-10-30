import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="hero">
                <h1>Vehinova </h1>
                <p>Providing World-Class E-Learning Experience with Real-World Internships</p>
            </header>

            <section className="about">
                <h2>About Us</h2>
                <p>
                    Transforming the Way People Learn. Our mission is to create innovative and accessible learning solutions that empower individuals of all ages and backgrounds to achieve their full potential. Whether you’re a student looking to improve your grades, a professional seeking to upskill, or an organization aiming to enhance employee training, we provide the tools and resources you need to succeed.
                </p>
                <p>
                    If you're seeking a dynamic learning experience that will help you achieve your goals and unlock your full potential, we invite you to join us on this exciting journey. Together, we can transform the way we learn and build a better future for all.
                </p>
                <img src="path_to_your_image/about-image.png" alt="About Us" />
            </section>

            <section className="internships">
                <h2>Our Internships</h2>
                <div className="internship-card">
                    <h3>Software Development Internship</h3>
                    <p>Overview: Learn about software development life cycles and work on projects like CLI and GUI applications.</p>
                    <p>CLI Apps: Create command-line applications.</p>
                    <p>GUI Apps: Develop graphical user interface applications.</p>
                    <a href="#" className="apply-button">Apply Now</a>
                </div>

                <div className="internship-card">
                    <h3>Web Development Internship</h3>
                    <p>Overview: Master the skills of HTML5, CSS3, and JavaScript.</p>
                    <p>Responsive Website: Build mobile-friendly websites.</p>
                    <a href="#" className="apply-button">Apply Now</a>
                </div>

                <div className="internship-card">
                    <h3>Android Development Internship</h3>
                    <p>Overview: Dive into mobile app development with Kotlin, Flutter, or React Native.</p>
                    <p>Simple Apps: Start with basic applications.</p>
                    <a href="#" className="apply-button">Apply Now</a>
                </div>

                <div className="internship-card">
                    <h3>Machine Learning Internship</h3>
                    <p>Overview: Explore the fundamentals of data analysis and deep learning.</p>
                    <a href="#" className="apply-button">Apply Now</a>
                </div>

                <div className="internship-card">
                    <h3>Data Science Internship</h3>
                    <p>Overview: Learn about Exploratory Data Analysis (EDA) and data visualization.</p>
                    <a href="#" className="apply-button">Apply Now</a>
                </div>

                <div className="internship-card">
                    <h3>Cyber Security Internship</h3>
                    <p>Overview: Understand the basics of cyber security.</p>
                    <a href="#" className="apply-button">Apply Now</a>
                </div>
            </section>

            <section className="features">
                <h2>Features of our Internships</h2>
                <ul>
                    <li><strong>Verified Certificates:</strong> Get Verified Certificates to prove your hard work!</li>
                    <li><strong>Networking:</strong> Tap into our network and increase your chances of placements.</li>
                    <li><strong>Hands-on experience:</strong> Gain practical experience by working on real-world projects.</li>
                    <li><strong>High Quality Content:</strong> Great Content to prepare students for their future careers.</li>
                </ul>
            </section>

            <section className="faq">
                <h2>Any Questions? Answered</h2>
                <div className="faq-item">
                    <p><strong>What is the duration of the internship?</strong></p>
                </div>
                <div className="faq-item">
                    <p><strong>Can I complete multiple tracks together?</strong></p>
                </div>
                <div className="faq-item">
                    <p><strong>Is there any fees for the internship?</strong></p>
                </div>
                <div className="faq-item">
                    <p><strong>When will I receive the Offer Letter?</strong></p>
                </div>
                <div className="faq-item">
                    <p><strong>How to submit Tasks?</strong></p>
                </div>
                <div className="faq-item">
                    <p><strong>What is the criteria for selection?</strong></p>
                </div>
                <div className="faq-item">
                    <p><strong>When do the internships start?</strong></p>
                </div>
                <div className="faq-item">
                    <p><strong>Is the internship Offline or Online?</strong></p>
                </div>
                <div className="faq-item">
                    <p><strong>CIN is showing Invalid?</strong></p>
                </div>
                <div className="faq-item">
                    <p><strong>When will I get the Certificate?</strong></p>
                </div>
            </section>

            <footer className="footer">
                <h2>Contact Us</h2>
                <p>Let’s talk about it! We would love to hear from you!</p>
                <p>Our Location: Mumbai - 400018, Maharashtra, India</p>
                <p>Email: contact@vehinova.dev</p>
                <p>Follow us on Social Media</p>
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Telegram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Home;
