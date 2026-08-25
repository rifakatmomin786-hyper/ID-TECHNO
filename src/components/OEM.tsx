/* =========================================
   OEM & TECHNOLOGY PARTNERS
========================================= */

import "./OEMStyles.css";

import prodot from "../partners/prodot.jpg";
import lapcare from "../partners/lapcare.jpg";
import adata from "../partners/adata.jpg";
import avision from "../partners/avision.jpg";
import epson from "../partners/epson.jpg";
import brother from "../partners/brother.jpg";
import canon from "../partners/canon.jpg";
import blueStar from "../partners/blue-star.jpg";
import hp from "../partners/hp.jpg";
import dell from "../partners/dell.jpg";

import intel from "../partners/intel.jpg";
import gigabyte from "../partners/gigabyte.jpg";
import lg from "../partners/lg.jpg";
import toshiba from "../partners/toshiba.jpg";
import amaron from "../partners/amaron.jpg";
import concor from "../partners/concor.jpg";
import gem from "../partners/gem.jpg";
import daksaToner from "../partners/daksa-toner.jpg";


/* =========================================
   PARTNERS DATA
========================================= */

const partners = [
  {
    name: "Prodot",
    image: prodot,
  },
  {
    name: "Lapcare",
    image: lapcare,
  },
  {
    name: "ADATA",
    image: adata,
  },
  {
    name: "Avision",
    image: avision,
  },
  {
    name: "Epson",
    image: epson,
  },
  {
    name: "Brother",
    image: brother,
  },
  {
    name: "Canon",
    image: canon,
  },
  {
    name: "Blue Star",
    image: blueStar,
  },
  {
    name: "HP",
    image: hp,
  },
  {
    name: "Dell",
    image: dell,
  },
  {
    name: "Intel",
    image: intel,
  },
  {
    name: "Gigabyte",
    image: gigabyte,
  },
  {
    name: "LG",
    image: lg,
  },
  {
    name: "Toshiba",
    image: toshiba,
  },
  {
    name: "Amaron",
    image: amaron,
  },
  {
    name: "Concor",
    image: concor,
  },
  {
    name: "GeM",
    image: gem,
  },
  {
    name: "Daksa Toner",
    image: daksaToner,
  },
];


/* =========================================
   OEM COMPONENT
========================================= */

const OEM = () => {
  return (
    <section className="oem-section" id="partners">

      <div className="container">

        {/* Section Heading */}
        <div className="oem-heading">

          <span className="oem-label">
            OUR PARTNERS
          </span>

          <h2>
            OEM & Technology Partners
          </h2>

          <p>
            We work with trusted technology brands and OEM partners
            to deliver reliable, genuine and requirement-focused IT
            solutions for businesses and government organizations.
          </p>

        </div>


        {/* Partners Carousel */}
        <div className="oem-carousel">

          <div className="oem-track">

            {[...partners, ...partners].map((partner, index) => (

              <div
                className="oem-card"
                key={`${partner.name}-${index}`}
              >

                <div className="oem-logo-wrapper">

                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="oem-logo"
                  />

                </div>

                <span className="oem-name">
                  {partner.name}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};


export default OEM;