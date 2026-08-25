import { Link, useParams } from 'react-router-dom'
import { services } from '../data/services'

function ServiceDetail() {
  const { serviceId } = useParams()

  const service = services.find(
    (item) => item.id === serviceId
  )

  if (!service) {
    return (
      <main className="service-not-found">
        <div className="container">
          <span className="section-label">
            Service Not Found
          </span>

          <h1>
            The requested service could not be found.
          </h1>

          <Link
            to="/"
            className="btn-primary"
          >
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="service-detail-page">

      {/* DETAIL HERO */}
      <section className="service-detail-hero">
        <div className="container">

          <Link
            to="/#services"
            className="service-back"
          >
            ← Back to Services
          </Link>

          <div className="service-detail-number">
            {service.number}
          </div>

          <span className="section-label">
            ID Technocom Services
          </span>

          <h1>
            {service.title}
          </h1>

          <p>
            {service.description}
          </p>

        </div>
      </section>

      {/* DETAIL CONTENT */}
      <section className="service-detail-content">
        <div className="container">

          <div className="service-detail-grid">

            <div className="service-overview">

              <span className="section-label">
                Service Overview
              </span>

              <h2>
                Practical Solutions Built Around Your Requirement
              </h2>

              <p>
                {service.overview}
              </p>

              <p>
                Our approach is focused on understanding the
                requirement first and then providing a suitable
                solution with dependable service support.
              </p>

            </div>

            <div className="service-points-card">

              <span className="section-label">
                What We Provide
              </span>

              <h3>
                Service Coverage
              </h3>

              <ul>
                {service.points.map((point) => (
                  <li key={point}>
                    <span>✓</span>
                    {point}
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="service-detail-cta">
        <div className="container">

          <div className="service-cta-inner">

            <div>
              <span className="section-label">
                Need This Service?
              </span>

              <h2>
                Let's Discuss Your Requirement
              </h2>

              <p>
                Share your requirement with ID Technocom
                and our team will help identify a suitable
                solution.
              </p>
            </div>

            <div className="service-cta-actions">

              <a
                href="#contact"
                className="btn-primary"
              >
                Send Your Requirement
              </a>

              <a
                href="https://wa.me/917043385605"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default ServiceDetail