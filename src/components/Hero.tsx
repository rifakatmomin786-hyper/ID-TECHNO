import { useEffect, useState } from 'react'
import hero1 from '../assets/Hero-1.jpg'
import hero2 from '../assets/Hero-2.jpg'
import hero3 from '../assets/Hero-3.jpg'
import hero4 from '../assets/Hero-4.jpg'
import hero5 from '../assets/Hero-5.jpg'

const heroSlides = [
  {
    image: hero1,
    alt: 'ID Technocom IT infrastructure solutions',
  },
  {
    image: hero2,
    alt: 'ID Technocom technology solutions',
  },
  {
    image: hero3,
    alt: 'ID Technocom IT services',
  },
  {
    image: hero4,
    alt: 'ID Technocom networking and structured cabling solutions',
  },
  {
    image: hero5,
    alt: 'ID Technocom data center and IT infrastructure solutions',
  },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      )
    }, 5000)

    return () => clearInterval(slider)
  }, [])

  const goToSlide = (index: number) => {
    setActiveSlide(index)
  }

  return (
    <section className="hero" id="home">
      {/* HERO IMAGES */}
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <div
            className={`hero-slide ${
              index === activeSlide ? 'hero-slide-active' : ''
            }`}
            key={slide.image}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="hero-slide-image"
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="hero-overlay" />

      {/* HERO CONTENT */}
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            ONE STOP IT SOLUTION
          </span>

          <h1>
            Practical IT Solutions
            <br />
            Built Around Your
            <br />
            Requirements
          </h1>

          <p className="hero-description">
            Reliable IT products, infrastructure services and
            technical support designed around the operational
            requirements of your organization.
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              className="btn-primary"
            >
              Discuss Your IT Requirement
            </a>

            <a
              href="#services"
              className="btn-secondary"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* SLIDER INDICATORS */}
      <div className="hero-indicators">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={
              index === activeSlide
                ? 'hero-indicator active'
                : 'hero-indicator'
            }
            onClick={() => goToSlide(index)}
            aria-label={`Show hero slide ${index + 1}`}
          />
        ))}
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}

export default Hero