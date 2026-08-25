/* =========================================
   WHY CHOOSE US
========================================= */

import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    title: "Trusted IT Expertise",
    text: "Practical IT solutions backed by experience in computer systems, servers, peripherals, networking and enterprise IT requirements.",
  },
  {
    number: "02",
    title: "Complete IT Solutions",
    text: "From IT products and infrastructure to AMC, rentals, digitization and e-waste management, we provide solutions under one roof.",
  },
  {
    number: "03",
    title: "Genuine & Quality Products",
    text: "We work with established technology brands and OEM partners to help our clients receive reliable and quality IT products.",
  },
  {
    number: "04",
    title: "Government & Enterprise Experience",
    text: "Our approach is designed to support the structured requirements of government departments, institutions and corporate organizations.",
  },
  {
    number: "05",
    title: "Responsive Support",
    text: "We focus on timely communication, dependable service and practical support to keep your IT environment running smoothly.",
  },
  {
    number: "06",
    title: "Requirement-Focused Approach",
    text: "We understand your actual requirement first and recommend solutions that are practical, scalable and aligned with your budget.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section" id="why-choose-us">

      <div className="container">

        {/* Section Heading */}
        <div className="why-heading">

          <span className="why-label">
            WHY ID TECHNOCOM
          </span>

          <h2>
            Why Choose Us
          </h2>

          <p>
            We combine practical IT expertise, quality products and
            responsive support to deliver dependable technology solutions
            built around your requirements.
          </p>

        </div>


        {/* Reasons Grid */}
        <div className="why-grid">

          {reasons.map((reason) => (

            <div
              className="why-card"
              key={reason.number}
            >

              <div className="why-card-top">

                <span className="why-number">
                  {reason.number}
                </span>

                <div className="why-icon">
                  ✓
                </div>

              </div>

              <h3>
                {reason.title}
              </h3>

              <p>
                {reason.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;