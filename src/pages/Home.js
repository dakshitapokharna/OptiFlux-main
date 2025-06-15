import "../styles/Home.css";
const Home = ({ onContactClick }) => {
  return (
    <div className="home">
      <div className="c-up">
        <p className="c-up-text1">
          Advanced Operations Research & Optimization Solutions
        </p>
        {/* <p className="c-up-text2"> */}
        <p className="c-up-text2">
          Transforming complex business challenges into optimized decisions
          through advanced analytics, mathematical modeling, and AI-powered
          solutions.
        </p>
        <div className="home-buttons">
          <button className="home-btn1">
            <a href="#" className="btn1">
              Explore Solutions
            </a>
          </button>
          <button className="home-btn2" onClick={onContactClick}>
            Schedule a Consultation
          </button>
        </div>
      </div>

      <div className="sectiontext" id="services">
        <h2 className="heading">Our Optimization Services</h2>
        <p className="subheading">
          We combine advanced mathematical techniques with domain expertise to
          deliver customized optimization solutions for your business
          challenges.
        </p>
      </div>
      <div className="fe-container">
        <div className="fe-up">
          <div className="fe-box">
            <div className="col">
              <div className="icon-box">
                <i className="fas fa-align-right"></i>
              </div>
            </div>
            <h3 className="fe-heading">Supply Chain Optimization</h3>
            <br />
            <p className="fe-subheading">
              Optimize inventory levels, distribution networks, and logistics
              operations to reduce costs and improve service levels.
            </p>
            <p className="learnmore">
              <a href="/sco" className="learnmorelink">
                Learn More
              </a>
            </p>
          </div>
          <div className="fe-box">
            <div className="col">
              <div className="icon-box">
                <i className="fas fa-clipboard-check"></i>
              </div>
            </div>
            <h3 className="fe-heading">Resource Allocation</h3>
            <br />
            <p className="fe-subheading">
              Maximize efficiency by optimally allocating resources across
              projects, departments, and time periods.
            </p>
            <p className="learnmore">
              <a href="/resallo" className="learnmorelink">
                Learn More
              </a>
            </p>
          </div>
          <div className="fe-box">
            <div className="col">
              <div className="icon-box">
                <i className="fas fa-briefcase-medical"></i>
              </div>
            </div>
            <h3 className="fe-heading">Production Planning</h3>
            <br />
            <p className="fe-subheading">
              Optimize production schedules, manage capacity, and balance
              workloads to meet demand while minimizing costs.
            </p>
            <p className="learnmore">
              <a href="/prodplan" className="learnmorelink">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div className="fe-up">
          <div className="fe-box">
            <div className="col">
              <div className="icon-box">
                <i className="fas fa-briefcase"></i>
              </div>
            </div>
            <h3 className="fe-heading">Workforce Scheduling</h3>
            <br />
            <p className="fe-subheading">
              Create optimal employee schedules that satisfy business
              requirements, employee preferences, and labor regulations.
            </p>
            <p className="learnmore">
              <a href="/worksched" className="learnmorelink">
                Learn More
              </a>
            </p>
          </div>
          <div className="fe-box">
            <div className="col">
              <div className="icon-box">
                <i className="fas fa-display"></i>
              </div>
            </div>
            <h3 className="fe-heading">Network Optimization</h3>
            <br />
            <p className="fe-subheading">
              Design efficient transportation and distribution networks to
              minimize costs and improve service quality.
            </p>
            <p className="learnmore">
              <a href="/netopti" className="learnmorelink">
                Learn More
              </a>
            </p>
          </div>
          <div className="fe-box">
            <div className="col">
              <div className="icon-box">
                <i className="fas fa-bookmark"></i>
              </div>
            </div>
            <h3 className="fe-heading">Custom Solutions</h3>
            <br />
            <p className="fe-subheading">
              Tailored optimization solutions designed to address your unique
              business challenges and objectives.
            </p>
            <p className="learnmore">
              <a href="#" className="learnmorelink">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="sectiontext" id="industries">
        <div className="industries">
          <h2 className="heading">Industries We Serve</h2>
          <p className="subheading">
            Our optimization solutions are tailored to address the unique
            challenges and opportunities across various industries.
          </p>
          <div className="fe-container2">
            <div className="fe-up">
              <div className="fe-box2">
                <div class="box-image">
                  <span>Transportation Image</span>
                </div>
                <br />

                <h3 className="fe-heading">Transportation & Logistics</h3>
                <br />
                <p className="fe-subheading">
                  Optimize routing, fleet management, and network design to
                  reduce costs and improve service levels.
                </p>
                <p className="learnmore">
                  <a href="#" className="learnmorelink">
                    Learn More
                  </a>
                </p>
              </div>
              <div className="fe-box2">
                <div class="box-image">
                  <span>Manufacturing Image</span>
                </div>
                <br />
                <h3 className="fe-heading">Manufacturing</h3>
                <br />
                <br />
                <p className="fe-subheading">
                  Improve production planning, inventory management, and supply
                  chain efficiency.
                </p>
                <br />
                <p className="learnmore">
                  <a href="#" className="learnmorelink">
                    Learn More
                  </a>
                </p>
              </div>
              <div className="fe-box2">
                <div class="box-image">
                  <span>Healthcare Image</span>
                </div>
                <br />
                <h3 className="fe-heading">Healthcare</h3>
                <br />
                <br />
                <p className="fe-subheading">
                  Optimize staff scheduling, patient flow, and resource
                  allocation to enhance patient care.
                </p>
                <p className="learnmore">
                  <a href="#" className="learnmorelink">
                    Learn More
                  </a>
                </p>
              </div>
              <div className="fe-box2">
                <div class="box-image">
                  <span>Retail Image</span>
                </div>
                <br />
                <h3 className="fe-heading">Retail</h3>
                <br />
                <br />
                <p className="fe-subheading">
                  Enhance inventory management, pricing strategies, and demand
                  forecasting for improved profitability.
                </p>
                <p className="learnmore">
                  <a href="#" className="learnmorelink">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sectiontext">
        <h2 className="heading">Why Choose OptiFlux</h2>
        <p className="subheading">
          Discover the unique advantages of working with our specialized
          optimization team.
        </p>
      </div>
      <div className="fe-container">
        <div className="fe-up">
          <div className="fe-box">
            <h3 className="fe-heading3">Advanced Mathematical Expertise</h3>
            <br />
            <p className="fe-subheading">
              Our team includes PhDs in operations research, applied
              mathematics, and computer science with extensive experience in
              advanced optimization techniques.
            </p>
          </div>
          <div className="fe-box">
            <h3 className="fe-heading3">Focused Specialization</h3>
            <br />
            {/* <br /> */}
            <p className="fe-subheading">
              Unlike general management consultancies, we focus exclusively on
              optimization, allowing us to develop deeper expertise and deliver
              superior results.
            </p>
          </div>
          <div className="fe-box">
            <h3 className="fe-heading3">Cutting-Edge Technology</h3>
            <br />
            {/* <br /> */}
            <p className="fe-subheading">
              We leverage the latest developments in mathematical optimization,
              machine learning, and artificial intelligence to solve previously
              intractable problems.
            </p>
          </div>
        </div>
        <div className="fe-up">
          <div className="fe-box">
            <h3 className="fe-heading3">Collaborative Approach</h3>
            <br />
            <p className="fe-subheading">
              We work closely with your team to understand your business
              context, transfer knowledge, and ensure successful implementation
              of optimization solutions.
            </p>
          </div>
          <div className="fe-box">
            <h3 className="fe-heading3">Proven Track Record</h3>
            <br />
            <p className="fe-subheading">
              Our history of successful implementations across industries
              demonstrates our ability to deliver substantial, measurable
              improvements in efficiency and cost reduction.
            </p>
          </div>
          <div className="fe-box">
            <h3 className="fe-heading3">End-to-End Implementation</h3>
            <br />
            <p className="fe-subheading">
              We don't just provide theoretical solutions—we partner with you
              through the entire process from initial design to full
              implementation and continuous improvement.
            </p>
          </div>
        </div>
      </div>

      <div className="About" id="about">
        <div className="aboutleft">Image</div>
        <div className="aboutright">
          <p className="heading">About OptiFlux</p>
          <p className="subheadingabout">
            At OptiFlux, we are passionate about helping businesses make better
            decisions through advanced operations research and optimization
            techniques.
          </p>
          <p className="subheadingabout">
            Our team combines deep expertise in mathematics, computer science,
            and domain knowledge to develop innovative solutions that drive
            efficiency, reduce costs, and create competitive advantages for our
            clients.
          </p>
        </div>
      </div>

      <div className="lastsection">
        <p className="headinglast">Ready to Optimize Your Business?</p>
        <p className="subheading">
          Let's discuss how our advanced optimization solutions can transform
          your business challenges into competitive advantages.
        </p>
        <button className="btn3" onClick={onContactClick}>
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default Home;
