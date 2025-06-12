import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faGaugeSimple } from "@fortawesome/free-solid-svg-icons";

const SCO = ({ onContactClick }) => {
  return (
    <div>
      <div className="sco-up">
        <p className="sco-up-text1">Supply Chain Optimisation</p>
        <p className="sco-up-text2">
          Transform your supply chain into a competitive advantage with our
          advanced optimization solutions{" "}
        </p>
      </div>

      <div className="About" id="about">
        <div className="aboutleft">Supply Chain Optimisation Image</div>
        <div className="aboutright">
          <p className="heading">Optimize Your Entire Supply Chain</p>
          <p className="subheadingabout">
            In today's complex and rapidly changing business environment, an
            optimized supply chain is essential for maintaining competitiveness
            and profitability. At OptiFlux, we leverage advanced operations
            research techniques to transform your supply chain into a strategic
            advantage.
          </p>
          <p className="subheadingabout">
            Our supply chain optimization solutions address the entire supply
            chain from suppliers to end customers, ensuring that your products
            flow efficiently through the network while minimizing costs and
            maximizing service levels.
            <br />
            <br /> Using sophisticated mathematical modeling and algorithms, we
            analyze your supply chain data, identify inefficiencies, and develop
            solutions that balance competing objectives such as cost, service
            level, and risk.
          </p>
        </div>
      </div>

      <div className="sectiontext" id="industries">
        <div className="industries">
          <h2 className="heading">Benefits of Supply Chain Optimization</h2>
          <p className="subheading">
            Our optimization solutions deliver tangible results across your
            supply chain operations
          </p>

          <div className="fe-container2">
            <div className="fe-up">
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="fa-circle-exclamation">
                      <FontAwesomeIcon icon={faCircleExclamation} />
                    </i>
                  </div>
                </div>
                <h3 className="fe-heading">Reduced Costs</h3>
                <br />
                <p className="fe-subheading">
                  Minimize transportation, inventory, and production costs
                  through optimal network design and resource allocation.
                </p>
              </div>
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="fas fa-align-right"></i>
                  </div>
                </div>
                <h3 className="fe-heading">Improved Service Levels</h3>
                <br />
                <p className="fe-subheading">
                  Enhance customer satisfaction by ensuring on-time deliveries
                  and product availability while maintaining optimal inventory
                  levels.
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
                <h3 className="fe-heading">Increased Visibility</h3>
                <br />
                <p className="fe-subheading">
                  Gain deeper insights into your supply chain operations,
                  enabling better decision-making and proactive issue
                  resolution.
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
                <h3 className="fe-heading">Enhanced Resilience</h3>
                <br />
                <p className="fe-subheading">
                  Build a more robust supply chain that can adapt to
                  disruptions, changing market conditions, and evolving customer
                  demands.
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
                  Replace gut feelings with analytical insights based on
                  advanced optimization models and algorithms.
                </p>
              </div>
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="fas fa-briefcase-medical"></i>
                  </div>
                </div>
                <h3 className="fe-heading">Sustainability Improvements</h3>
                <br />
                <p className="fe-subheading">
                  Reduce environmental impact through efficient routing, reduced
                  inventory waste, and optimized resource utilization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectiontext" id="industries">
        <div className="industries">
          <h2 className="heading">Supply Chain Optimization Success Stories</h2>
          <p className="subheading">
            See how our clients have transformed their supply chains with our
            optimization solutions
          </p>
          <div className="fe-container2">
            <div className="fe-up">
              <div className="fe-box2-sco">
                <div class="box-image-sco">
                  <span>Case Study 1 Image</span>
                </div>
                <br />
                <h3 className="fe-heading">WorldTech Manufacturing</h3>
                <br />
                <br />
                <p className="fe-subheading">
                  Reduced logistics costs by 15% through network redesign and
                  transportation optimization, while simultaneously improving
                  on-time delivery performance by 10%.
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
                <h3 className="fe-heading">Retail Chain Transformation</h3>
                <br />
                <br />
                <p className="fe-subheading">
                  Optimized inventory levels across 200+ retail locations,
                  reducing inventory holding costs by 20% while maintaining 98%
                  product availability.
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
                <h3 className="fe-heading">Pharmaceutical Distribution</h3>
                <br />
                <br />
                <p className="fe-subheading">
                  Designed a resilient distribution network for a pharmaceutical
                  company, ensuring critical medication availability during
                  disruptions while optimizing costs.
                </p>
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
      </div>
      <div className="sco-up">
        <p className="sco-up-text1">Ready to Optimize Your Supply Chain?</p>
        <p className="sco-up-text2">
          Contact us today to schedule a consultation and discover how our
          supply chain optimization solutions can transform your operations.
        </p>
        <button className="home-btn2" onClick={onContactClick}>Get Started</button>
      </div>
      <div className="sectiontext" id="services">
        <h2 className="heading">Related Services</h2>
        <p className="subheading">
          Explore our other optimization solutions that complement supply chain
          optimization
        </p>
      </div>
      <div className="fe-container">
        <div className="fe-up">
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
            <h3 className="fe-heading">Network Optimization</h3>
            <br />
            <p className="fe-subheading">
              Design efficient transportation and distribution networks to
              minimize costs and improve service quality.
            </p>
            <p className="learnmore">
              <a href="" className="learnmorelink">
                Learn More
              </a>
            </p>
          </div>
          <div className="fe-box">
            <h3 className="fe-heading">Resource Allocation</h3>
            <br />
            <p className="fe-subheading">
              Maximize efficiency by optimally allocating resources across
              projects, departments, and time periods.
            </p>
            <p className="learnmore">
              <a href="#" className="learnmorelink">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default SCO;
