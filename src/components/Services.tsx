import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Computer, Desktop, Laptop, Server & Workstation',
    shortTitle: 'Computer & IT Hardware',
    description:
      'Reliable computers, laptops, servers, workstations and related IT hardware for government, institutional, banking, education and corporate requirements.',
    path: '/services/computer-it-hardware',
  },
  {
    number: '02',
    title: 'Annual Maintenance Contract (AMC)',
    shortTitle: 'Annual Maintenance Contract',
    description:
      'Planned maintenance and technical support for computers, printers, servers, CCTV systems and IT peripherals to help keep your infrastructure operational.',
    path: '/services/amc',
  },
  {
    number: '03',
    title: 'Electronic Waste Management',
    shortTitle: 'Electronic Waste Management',
    description:
      'Responsible management of obsolete, damaged and end-of-life electronic equipment with a structured approach to collection and disposal.',
    path: '/services/e-waste',
  },
  {
    number: '04',
    title: 'IT Products & Accessories on GeM',
    shortTitle: 'IT Products & Accessories on GeM',
    description:
      'IT products and accessories supporting government and institutional procurement requirements through the Government e-Marketplace.',
    path: '/services/gem',
  },
  {
    number: '05',
    title: 'Rental IT Products',
    shortTitle: 'Rental IT Products',
    description:
      'Flexible IT equipment rental solutions for temporary offices, projects, events, training programs and short-term technology requirements.',
    path: '/services/rental-it',
  },
  {
    number: '06',
    title: 'Scanning & Digitization Services',
    shortTitle: 'Scanning & Digitization',
    description:
      'Professional document scanning and digitization solutions for organizations looking to convert physical records into accessible digital information.',
    path: '/services/scanning-digitization',
  },
]

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">

        <div className="section-heading services-heading">
          <span className="section-label">Our Services</span>

          <h2>Complete IT Solutions Under One Roof</h2>

          <p>
            ID Technocom provides practical IT products and services designed
            around the technology, infrastructure and operational requirements
            of organizations.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service) => (
            <Link
              to={service.path}
              className="service-card"
              key={service.number}
            >
              <div className="service-number">
                {service.number}
              </div>

              <div className="service-card-content">

                <span className="service-small-title">
                  {service.shortTitle}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-link">
                  View Full Service
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

export default Services