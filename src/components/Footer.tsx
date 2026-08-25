import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

function Footer() {
  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }

    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <footer className="site-footer">

      {/* =========================
          FOOTER MAIN
      ========================== */}
      <div className="footer-main">

        <div className="container footer-container">

          {/* BRAND */}
          <div className="footer-column footer-brand">

            <Link to="/" className="footer-logo-link">
              <img
                src={logo}
                alt="ID Technocom"
                className="footer-logo"
              />
            </Link>

            <p className="footer-description">
              ID Technocom provides practical IT products,
              infrastructure solutions and technical support
              for organizations and institutions.
            </p>

            <p className="footer-tagline">
              One Stop IT Solution
            </p>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h3 className="footer-title">
              Quick Links
            </h3>

            <div className="footer-links">

              <Link to="/">
                Home
              </Link>

              <button
                type="button"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('services')}
              >
                Services
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('industries')}
              >
                Industries
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('clients')}
              >
                Clients
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('partners')}
              >
                Partners
              </button>

              <Link to="/contact">
                Contact
              </Link>

            </div>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <h3 className="footer-title">
              Our Services
            </h3>

            <div className="footer-links">

              <Link to="/services/computer-it-hardware">
                Computer & IT Hardware
              </Link>

              <Link to="/services/amc">
                Annual Maintenance
              </Link>

              <Link to="/services/e-waste">
                E-Waste Management
              </Link>

              <Link to="/services/gem">
                IT Products on GeM
              </Link>

              <Link to="/services/rental-it">
                Rental IT Products
              </Link>

              <Link to="/services/scanning-digitization">
                Scanning & Digitization
              </Link>

            </div>

          </div>


          {/* CONTACT */}
          <div className="footer-column">

            <h3 className="footer-title">
              Get In Touch
            </h3>

            <div className="footer-contact">

              <a href="tel:7043385605">
                <span className="footer-contact-icon">
                  ☎
                </span>

                <span>
                  7043385605
                </span>
              </a>


              <a href="tel:7043385263">
                <span className="footer-contact-icon">
                  ☎
                </span>

                <span>
                  7043385263
                </span>
              </a>


              <a href="mailto:idtechnocom@gmail.com">
                <span className="footer-contact-icon">
                  @
                </span>

                <span>
                  idtechnocom@gmail.com
                </span>
              </a>

            </div>


            <a
              href="https://wa.me/917043385605"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              WhatsApp Us
              <span>→</span>
            </a>

          </div>

        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================== */}
      <div className="footer-bottom">

        <div className="container footer-bottom-inner">

          <p>
            © 2026 ID Technocom. All Rights Reserved.
          </p>

          <p>
            IT Solutions & Infrastructure Services
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer