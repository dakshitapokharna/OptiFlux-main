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

const Prodplan = ({ onContactClick }) => {
  return (
    <div>
      <div className="sco-up">
        <p className="sco-up-text1">Production Planning Optimization</p>
        <p className="sco-up-text2">
          Transform your manufacturing efficiency with advanced mathematical
          modeling and optimization techniques for production scheduling and
          capacity management.
        </p>
      </div>

      <div className="About" id="about">
        <div className="aboutleft">Production Planning Image</div>
        <div className="aboutright">
          <p className="heading"> Why Production Planning Matters</p>
          <p className="subheadingabout">
            In today's competitive manufacturing environment, optimized
            production planning is essential for maintaining profitability and
            meeting customer demands. OptiFlux's production planning solutions
            help you balance multiple conflicting objectives while satisfying
            complex operational constraints.
          </p>
          <p className="subheadingabout">
            Our mathematical optimization approach empowers your business to
            streamline operations and drive efficiency across the production
            process. By minimizing production costs while ensuring demand
            fulfillment, it helps you achieve cost-effective output without
            compromising service levels. It also reduces changeover times and
            setup costs, enhancing overall productivity.
            <br />
            <br /> Through smart resource utilization and capacity planning,
            workloads can be balanced across production lines, ensuring smoother
            operations. Additionally, the approach aids in managing inventory
            levels efficiently and allows for agile adaptation to shifting
            market conditions, ultimately supporting a more responsive and
            resilient manufacturing strategy.
          </p>
        </div>
      </div>
      <div className="sectiontext" id="industries">
        <div className="industries">
          <h2 className="heading">
            Key Features of Our Production Planning Solutions
          </h2>
          <p className="subheading">
            Leverage advanced mathematical modeling and AI-powered optimization
            to transform your production operations.
          </p> 
          <div className="fe-container2">
            <div className="fe-up">
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="faCalendarAlt">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </i>
                  </div>
                </div>
                <h3 className="fe-heading">Production Scheduling</h3>
                <br />
                <p className="fe-subheading">
                  Create optimal master production schedules that balance demand
                  forecasts, capacity constraints, and inventory targets to
                  minimize costs and maximize service levels.
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
                <h3 className="fe-heading">Detailed Scheduling</h3>
                <br />
                <p className="fe-subheading">
                  Generate detailed production schedules that minimize
                  changeover times, optimize machine utilization, and ensure
                  on-time delivery while accounting for resource constraints.
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
                <h3 className="fe-heading">Lot Sizing Optimization</h3>
                <br />
                <p className="fe-subheading">
                  Determine optimal production lot sizes that balance setup
                  costs, inventory holding costs, and other operational
                  considerations for maximum efficiency.
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
                <h3 className="fe-heading">Material Flow Coordinator</h3>
                <br />
                <p className="fe-subheading">
                  Optimize the timing and quantity of material orders to reduce
                  inventory costs while ensuring materials are available when
                  needed for production.
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
                <h3 className="fe-heading">Capacity Planning</h3>
                <br />
                <p className="fe-subheading">
                  Balance workloads across machines, production lines, and
                  facilities to optimize resource utilization and identify
                  capacity constraints.
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
                <h3 className="fe-heading">Scenario Analysis</h3>
                <br />
                <p className="fe-subheading">
                  Evaluate multiple production scenarios to assess the impact of
                  different demand patterns, resource constraints, and other
                  factors on production performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectiontext" id="industries">
        <div className="industries">
          <h2 className="heading">Business Benefits</h2>
          <p className="subheading">
            Our production planning solutions deliver measurable improvements in
            manufacturing efficiency, cost reduction, and customer satisfaction.
          </p>

          <div className="fe-container2">
            <div className="fe-up">
              <div className="fe-box">
                <div className="col">
                  <div className="icon-box">
                    <i className="faChartLine">
                      <FontAwesomeIcon icon={faChartLine} />
                    </i>
                  </div>
                </div>
                <h3 className="fe-heading">Increased Throughput</h3>
                <br />
                <p className="fe-subheading">
                  Optimize resource utilization and eliminate bottlenecks to
                  increase production capacity by 15-25%.
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
                <h3 className="fe-heading">Reduced Costs</h3>
                <br />
                <p className="fe-subheading">
                  Minimize setup times, inventory costs, and overtime expenses
                  to reduce production costs by 10-20%.
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
                <h3 className="fe-heading">Improved On-Time Delivery</h3>
                <br />
                <p className="fe-subheading">
                  Meet customer deadlines consistently with optimized production
                  schedules, improving on-time delivery rates by up to 30%.
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
                <h3 className="fe-heading">Optimized Inventory</h3>
                <br />
                <p className="fe-subheading">
                  Reduce inventory levels by 15-30% while maintaining or
                  improving service levels and responsiveness.
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
                <h3 className="fe-heading">Enhanced Agility</h3>
                <br />
                <p className="fe-subheading">
                  Respond quickly to changing demand patterns, supply
                  disruptions, and other market conditions.
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
                <h3 className="fe-heading">Reduced Lead Times</h3>
                <br />
                <p className="fe-subheading">
                  Optimize production sequences and lot sizes to reduce
                  manufacturing lead times by 20-40%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectiontext" id="industries">
        <h2 className="heading">Production Planning Success Stories</h2>
        <p className="subheading">
          Real-world examples of how our production planning solutions have
          transformed manufacturing operations.
        </p>
        <div className="fe-container">
          <div className="fe-up">
            <div className="fe-box2-pp">
              <div class="box-image-pp">
                <span>Manufacturing Case Study </span>
              </div>
              <br />
              <h3 className="fe-heading">Automotive Components Manufacturer</h3>
              <br />
              <p className="fe-subheading">
                A leading automotive components manufacturer was struggling with
                high inventory levels, frequent production changeovers, and
                missed delivery dates. Our team implemented an advanced
                production planning optimization solution that considered
                sequence-dependent setup times, capacity constraints, and
                customer priorities.
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
                <span>Pharmaceutical Case Study</span>
              </div>
              <br />
              <h3 className="fe-heading">
                Pharmaceutical Manufacturing Company
              </h3>
              <br />
              <p className="fe-subheading">
                A pharmaceutical company was facing challenges with complex
                production scheduling across multiple facilities, stringent
                quality requirements, and regulatory constraints. We developed a
                comprehensive production planning system that optimized
                production sequences while adhering to all regulatory
                requirements.
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
      <div className="sco-up">
        <p className="sco-up-text1">Transform Your Production Planning</p>
        <p className="sco-up-text2">
          Let our team of optimization experts help you unlock new levels of
          manufacturing efficiency and profitability through advanced production
          planning solutions.
        </p>
        <button className="home-btn2" onClick={onContactClick}>Get Started</button>
      </div>
      <div className="sectiontext" id="services">
        <h2 className="heading">Related Services</h2>
        <p className="subheading">
          Explore our other optimization solutions that complement production
          planning
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
      <br />
    </div>
  );
};
export default Prodplan;
