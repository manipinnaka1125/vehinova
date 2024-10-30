import React from "react";
import './About.css'; // Import styles for About

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <h2>Transforming the Way People Learn</h2>
      <p>
        Our mission is to create innovative and accessible learning solutions that empower people of all ages and backgrounds to achieve their full potential. Whether you're a student looking to improve your grades, a professional seeking to upskill, or an organization looking to enhance employee training, we have the tools and resources you need to succeed.
      </p>
      <p>
        If you're looking for an innovative and dynamic learning experience that will help you achieve your goals and unlock your full potential, we invite you to join us on this exciting journey. Together, we can transform the way we learn and create a better future for all.
      </p>

      <h2>Internships</h2>
      <p>Our internships are available in a range of fields, including Web Development, Machine Learning, Data Science, and more. Interns will have the chance to work on real-world projects, collaborate with teams, and gain valuable insights into their respective industries.</p>
      
      <h3>Available Internships</h3>
      <div className="internship-list">
        <h4>Software Development Internship</h4>
        <ul>
          <li>Overview</li>
          <li>Life Cycle</li>
          <li>CLI Apps</li>
          <li>GUI Apps</li>
          <li>Web Scraping</li>
        </ul>
        <button className="apply-button">Apply Now</button>

        <h4>Web Development Internship</h4>
        <ul>
          <li>Overview</li>
          <li>HTML5 & CSS3</li>
          <li>JavaScript</li>
          <li>Responsive Website</li>
          <li>Web Applications</li>
        </ul>
        <button className="apply-button">Apply Now</button>

        <h4>Android Development Internship</h4>
        <ul>
          <li>Kotlin/Flutter/React Native</li>
          <li>Simple Apps</li>
          <li>Advanced Apps</li>
          <li>Cloud Apps</li>
        </ul>
        <button className="apply-button">Apply Now</button>

        <h4>Machine Learning Internship</h4>
        <ul>
          <li>Data Analysis</li>
          <li>Supervised Learning</li>
          <li>Unsupervised Learning</li>
          <li>Deep Learning</li>
        </ul>
        <button className="apply-button">Apply Now</button>

        <h4>Data Science Internship</h4>
        <ul>
          <li>EDA</li>
          <li>Data Pre-processing</li>
          <li>Data Visualization</li>
          <li>BI Tools</li>
        </ul>
        <button className="apply-button">Apply Now</button>

        <h4>Cyber Security Internship</h4>
        <ul>
          <li>Caesar Cipher</li>
          <li>Pixel Manipulation</li>
          <li>Password Complexity</li>
          <li>Keyloggers</li>
          <li>Network Packet Analysis</li>
        </ul>
        <button className="apply-button">Apply Now</button>
      </div>

      <h2>Features of our Internships</h2>
      <ul className="features-list">
        <li>Verified Certificates - Get Verified Certificates to prove your hard work!</li>
        <li>Networking - Tap into our network and increase your chances of placements.</li>
        <li>Hands-on Experience - Gain practical experience by working on real-world projects.</li>
        <li>High Quality Content - Great Content to prepare students for their future careers.</li>
      </ul>

      <h2>FAQ</h2>
      <div className="faq">
        <p><strong>What is the duration of the Internship?</strong></p>
        <p><strong>Can I complete multiple tracks together?</strong></p>
        <p><strong>Is there any fee for the internship?</strong></p>
        <p><strong>When will I receive the Offer Letter?</strong></p>
        <p><strong>How to submit Tasks?</strong></p>
        <p><strong>What is the criteria for selection?</strong></p>
        <p><strong>When does the internship start?</strong></p>
        <p><strong>Is the internship Offline or Online?</strong></p>
        <p><strong>CIN is showing Invalid</strong></p>
        <p><strong>When will I get the Certificate?</strong></p>
      </div>

      <h2>Contact Us</h2>
      <p>Let’s talk about it! We love to hear from you!</p>
      <p><strong>Our Location:</strong> Mumbai - 400018, Maharashtra, India</p>
      <p><strong>How Can We Help?</strong> contact@vehinova.dev</p>

      <h3>Send us a Message</h3>
      <form className="contact-form">
        <label>Full Name*</label>
        <input type="text" placeholder="John Doe" required />
        <label>Email*</label>
        <input type="email" placeholder="example@yourmail.com" required />
        <label>Phone*</label>
        <input type="tel" placeholder="XXXXXXXXXX" required />
        <label>Message*</label>
        <textarea placeholder="Type your message here" required></textarea>
        <button type="submit" className="send-button">Send Message</button>
      </form>
    </div>
  );
};

export default About;
