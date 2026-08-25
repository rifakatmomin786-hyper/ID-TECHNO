/* =========================================
   CONTACT SECTION
========================================= */

import "./Contact.css";

const Contact = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    const name = formData.get("name")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const requirement = formData.get("requirement")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const whatsappMessage = `
Hello ID Technocom,

I would like to discuss an IT requirement.

Name: ${name}
Company: ${company}
Phone: ${phone}
Email: ${email}
Requirement: ${requirement}

Message:
${message}
    `;

    const whatsappUrl = `https://wa.me/917043385605?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    form.reset();
  };

  return (
    <section className="contact-section" id="contact">

      <div className="container">

        {/* Heading */}
        <div className="contact-heading">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Discuss Your IT Requirement
          </h2>

          <p>
            Tell us what you need and our team will help you find a
            practical and reliable IT solution tailored to your
            requirements.
          </p>

        </div>


        {/* Contact Layout */}
        <div className="contact-wrapper">


          {/* =========================================
              LEFT SIDE
          ========================================= */}

          <div className="contact-info">

            <h3>
              Talk to Our Team
            </h3>

            <p>
              Whether you need IT products, infrastructure support,
              AMC, rental equipment, digitization services or other
              technology solutions, we are ready to assist.
            </p>


            {/* Phone */}
            <a
              href="tel:+917043385605"
              className="contact-item"
            >

              <div className="contact-icon">
                ☎
              </div>

              <div>
                <span>
                  Call Us
                </span>

                <strong>
                  7043385605
                </strong>
              </div>

            </a>


            {/* Second Phone */}
            <a
              href="tel:+917043385263"
              className="contact-item"
            >

              <div className="contact-icon">
                ☎
              </div>

              <div>
                <span>
                  Alternate Number
                </span>

                <strong>
                  7043385263
                </strong>
              </div>

            </a>


            {/* Email */}
            <a
              href="mailto:idtechnocom@gmail.com"
              className="contact-item"
            >

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <span>
                  Email Us
                </span>

                <strong>
                  idtechnocom@gmail.com
                </strong>
              </div>

            </a>


            {/* Address */}
            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <span>
                  Office
                </span>

                <strong>
                  194/1, Sector-6/B,
                  <br />
                  Gandhinagar - 382006
                </strong>
              </div>

            </div>


            {/* WhatsApp */}
            <a
              href="https://wa.me/917043385605"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
            >

              <span className="whatsapp-icon">
                ◉
              </span>

              Chat with us on WhatsApp

            </a>

          </div>


          {/* =========================================
              RIGHT SIDE - FORM
          ========================================= */}

          <div className="contact-form-card">

            <h3>
              Send Your Requirement
            </h3>

            <p>
              Fill in your details and we'll get back to you.
            </p>


            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="company">
                    Company / Organization
                  </label>

                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter company name"
                  />

                </div>

              </div>


              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                  />

                </div>

              </div>


              <div className="form-group">

                <label htmlFor="requirement">
                  IT Requirement
                </label>

                <select
                  id="requirement"
                  name="requirement"
                  required
                  defaultValue=""
                >

                  <option value="" disabled>
                    Select your requirement
                  </option>

                  <option value="Computer / Laptop / Server">
                    Computer / Laptop / Server
                  </option>

                  <option value="AMC Services">
                    AMC Services
                  </option>

                  <option value="E-Waste Management">
                    E-Waste Management
                  </option>

                  <option value="IT Products & Accessories on GeM">
                    IT Products & Accessories on GeM
                  </option>

                  <option value="Rental IT Products">
                    Rental IT Products
                  </option>

                  <option value="Scanning & Digitization">
                    Scanning & Digitization
                  </option>

                  <option value="Other IT Requirement">
                    Other IT Requirement
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your requirement..."
                />

              </div>


              <button
                type="submit"
                className="contact-submit"
              >
                Send Requirement on WhatsApp
                <span>
                  →
                </span>
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;