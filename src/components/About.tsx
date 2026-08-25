function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <div className="about-grid">

          {/* LEFT CONTENT */}
          <div className="about-content">

            <span className="section-label">
              About ID Technocom
            </span>

            <h2>
              Technology Solutions
              <br />
              Built Around Your
              <br />
              Requirements
            </h2>

            <p className="about-intro">
              ID Technocom is an IT solutions and services company
              helping organizations meet their technology requirements
              with reliable products, practical solutions and responsive
              technical support.
            </p>

            <p>
              Our solutions cover computer and IT product supply,
              infrastructure support, Annual Maintenance Contracts,
              rental IT products, scanning and digitization services,
              electronic waste management and IT products through GeM.
            </p>

            <p>
              With a strong understanding of institutional requirements,
              we focus on providing dependable technology solutions that
              support smooth and efficient day-to-day operations.
            </p>

            <a
              href="#services"
              className="about-button"
            >
              Explore Our Services
              <span>→</span>
            </a>

          </div>

          {/* RIGHT CONTENT */}
          <div className="about-features">

            {/* FEATURE 01 */}
            <div className="about-feature">

              <div className="about-feature-number">
                01
              </div>

              <div className="about-feature-content">
                <h3>
                  Complete IT Solutions
                </h3>

                <p>
                  From computers and servers to printers,
                  peripherals, AMC, rental and digitization,
                  we provide solutions across multiple IT
                  requirements.
                </p>
              </div>

            </div>

            {/* FEATURE 02 */}
            <div className="about-feature">

              <div className="about-feature-number">
                02
              </div>

              <div className="about-feature-content">
                <h3>
                  Requirement-Focused
                </h3>

                <p>
                  We understand the actual requirement first
                  and then recommend suitable products,
                  services and solutions for the organization.
                </p>
              </div>

            </div>

            {/* FEATURE 03 */}
            <div className="about-feature">

              <div className="about-feature-number">
                03
              </div>

              <div className="about-feature-content">
                <h3>
                  Service & Maintenance
                </h3>

                <p>
                  Our technical support and maintenance
                  solutions help organizations keep their
                  IT infrastructure reliable and operational.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About