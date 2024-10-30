import React from "react";
import './Internships.css'; // Import styles for Internships

const Internships = () => {
  const internshipData = [
    {
      title: "Software Engineering Intern",
      company: "XYZ Company",
      overview: "Work on innovative software development projects, collaborate with teams, and gain hands-on experience in coding and software lifecycle.",
      duration: "May - June 2024",
      skills: "Java, Python, Git",
    },
    {
      title: "Marketing Intern",
      company: "ABC Corp",
      overview: "Assist in developing marketing campaigns, manage social media platforms, and conduct market research to understand customer needs.",
      duration: "June - July 2024",
      skills: "SEO, Content Creation, Social Media",
    },
    {
      title: "Data Analysis Intern",
      company: "DEF Ltd",
      overview: "Analyze complex data sets, generate insightful reports, and support the team in making data-driven decisions.",
      duration: "July - August 2024",
      skills: "Excel, SQL, Tableau",
    },
    {
      title: "Design Intern",
      company: "GHI Designs",
      overview: "Contribute to creative design projects, collaborate with the design team, and help in developing branding strategies.",
      duration: "May - June 2024",
      skills: "Adobe Suite, UX/UI Design",
    },
  ];

  return (
    <div className="internships">
      <h1>Available Internships</h1>
      <p>Check out our latest internship offerings:</p>
      <div className="internship-cards">
        {internshipData.map((internship, index) => (
          <div className="internship-card" key={index}>
            <h3>{internship.title}</h3>
            <p><strong>Company:</strong> {internship.company}</p>
            <p><strong>Overview:</strong> {internship.overview}</p>
            <p><strong>Duration:</strong> {internship.duration}</p>
            <p><strong>Skills Required:</strong> {internship.skills}</p>
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
