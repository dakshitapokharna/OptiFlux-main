import React from "react";
import { FaBrain, FaUsers, FaLightbulb, FaBriefcase } from "react-icons/fa";
import "../styles/About.css";
const teamMembers = [
  {
    name: "Shrinath Dakare",
    title1: "Chief Executive Officer",
    title2: "B.Tech + M.Tech Industrial Engineering",
    title3: "IIT Kharagpur",
    title4: "6+ Years of Experience",
    image: "/images/alok-patel.jpg",
  },
  {
    name: "Vivek Prakash",

    title1: "Chief Operating Officer",
    title2: "B.Tech Industrial Engineering",
    title3: "IIT Kharagpur",
    title4: "6+ Years of Experience",
    image: "/images/arvind-kumar.jpg",
  },
  {
    name: "Tanuj Deshmukh",
    title1: "Chief Technology Officer",
    title2: "M.S. Operations Research",
    title3: "Georgia Tech",
    title4: "5+ Years of Experience",
    image: "/images/arvind-kumar.jpg",
  },
  {
    name: "Amar Dani",
    title1: "AI and ML",
    title2: "(Healthcare, SAAS, HR Tech, Fintech)",
    title3: "IIT Kharagpur",
    title4: "17+ Years of Experience",
    image: "/images/arvind-kumar.jpg",
  },
  {
    name: "Maqsud Ilteja",
    title1: "Backend Engineer and Architect",
    title2: "(SAAS, Fintech and Payment)",
    title3: "NIT Hamirpur",
    title4: "8+ Years of Experience",
    image: "/images/arvind-kumar.jpg",
  },
  {
    name: "Ashutosh Singh  ",
    title1: "Backend Engineer and Architect",
    title2: " (Fintech, SAAS)",
    title3: "NIT Hamirpur",
    title4: "8+ Years of Experience",
    image: "/images/arvind-kumar.jpg",
  },

  {
    name: "Manjunatha M",
    title1: "Operations Research",
    title2: "(Airline, Production, Inventory Control)",
    title3: "UVCE",
    title4: "8+ Years of Experience",
    image: "/images/arvind-kumar.jpg",
  },
  {
    name: "Mansi Singh",
    title1: "Economics (Trade & Finance)",
    title2: "(Policy Analysis, Environment Economics )",
    title3: "IIFT New Delhi",
    title4: "2+ Years of Experience",
    image: "/images/arvind-kumar.jpg",
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
          <br />
          <br />
          <p className="heading">Our Team</p>
          <div className="team-section">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                />
                <h3 className="team-name">{member.name}</h3>
                <br />
                <strong>
                  <i>
                    <p className="team-title-1">{member.title1}</p>
                  </i>
                </strong>
                <p className="team-title">{member.title2}</p>
                <strong>
                  <p className="team-title">{member.title3}</p>{" "}
                </strong>
                <p className="team-title">{member.title4}</p>
              </div>
            ))}
          </div>
        </div>
        <br /> <br />
      </div>
      <section className="careers-section">
        <div className="careers-header">
          <h1>Join Our Team</h1>
          <p className="subtitle">
            Help us build intelligent, scalable, and impactful solutions in the
            fields of{"  "} {"  "}
            <strong>Operations Research, Data Science, and AI </strong>
          </p>
        </div>

        <div className="careers-content">
          <div className="edge-container">
            <p className="edge-title">The OptiFlux Edge</p>
            <div className="edge-grid">
              <div className="edge-card">
                <FaBrain className="edge-icon" />
                <p>Deep Optimization Expertise</p>
                <p className="edge-para">
                  Math models that speak realworld operations language.
                </p>
              </div>
              <div className="edge-card">
                <FaUsers className="edge-icon" />
                <p>Tailored Not Templated</p>
                <p className="edge-para">
                  Solutions built from the ground up. No cookie cutters.
                </p>
              </div>
              <div className="edge-card">
                <FaLightbulb className="edge-icon" />
                <p>End-to-End Execution</p>
                <p className="edge-para">
                  We design, build, and
                  integrate.
                </p>
              </div>
              <div className="edge-card">
                <FaBriefcase className="edge-icon" />
                <p>Human-Centered Intelligence</p>
                <p className="edge-para">
                  Blending algorithmic power with business intuition.
                </p>
              </div>
              <div className="edge-card">
                <FaLightbulb className="edge-icon" />
                <p>Iterative Innovation</p>
                <p className="edge-para">
                  Built-in optimization feedback loops ensure your operations
                  stay lean
                </p>
              </div>
              <div className="edge-card">
                <FaBriefcase className="edge-icon" />
                <p>Math with a Mission</p>
                <p className="edge-para">
                  Every objective is tuned for one
                  thing: quantifiable business impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br /> <br />
      <br />
      <div className="lastsection">
        <p className="headinglast">Ready to Make an Impact?</p>
        <p className="subheading last">
          If you're excited to build impactful solutions in a fast-paced, young
          team environment, send your CV to
          <br />
          <br />
          <button className="btn3">
            <a href="mailto:admin@optiflux.in" className="mailid">
              admin@optiflux.in
            </a>
          </button>
        </p>
      </div>
      <br />
      <br />
    </div>
  );
};
export default About;
