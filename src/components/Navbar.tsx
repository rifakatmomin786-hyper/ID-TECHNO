import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigate = useNavigate()

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* =========================================================
     CLEAR CLOSE TIMER
  ========================================================= */

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  /* =========================================================
     CLOSE DROPDOWN WITH SMALL DELAY
  ========================================================= */

  const closeDropdownWithDelay = () => {
    if (window.innerWidth <= 900) return

    clearCloseTimer()

    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 180)
  }

  /* =========================================================
     OPEN DROPDOWN
  ========================================================= */

  const openDropdown = (menu: string) => {
    if (window.innerWidth <= 900) return

    clearCloseTimer()
    setActiveDropdown(menu)
  }

  /* =========================================================
     CLOSE EVERYTHING
  ========================================================= */

  const closeMenu = () => {
    clearCloseTimer()
    setMenuOpen(false)
    setActiveDropdown(null)
  }

  /* =========================================================
     TOGGLE DROPDOWN
  ========================================================= */

  const toggleDropdown = (menu: string) => {
    clearCloseTimer()

    setActiveDropdown((current) =>
      current === menu ? null : menu
    )
  }

  /* =========================================================
     HOME
  ========================================================= */

  const goHome = () => {
    closeMenu()
    navigate('/')

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 50)
  }

  /* =========================================================
     HOME SECTION
  ========================================================= */

  const goToHomeSection = (section: string) => {
    closeMenu()

    const scrollToSection = () => {
      const element = document.getElementById(section)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    if (window.location.pathname !== '/') {
      navigate('/')

      setTimeout(() => {
        scrollToSection()
      }, 400)
    } else {
      setTimeout(() => {
        scrollToSection()
      }, 50)
    }
  }

  return (
    <header className="site-header">
      <div className="nav-container">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          className="brand"
          onClick={goHome}
          aria-label="ID Technocom Home"
        >
          <img
            src={logo}
            alt="ID Technocom"
            className="brand-logo"
          />
        </Link>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >

          {/* ===================================================
              HOME
          ==================================================== */}

          <Link
            to="/"
            className="nav-link"
            onClick={goHome}
          >
            Home
          </Link>

          {/* ===================================================
              ABOUT
          ==================================================== */}

          <div
            className={`nav-dropdown ${
              activeDropdown === 'about'
                ? 'dropdown-active'
                : ''
            }`}
            onMouseEnter={() => openDropdown('about')}
            onMouseLeave={closeDropdownWithDelay}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('about')}
              aria-expanded={activeDropdown === 'about'}
            >
              <span>About</span>
              <span className="dropdown-arrow">⌄</span>
            </button>

            {activeDropdown === 'about' && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => openDropdown('about')}
                onMouseLeave={closeDropdownWithDelay}
              >
                <button
                  type="button"
                  onClick={() => goToHomeSection('about')}
                >
                  About ID Technocom
                </button>

                <button
                  type="button"
                  onClick={() => goToHomeSection('about')}
                >
                  Our Approach
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToHomeSection('why-choose-us')
                  }
                >
                  Why Choose Us
                </button>
              </div>
            )}
          </div>

          {/* ===================================================
              SERVICES
          ==================================================== */}

          <div
            className={`nav-dropdown mega-dropdown ${
              activeDropdown === 'services'
                ? 'dropdown-active'
                : ''
            }`}
            onMouseEnter={() => openDropdown('services')}
            onMouseLeave={closeDropdownWithDelay}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('services')}
              aria-expanded={activeDropdown === 'services'}
            >
              <span>Services</span>
              <span className="dropdown-arrow">⌄</span>
            </button>

            {activeDropdown === 'services' && (
              <div
                className="mega-menu"
                onMouseEnter={() => openDropdown('services')}
                onMouseLeave={closeDropdownWithDelay}
              >
                <div className="mega-menu-inner">

                  <div className="mega-menu-intro">
                    <span className="mega-menu-label">
                      OUR SERVICES
                    </span>

                    <h3>
                      Practical IT
                      <br />
                      Solutions
                    </h3>

                    <p>
                      IT products and technology
                      services designed around
                      your requirements.
                    </p>

                    <button
                      type="button"
                      className="mega-view-all"
                      onClick={() =>
                        goToHomeSection('services')
                      }
                    >
                      View All Services
                      <span>→</span>
                    </button>
                  </div>

                  <div className="mega-menu-grid">

                    <Link
                      to="/services/computer-it-hardware"
                      onClick={closeMenu}
                    >
                      <span className="mega-item-number">01</span>

                      <div>
                        <strong>
                          Computer, Desktop & Laptop
                        </strong>

                        <small>
                          Sales & Services
                        </small>
                      </div>

                      <span className="mega-item-arrow">→</span>
                    </Link>

                    <Link
                      to="/services/amc"
                      onClick={closeMenu}
                    >
                      <span className="mega-item-number">02</span>

                      <div>
                        <strong>
                          Annual Maintenance
                        </strong>

                        <small>
                          Computer, Printer, Server & CCTV AMC
                        </small>
                      </div>

                      <span className="mega-item-arrow">→</span>
                    </Link>

                    <Link
                      to="/services/e-waste"
                      onClick={closeMenu}
                    >
                      <span className="mega-item-number">03</span>

                      <div>
                        <strong>
                          E-Waste Management
                        </strong>

                        <small>
                          Responsible electronic waste solutions
                        </small>
                      </div>

                      <span className="mega-item-arrow">→</span>
                    </Link>

                    <Link
                      to="/services/gem"
                      onClick={closeMenu}
                    >
                      <span className="mega-item-number">04</span>

                      <div>
                        <strong>
                          IT Products on GeM
                        </strong>

                        <small>
                          Products & accessories through GeM
                        </small>
                      </div>

                      <span className="mega-item-arrow">→</span>
                    </Link>

                    <Link
                      to="/services/rental-it"
                      onClick={closeMenu}
                    >
                      <span className="mega-item-number">05</span>

                      <div>
                        <strong>
                          Rental IT Products
                        </strong>

                        <small>
                          Flexible IT equipment rental
                        </small>
                      </div>

                      <span className="mega-item-arrow">→</span>
                    </Link>

                    <Link
                      to="/services/scanning-digitization"
                      onClick={closeMenu}
                    >
                      <span className="mega-item-number">06</span>

                      <div>
                        <strong>
                          Scanning & Digitization
                        </strong>

                        <small>
                          Document scanning and digital conversion
                        </small>
                      </div>

                      <span className="mega-item-arrow">→</span>
                    </Link>

                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ===================================================
              INDUSTRIES
          ==================================================== */}

          <div
            className={`nav-dropdown ${
              activeDropdown === 'industries'
                ? 'dropdown-active'
                : ''
            }`}
            onMouseEnter={() => openDropdown('industries')}
            onMouseLeave={closeDropdownWithDelay}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('industries')}
              aria-expanded={activeDropdown === 'industries'}
            >
              <span>Industries</span>
              <span className="dropdown-arrow">⌄</span>
            </button>

            {activeDropdown === 'industries' && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => openDropdown('industries')}
                onMouseLeave={closeDropdownWithDelay}
              >
                <Link
                  to="/industries/government"
                  onClick={closeMenu}
                >
                  <span>Government</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/industries/banking"
                  onClick={closeMenu}
                >
                  <span>Banking</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/industries/education"
                  onClick={closeMenu}
                >
                  <span>Education</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/industries/corporate"
                  onClick={closeMenu}
                >
                  <span>Corporate</span>
                  <span>→</span>
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    goToHomeSection('industries')
                  }
                >
                  <span>View All Industries</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </div>

          {/* ===================================================
              CLIENTS
          ==================================================== */}

          <div
            className={`nav-dropdown ${
              activeDropdown === 'clients'
                ? 'dropdown-active'
                : ''
            }`}
            onMouseEnter={() => openDropdown('clients')}
            onMouseLeave={closeDropdownWithDelay}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('clients')}
              aria-expanded={activeDropdown === 'clients'}
            >
              <span>Clients</span>
              <span className="dropdown-arrow">⌄</span>
            </button>

            {activeDropdown === 'clients' && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => openDropdown('clients')}
                onMouseLeave={closeDropdownWithDelay}
              >
                <Link
                  to="/clients/indian-post"
                  onClick={closeMenu}
                >
                  <span>Indian Post</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/clients/indian-railways"
                  onClick={closeMenu}
                >
                  <span>Indian Railways</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/clients/esic"
                  onClick={closeMenu}
                >
                  <span>ESIC</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/clients/state-government"
                  onClick={closeMenu}
                >
                  <span>State Government</span>
                  <span>→</span>
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    goToHomeSection('clients')
                  }
                >
                  <span>View All Clients</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </div>

          {/* ===================================================
              PARTNERS
          ==================================================== */}

          <div
            className={`nav-dropdown ${
              activeDropdown === 'partners'
                ? 'dropdown-active'
                : ''
            }`}
            onMouseEnter={() => openDropdown('partners')}
            onMouseLeave={closeDropdownWithDelay}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('partners')}
              aria-expanded={activeDropdown === 'partners'}
            >
              <span>Partners</span>
              <span className="dropdown-arrow">⌄</span>
            </button>

            {activeDropdown === 'partners' && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => openDropdown('partners')}
                onMouseLeave={closeDropdownWithDelay}
              >
                <button
                  type="button"
                  onClick={() =>
                    goToHomeSection('partners')
                  }
                >
                  <span>OEM & Technology Partners</span>
                  <span>→</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToHomeSection('partners')
                  }
                >
                  <span>Our Technology Brands</span>
                  <span>→</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToHomeSection('partners')
                  }
                >
                  <span>View All Partners</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </div>

          {/* ===================================================
              CONTACT
          ==================================================== */}

          <button
            type="button"
            className="nav-link-button"
            onClick={() => goToHomeSection('contact')}
          >
            Contact
          </button>

          {/* ===================================================
              GET IN TOUCH
          ==================================================== */}

          <button
            type="button"
            className="nav-cta"
            onClick={() => goToHomeSection('contact')}
          >
            Get In Touch
          </button>

        </nav>

        {/* =====================================================
            MOBILE BUTTON
        ===================================================== */}

        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? 'active' : ''
          }`}
          onClick={() => {
            clearCloseTimer()
            setMenuOpen((current) => !current)
            setActiveDropdown(null)
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  )
}

export default Navbar