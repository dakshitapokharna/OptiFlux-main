import "../../styles/Footer.css";

const Footer = ({ onContactClick }) => {
  return (
    <div className="footer">
      <div className="f-top">
        <div className="f-left">
          <h1 className="f-heading">OptiFlux </h1>
          <br />
          <p className="f-para">
            At OptiFlux, we are passionate about helping <br /> businesses make better
            decisions through <br />
            advanced operations  research and optimization
            techniques.
          </p>
        </div>

        <div className="f-middle">
          <ul>
            <h3 className="f-heading2">Services</h3>
            <li className="f-list">
              <a href="OptiFlux/Supply-Chain-Optimization" className="f-links">
                Supply Chain Optimization
              </a>{" "}
            </li>
            <li className="f-list">
              <a href="OptiFlux/Resource-Allocation" className="f-links">
                Resource Allocation
              </a>{" "}
            </li>
            <li className="f-list">
              <a href="OptiFlux/Production-Planning" className="f-links">
                Production Planning
              </a>
            </li>
            <li className="f-list">
              <a href="OptiFlux/Workforce-Scheduling" className="f-links">
                Workforce Scheduling
              </a>
            </li>
          </ul>
        </div>
        <div className="f-right">
          <ul>
            <h3 className="f-heading2">Industries </h3>
            <li className="f-list">
              <a href="" className="f-links">
                Transportation & Logistics
              </a>
            </li>

            <li className="f-list">
              <a href="" className="f-links">
                Manufacturing
              </a>
            </li>
            <li className="f-list">
              <a href="" className="f-links">
                Healthcare
              </a>
            </li>
            <li className="f-list">
              <a href="" className="f-links">
                Retail
              </a>
            </li>
          </ul>
        </div>
        <div className="f-corner">
          <ul>
            <h3 className="f-heading2">Contact</h3>
            <li className="f-list">
              <a href="" className="f-links">
                16192 Coastal Highway Lewes,
              </a>
            </li>
            <li className="f-list">
              <a href="" className="f-links">
                Delaware 19958 USA
              </a>
            </li>
            <li className="f-list">
              <a href="mailto:admin@optiflux.in" className="f-links">
                Email: admin@optiflux.in
              </a>
            </li>
            <li className="f-list">
              <a href="tel:+15109568399" className="f-links">
                Phone: +1 510 956 8399
              </a>
            </li>
            <li className="f-list">
              <a href="tel:+919932298698" className="f-links">
                Phone: +91 993 229 8698
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="f-bottom">
        <hr />
        <p className="footertext">© 2025 OptiFlux. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
