// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import "./Contact.scss";
function Contact() {
  // const form = useRef();
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       form.current,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(() => {
  //       setLoading(false);
  //       setSuccess("Message sent successfully!");
  //       form.current.reset();
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //       setSuccess("Failed to send message");
  //     });
  // };

  return (
    <section id="contact_page">
      <div className="my-fluid-container hero">
        <div className="container box">
          <div className="box1">
            <h1 className="Data-200-64-64">Get in touch</h1>
          </div>
          <div className="box2">

            <form ref={form} onSubmit={sendEmail} className="contact-form">

              <div className="form-group">
                <label classname="body-16-24">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label classname="body-16-24">Your Company Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  required
                />
              </div>

              <div className="form-group">
                <label classname="body-16-24">Your Designation</label>
                <input
                  type="text"
                  name="designation"
                  placeholder="Enter your designation"
                  required
                />
              </div>

              <div className="form-group">
                <label classname="body-16-24">Business Problem</label>
                <textarea
                  name="message"
                  placeholder="State your current business problem briefly"
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="elementor-btn">
                "Submit"
                {/* {loading ? "Sending..." : "Submit"} */}
              </button>

              {/* {success && <p className="success-msg">{success}</p>} */}
            </form>

          </div>
        </div>

        

      </div>
      
    </section>
  )
}

export default Contact