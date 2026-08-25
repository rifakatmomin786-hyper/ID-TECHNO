import { Link } from 'react-router-dom'

import governmentImage from './government.jpg'
import bankingImage from './banking.jpg'
import educationImage from './education.jpg'
import corporateImage from './corporate.jpg'
const industries = [
  {
    number: '01',
    title: 'Government Sector',
    image: governmentImage,
    description:
      'Practical IT infrastructure, hardware, maintenance, procurement and digitization solutions for government departments and public-sector organizations.',
    path: '/industries/government',
  },
  {
    number: '02',
    title: 'Banking Sector',
    image: bankingImage,
    description:
      'Reliable IT hardware, maintenance and infrastructure support designed around the operational requirements of banking organizations.',
    path: '/industries/banking',
  },
  {
    number: '03',
    title: 'Education Sector',
    image: educationImage,
    description:
      'Technology solutions for educational institutions including computer infrastructure, peripherals, maintenance and digitization requirements.',
    path: '/industries/education',
  },
  {
    number: '04',
    title: 'Corporate Sector',
    image: corporateImage,
    description:
      'Scalable IT hardware, support and technology solutions for corporate offices and business environments.',
    path: '/industries/corporate',
  },
]

function Industries() {
  return (
    <section id="industries" className="industries-section">
      <div className="container">

        <div className="section-heading industries-heading">

          <span className="section-label">
            Industries We Serve
          </span>

          <h2>
            Technology Solutions
            <br />
            Across Different Sectors
          </h2>

          <p>
            ID Technocom works with organizations across multiple sectors,
            providing practical IT products, infrastructure support and
            technology services based on their operational requirements.
          </p>

        </div>

        <div className="industries-grid">

          {industries.map((industry) => (
            <Link
              to={industry.path}
              className="industry-card"
              key={industry.number}
            >

              <div className="industry-image-wrapper">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="industry-image"
                />
              </div>

              <div className="industry-card-body">

                <div className="industry-card-top">

                  <span className="industry-number">
                    {industry.number}
                  </span>

                  <span className="industry-arrow">
                    →
                  </span>

                </div>

                <h3>
                  {industry.title}
                </h3>

                <p>
                  {industry.description}
                </p>

                <span className="industry-link">
                  Explore Industry
                  <span>→</span>
                </span>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Industries