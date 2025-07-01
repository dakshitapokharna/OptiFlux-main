import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: "🏭",
    title: "Requirements Analysis",
    desc: "We analyze your operational requirements, staffing constraints, employee contractual terms, and organizational policies to establish the scheduling parameters.",
  },
  {
    icon: "📦",
    title: "Data Integration",
    desc: "We integrate historical demand data, employee availability, skills matrix, and preference information to create a comprehensive data foundation.",
  },
  {
    icon: "🚚",
    title: "Constraint Modeling",
    desc: "Our specialists develop mathematical models that capture all operational requirements, regulatory constraints, and quality measures for your scheduling needs.",
  },
  {
    icon: "📈",
    title: "Solution Implementation",
    desc: "We implement the optimization algorithms and integrate them with your existing systems for seamless schedule generation and distribution.",
  },
  {
    icon: "📈",
    title: "Continuous Refinement",
    desc: "We continuously monitor scheduling performance, gather feedback, and refine the models to adapt to your evolving business needs.",
  },
];

const Worksched = ({ onContactClick }) => {
  return (
    <div>
      <div className="sco-up">
        <p className="sco-up-text1">Workforce Scheduling Optimization</p>
        <p className="sco-up-text2">
          Create optimal employee schedules that satisfy business requirements,
          employee preferences, and labor regulations for improved efficiency
          and staff satisfaction.
        </p>
      </div>

      <div className="About" id="about">
        <div className="aboutleft">
          <img
            src="/worksched.jpg"
            alt="Workforce Scheduling"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px"
            }}
          />
        </div>
        <div className="aboutright">
          <p className="heading"> Why Workforce Scheduling Matters</p>
          <br />
          <p className="subheadingabout">
            In today's complex business environment, creating efficient and fair
            employee schedules is a significant challenge. Poor scheduling
            practices lead to increased costs, reduced service quality,
            compliance risks, and decreased employee satisfaction.
          </p>
          <p className="subheadingabout">
            OptiFlux's workforce scheduling solutions leverage advanced
            mathematical optimization to precisely align staffing levels with
            demand patterns, ensuring efficient and responsive operations. These
            solutions balance workloads fairly across team members while
            considering employee preferences, qualifications, and compliance
            with labor regulations. By minimizing overtime costs and reducing
            administrative burden, OptiFlux not only enhances operational
            efficiency but also improves employee satisfaction and retention.
          </p>
        </div>
      </div>
      <div className="industries-section">
        <div className="sectiontext" id="industries">
          <div className="industries">
            <h2 className="heading">
              Key Features of Our Workforce Scheduling Solutions
            </h2>
            <p className="subheading">
              Leverage our comprehensive scheduling capabilities to transform
              your workforce management practices.
            </p>

            <div className="fe-container4">
              <div className="fe-up">
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faCalendarAlt">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Workforce Schedular</h3>
                  <br />
                  <p className="fe-subheading">
                    Match staffing levels to anticipated demand patterns using
                    historical data, forecasts, and business metrics to ensure
                    optimal coverage at all times.
                  </p>
                </div>
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faListCheck">
                        <FontAwesomeIcon icon={faListCheck} />
                      </i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Fair Shift Distribution</h3>
                  <br />
                  <p className="fe-subheading">
                    Create equitable schedules that distribute desirable and
                    less desirable shifts fairly among employees while
                    respecting seniority and contractual commitments.
                  </p>
                </div>
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faCubes">
                        <FontAwesomeIcon icon={faCubes} />
                      </i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Personalised Assignment</h3>
                  <br />
                  <p className="fe-subheading">
                    Incorporate employee preferences for work times, days off,
                    shift types, and locations while optimizing for operational
                    requirements.
                  </p>
                </div>
              </div>
              <div className="fe-up">
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faClipboardList">
                        <FontAwesomeIcon icon={faClipboardList} />
                      </i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Compliance Management</h3>
                  <br />
                  <p className="fe-subheading">
                    Ensure schedules adhere to complex labor regulations, union
                    agreements, mandatory rest periods, maximum working hours,
                    and certification requirements.
                  </p>
                </div>
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faBalanceScale">
                        <FontAwesomeIcon icon={faBalanceScale} />
                      </i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Skill-Based Matching</h3>
                  <br />
                  <p className="fe-subheading">
                    Assign employees to shifts based on required skills,
                    certifications, and experience levels to ensure quality
                    service and regulatory compliance.
                  </p>
                </div>
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faRandom">
                        <FontAwesomeIcon icon={faRandom} />
                      </i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Real-Time Rescheduling</h3>
                  <br />
                  <p className="fe-subheading">
                    Quickly generate optimized schedules in response to
                    unexpected absences, demand fluctuations, or operational
                    changes with minimal disruption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="supply-container">
        <div className="left-section">
          <h1 className="heading-supply"> Workforce Scheduling Capabilities</h1>
          <div className="features">
            {features.map((item, idx) => (
              <div key={idx} className="feature-box">
                <div className="icon">{item.icon}</div>
                <div className="text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-section">
          <img src="/worksched1.jpg" alt="worksched-image" className="graphic-box" />
        </div>
      </div>


<div className="industries-section">
      <div className="sectiontext" id="industries">
        <div className="industries">
          <h2 className="heading">Business Benefits</h2>
          <p className="subheading">
            Our workforce scheduling solutions deliver measurable improvements
            in operational efficiency, cost reduction, and employee
            satisfaction.
          </p>

          <div className="fe-container4">
            <div className="fe-up">
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="faChartLine">
                      <FontAwesomeIcon icon={faChartLine} />
                    </i>
                  </div>
                </div>
                <h3 className="fe-heading">Reduced Labor Costs</h3>
                <br />
                <p className="fe-subheading">
                  Optimize staffing levels to match demand patterns, reducing
                  overtime expenses by 15-30% and overall labor costs by 5-12%.
                </p>
              </div>
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="faMoneyBillWave">
                      <FontAwesomeIcon icon={faMoneyBillWave} />
                    </i>
                  </div>
                </div>
                <h3 className="fe-heading">Employee Satisfaction</h3>
                <br />
                <p className="fe-subheading">
                  Increase employee satisfaction by 20-35% through fair
                  scheduling practices and respect for preferences and work-life
                  balance.
                </p>
              </div>
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="faTruckFast">
                      <FontAwesomeIcon icon={faTruckFast} />
                    </i>
                  </div>
                </div>
                <h3 className="fe-heading">Reduced Turnover</h3>
                <br />
                <p className="fe-subheading">
                  Decrease employee turnover by 10-25% by creating predictable,
                  fair schedules that respect employee needs and preferences.
                </p>
              </div>
            </div>
            <div className="fe-up">
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="faBoxesPacking">
                      <FontAwesomeIcon icon={faBoxesPacking} />
                    </i>
                  </div>
                </div>
                <h3 className="fe-heading">Time Savings</h3>
                <br />
                <p className="fe-subheading">
                  Reduce time spent on schedule creation and management by
                  70-90%, freeing up managers for more valuable activities.
                </p>
              </div>
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="faBolt">
                      <FontAwesomeIcon icon={faBolt} />
                    </i>
                  </div>
                </div>
                <h3 className="fe-heading">Compliance Assurance</h3>
                <br />
                <p className="fe-subheading">
                  Minimize compliance risks and associated penalties through
                  automated enforcement of labor regulations and company
                  policies.
                </p>
              </div>
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="faArrowsRotate">
                      <FontAwesomeIcon icon={faArrowsRotate} />
                    </i>
                  </div>
                </div>
                <h3 className="fe-heading">Enhanced Service Quality</h3>
                <br />
                <p className="fe-subheading">
                  Improve customer satisfaction by 15-25% through better
                  alignment of staff skills and availability with service
                  demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
</div>
      <div className="sectiontext" id="industries">
        <h2 className="heading">Workforce Scheduling Success Stories</h2>
        <p className="subheading">
          Real-world examples of how our workforce scheduling solutions have
          transformed operations across industries.
        </p>
        <div className="fe-container">
          <div className="fe-up">
            <div className="fe-box2-pp">
              <div class="box-image-pp">
                <span>hospital staff scheduling </span>
              </div>
              <br />
              <h3 className="fe-heading">Multi-Specialty Hospital Network</h3>
              <br />

              <p className="fe-subheading">
                A large hospital network with 1,200+ nursing staff across
                multiple facilities was struggling with high overtime costs,
                nurse fatigue, and scheduling inequities. We implemented a
                comprehensive nurse scheduling optimization solution that
                balanced patient care requirements, nurse preferences, and
                complex regulatory requirements.
              </p>
              <br />
              <p className="learnmore">
                <a href="#" className="learnmorelink">
                  Read case study
                </a>
              </p>
            </div>
            <div className="fe-box2-pp">
              <div class="box-image-pp">
                <span> Retail Chain Case Study</span>
              </div>
              <br />
              <h3 className="fe-heading">National Retail Chain</h3>
              <br />

              <p className="fe-subheading">
                A retail chain with 75+ locations nationwide was facing
                inconsistent store coverage, high employee turnover, and
                frequently missed sales opportunities during peak times. Our
                workforce scheduling solution incorporated hourly sales
                forecasts, employee skills, and preferences to create optimal
                staffing patterns.
              </p>
              <br />
              <br />
              <p className="learnmore">
                <a href="#" className="learnmorelink">
                  Read case study
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lastsection">
        <p className="headinglast">Transform Your Workforce Scheduling</p>
        <p className="subheadinglast">
          Let our team of optimization experts help you balance operational
          efficiency, employee satisfaction, and regulatory compliance through
          advanced workforce scheduling solutions.
        </p>
        <br />
        <button className="btn4" onClick={onContactClick}>
          Get Started
        </button>
      </div>
      <br />
      <br />
      {/* <div className="sectiontext" id="services">
        <h2 className="heading">Related Services</h2>
        <p className="subheading">
          Explore our other optimization solutions that complement resource
          allocation
        </p>
      </div>
      <div className="fe-container">
        <div className="fe-up">
          <div className="fe-box">
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
            <h3 className="fe-heading">Production Planning</h3>
            <br />
            <p className="fe-subheading">
              Optimize production schedules, manage capacity, and balance
              workloads to meet demand while minimizing costs.
            </p>
            <p className="learnmore">
              <a href="#" className="learnmorelink">
                Learn More
              </a>
            </p>
          </div>

          <div className="fe-box">
            <h3 className="fe-heading">Workforce Scheduling</h3>
            <br />
            <p className="fe-subheading">
              Create optimal employee schedules that satisfy business
              requirements, employee preferences, and labor regulations.
            </p>
            <p className="learnmore">
              <a href="" className="learnmorelink">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
      <br /> */}
    </div>
  );
};
export default Worksched;
