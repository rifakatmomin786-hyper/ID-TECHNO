import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Industries from '../components/Industries/Industries'
import OEM from '../components/OEM'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'

import { Link } from 'react-router-dom'

import indianPost from './clients/indian-post.jpg'
import indianRailway from './clients/indian-railway.jpg'
import esic from './clients/esic.jpg'
import stateGovernment from './clients/state-government.jpg'

function Home() {
  return (
    <main>

      {/* =========================
          HERO
      ========================== */}
      <Hero />

      {/* =========================
          ABOUT
      ========================== */}
      <About />

      {/* =========================
          SERVICES
      ========================== */}
      <Services />

      {/* =========================
          INDUSTRIES
      ========================== */}
      <Industries />

      {/* =========================
          OEM & TECHNOLOGY PARTNERS
      ========================== */}
      <OEM />

      {/* =========================
          CLIENTS
      ========================== */}
      <section
        id="clients"
        className="clients-section"
      >

        <div className="container">

          {/* Section Heading */}
          <div className="section-heading">

            <span className="section-label">
              OUR CLIENTS
            </span>

            <h2>
              Trusted Organizations
              <br />
              We Support
            </h2>

            <p>
              We support government departments, public-sector organizations
              and institutional clients with practical IT products,
              infrastructure and technology services.
            </p>

          </div>

          {/* Client Cards */}
          <div className="clients-grid">

            {/* Indian Post */}
            <Link
              to="/clients/indian-post"
              className="client-card"
            >

              <div className="client-image-wrapper">

                <img
                  src={indianPost}
                  alt="Indian Post"
                  className="client-image"
                />

              </div>

              <div className="client-card-content">

                <span className="client-card-label">
                  CLIENT 01
                </span>

                <h3>
                  Indian Post
                </h3>

                <p>
                  IT products, infrastructure and technology support
                  for postal operations and offices.
                </p>

                <span className="client-card-link">
                  View Details
                  <span>→</span>
                </span>

              </div>

            </Link>

            {/* Indian Railways */}
            <Link
              to="/clients/indian-railways"
              className="client-card"
            >

              <div className="client-image-wrapper">

                <img
                  src={indianRailway}
                  alt="Indian Railways"
                  className="client-image"
                />

              </div>

              <div className="client-card-content">

                <span className="client-card-label">
                  CLIENT 02
                </span>

                <h3>
                  Indian Railways
                </h3>

                <p>
                  Technology solutions supporting railway offices,
                  departments and operational environments.
                </p>

                <span className="client-card-link">
                  View Details
                  <span>→</span>
                </span>

              </div>

            </Link>

            {/* ESIC */}
            <Link
              to="/clients/esic"
              className="client-card"
            >

              <div className="client-image-wrapper">

                <img
                  src={esic}
                  alt="ESIC"
                  className="client-image"
                />

              </div>

              <div className="client-card-content">

                <span className="client-card-label">
                  CLIENT 03
                </span>

                <h3>
                  ESIC
                </h3>

                <p>
                  IT infrastructure and technology support for
                  healthcare and administrative operations.
                </p>

                <span className="client-card-link">
                  View Details
                  <span>→</span>
                </span>

              </div>

            </Link>

            {/* State Government */}
            <Link
              to="/clients/state-government"
              className="client-card"
            >

              <div className="client-image-wrapper">

                <img
                  src={stateGovernment}
                  alt="State Government Departments"
                  className="client-image"
                />

              </div>

              <div className="client-card-content">

                <span className="client-card-label">
                  CLIENT 04
                </span>

                <h3>
                  State Government
                </h3>

                <p>
                  IT products, infrastructure and technology support
                  for government departments and offices.
                </p>

                <span className="client-card-link">
                  View Details
                  <span>→</span>
                </span>

              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* =========================
          WHY CHOOSE US
      ========================== */}
      <WhyChooseUs />

      {/* =========================
          CONTACT
          KEEP THIS ONE
      ========================== */}
      <Contact />

    </main>
  )
}

export default Home