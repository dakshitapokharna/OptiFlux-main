import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faGaugeSimple } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const Resallo = ({ onContactClick }) => {
  return (
    <div>
      <div className="sco-up">
        <p className="sco-up-text1">Resource Allocation</p>
        <p className="sco-up-text2">
          Maximize efficiency and ROI by optimally distributing your limited
          resources
        </p>
      </div>

      <div className="About" id="about">
        <div className="aboutleft">Resource Allocation Image</div>
        <div className="aboutright">
          <p className="heading"> Strategic Resource Allocation Solutions</p>
          <br />
          <p className="subheadingabout">
            In today's competitive business environment, efficiently allocating
            limited resources is crucial for maximizing productivity and
            profitability. OptiFlux's resource allocation solutions help
            organizations make data-driven decisions about how to distribute
            resources across competing projects, departments, and time periods.
          </p>
          <p className="subheadingabout">
            Our advanced optimization models account for complex constraints,
            multiple objectives, and uncertainty to deliver allocation
            strategies that maximize your return on investment while satisfying
            business requirements and priorities.
            <br />
            <br /> Whether you're allocating budget, personnel, equipment, or
            time, our solutions provide clear, actionable insights that drive
            improved performance and competitive advantage.
          </p>
        </div>
      </div>
      <div className="industries-section">
        <div className="sectiontext" id="industries">
          <div className="industries">
            <h2 className="heading">
              Benefits of Optimized Resource Allocation
            </h2>
            <p className="subheading">
              See how our resource allocation solutions can transform your
              organization
            </p>

            <div className="fe-container4">
              <div className="fe-up">
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="fa-circle-exclamation">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                      </i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Maximized ROI</h3>
                  <br />
                  <p className="fe-subheading">
                    Allocate resources to activities that generate the highest
                    return, ensuring every dollar, hour, and asset is used
                    effectively.
                  </p>
                </div>
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="fas fa-align-right"></i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Reduced Waste</h3>
                  <br />
                  <p className="fe-subheading">
                    Eliminate inefficiencies and unused capacity by ensuring
                    resources are allocated where they're most needed
                  </p>
                </div>
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="fa-regular faTrash">
                        <FontAwesomeIcon icon={faTrash} />
                      </i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Balanced Workloads</h3>
                  <br />
                  <p className="fe-subheading">
                    Distribute work evenly across teams and departments,
                    preventing bottlenecks and resource overutilization.
                  </p>
                </div>
              </div>
              <div className="fe-up">
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faGaugeSimple">
                        {" "}
                        <FontAwesomeIcon icon={faGaugeSimple} />
                      </i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Strategic Alignment</h3>
                  <br />
                  <p className="fe-subheading">
                    Ensure resource allocation decisions support your
                    organization's strategic objectives and priorities.
                  </p>
                </div>
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faNewspaper">
                        <FontAwesomeIcon icon={faNewspaper} />
                      </i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Data-Driven Decisions</h3>
                  <br />
                  <p className="fe-subheading">
                    Replace gut feelings and politics with analytics-based
                    resource allocation decisions that maximize organizational
                    performance.
                  </p>
                </div>
                <div className="fe-box">
                  <div className="col">
                    <div className="icon-box">
                      <i className="fas fa-briefcase-medical"></i>
                    </div>
                  </div>
                  <h3 className="fe-heading">Improved Adaptability</h3>
                  <br />
                  <p className="fe-subheading">
                    Quickly adjust resource allocations in response to changing
                    conditions, opportunities, and constraints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectiontext" id="industries">
        <h2 className="heading">Resource Allocation Success Stories</h2>
        <p className="subheading">
          See how our clients have transformed their operations with our
          resource allocation solutions
        </p>
        <div className="fe-container">
          <div className="fe-up">
            <div className="fe-box2-sco">
              <div class="box-image-sco">
                <span>Case Study 1 Image</span>
              </div>
              <br />
              <h3 className="fe-heading">Financial Services Firm</h3>
              <br />

              <p className="fe-subheading">
                Optimized budget allocation across 35+ marketing channels,
                increasing ROI by 27% while maintaining the same overall
                marketing budget.
              </p>
              <br />
              <p className="learnmore">
                <a href="#" className="learnmorelink">
                  Read case study
                </a>
              </p>
            </div>
            <div className="fe-box2-sco">
              <div class="box-image-sco">
                <span>Case Study 2 Image</span>
              </div>
              <br />
              <h3 className="fe-heading">Optimed Health Networks</h3>
              <br />

              <p className="fe-subheading">
                Developed a staff allocation model for a hospital network that
                balanced workloads, reduced overtime costs by 15%, and improved
                patient satisfaction scores.
              </p>
              <br />
              <p className="learnmore">
                <a href="#" className="learnmorelink">
                  Read case study
                </a>
              </p>
            </div>
            <div className="fe-box2-sco">
              <div class="box-image-sco">
                <span>Case Study 3 Image</span>
              </div>
              <br />
              <h3 className="fe-heading">TechVision Portfolio</h3>
              <br />
              <p className="fe-subheading">
                Created a portfolio optimization model for an IT company that
                prioritized projects based on strategic alignment, ROI, and
                resource constraints, resulting in 40% higher portfolio value.
              </p>

              <p className="learnmore">
                <a href="#" className="learnmorelink">
                  Read case study
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className= "industries-section">
        <div className="sectiontext" id="industries">
          <div className="industries">
            <h2 className="heading">Technologies & Methodologies</h2>
            <p className="subheading">
              Advanced tools and techniques powering our resource allocation
              solutions
            </p>
            <div className="fe-container2">
              <div className="fe-up">
                <div className="fe-box2">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faWaveSquare">
                        <FontAwesomeIcon icon={faWaveSquare} />
                      </i>
                    </div>
                  </div>
                  <br />

                  <h3 className="fe-heading">Linear <br /> Programming</h3>
                  <br />
                  <p className="fe-subheading">
                    Efficiently solves resource allocation problems with linear
                    objective functions and constraints, finding the optimal
                    distribution of resources to maximize returns.
                  </p>
                </div>
                <div className="fe-box2">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faChartSimple">
                        <FontAwesomeIcon icon={faChartSimple} />
                      </i>
                    </div>
                  </div>
                  <br />
                  <h3 className="fe-heading">Stochastic Optimization</h3>
                  <br />

                  <p className="fe-subheading">
                    Accounts for uncertainties in resource allocation by
                    incorporating probabilistic models, ensuring robust
                    solutions even under variable conditions.
                  </p>
                  <br />
                </div>
                <div className="fe-box2">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faCube">
                        <FontAwesomeIcon icon={faCube} />
                      </i>
                    </div>
                  </div>
                  <br />
                  <h3 className="fe-heading">Multi-Objective Optimization</h3>

                  <br />
                  <p className="fe-subheading">
                    Balances multiple, sometimes competing objectives in
                    resource allocation decisions, finding optimal trade-offs
                    between different performance metrics.
                  </p>
                </div>
                <div className="fe-box2">
                  <div className="col">
                    <div className="icon-box">
                      <i className="faGlobe">
                        <FontAwesomeIcon icon={faGlobe} />
                      </i>
                    </div>
                  </div>
                  <br />
                  <h3 className="fe-heading">
                    Advanced <br />
                    Analytics
                  </h3>
                  <br />

                  <p className="fe-subheading">
                    Leverages data mining, statistical analysis, and machine
                    learning techniques to identify patterns and extract
                    insights that inform resource allocation decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="lastsection">
        <p className="headinglast">
          Ready to Optimize Your Resource Allocation?
        </p>
        <p className="subheadinglast">
          Contact us today to schedule a consultation and discover how our
          resource allocation solutions can transform your operations.
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

export default Resallo;
