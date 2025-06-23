import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "../styles/About.css";
const teamMembers = [
  {
    name: "Dr. Alok Patel",
    title: "Founder & Principal OR Scientist",
    image: "/images/alok-patel.jpg",
    linkedin: "#",
    bio: `Dr. Alok Patel founded DecisionOpt with a vision to bring Operations Research to the forefront of modern business strategy and technology...`,
  },
  {
    name: "Dr. Arvind Kumar",
    title: "Partner & Chief OR Scientist",
    image: "/images/arvind-kumar.jpg",
    linkedin: "#",
    bio: `Dr. Arvind Kumar brings a wealth of knowledge and practical insight to DecisionOpt...`,
  },
];
const About = () => {
  return (
    <div className="aboutpage">
      <div className="about-container">
        <p className="about-heading">About Us</p>
        <p className="about-subtext">
          <p>
            Transforming <strong> business decisions </strong>through Advanced
            <strong> Optimization and AI </strong>
          </p>
          <br />
          At OptiFlux, we specialize in solving complex business problems
          through optimization. With strong mathematical foundations and deep
          industry knowledge, we build tailored solutions that deliver real
          impact.
        </p>
        <div className="mvv">
          <div className="mv-container">
            <div className="mv-grid">
              <div className="mv-card">
                <h3 className="mv-title">Mission</h3>
                <p className="mv-text">
                  To empower businesses with decision intelligence that's
                  mathematically sound, technologically advanced, and
                  immediately impactful.
                </p>
              </div>
              <div className="mv-card">
                <h3 className="mv-title">Vision</h3>
                <p className="mv-text">
                  To be the intelligence engine behind high-impact decisions
                  across industries, driven by optimization, AI, and deep domain
                  expertise.
                </p>
              </div>
            </div>
            <div className="mv-card full">
              <h3 className="mv-title">Values</h3>
              <p className="mv-text">
                Excellence, innovation, transparency, and measurable results
                guide everything we do.
              </p>
            </div>
          </div>
        </div>
        <div>
            <p>Our Team</p>
          <div className="team-section">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">
                  {member.title}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-icon"
                  >
                    <FaLinkedin size={16} />
                  </a>
                </p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
