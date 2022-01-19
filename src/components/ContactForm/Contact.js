import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_lcufqfwTCpILtUaUtiswB");

const Contact = () => {
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "user_lcufqfwTCpILtUaUtiswB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormState({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-page">
        <div className="contact-page-style">
          <h1>Contact Me</h1>
          <ul className="contact-list">
            <li>
              <strong>Call Me: </strong>
              <a href="tel:816-678-1651">
                <span>(816) 678-1651</span>
              </a>
            </li>
            <li>
              <strong>Check out my GitHub: </strong>
              <a href="https://github.com/PamtheHam">
                <span>https://github.com/PamtheHam</span>
              </a>
            </li>
            <li>
              <strong>Connect with me on LinkedIn: </strong>
              <a href="https://www.linkedin.com/in/pamelahammond94/">
                <span>https://www.linkedin.com/in/pamelahammond94</span>
              </a>
            </li>
            <li>
              <strong> Email Me: </strong>
              <a href="mailto:hammondpamelac@gmail.com">
                <span>Hammondpamelac@gmail.com</span>
              </a>
            </li>
            <br />
            <li>Or fill out this form and I will get back to you!</li>
          </ul>
          <div>
            <div>
              <div id="contact">
                <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <p className="contact-title">Contact Me</p>
                    <label className="label-color">Name</label>
                    <textarea
                      type="text"
                      value={formState.user_name}
                      name="user_name"
                      onChange={handleChange}
                      required
                    />
                    <label className="label-color">Email</label>
                    <textarea
                      type="email"
                      value={formState.user_email}
                      name="user_email"
                      onChange={handleChange}
                      required
                    />
                    <label className="label-color">Message</label>
                    <textarea
                      value={formState.message}
                      name="message"
                      onChange={handleChange}
                      required
                    />
                    <div className="button-div">
                      <button
                        className="contact-button"
                        type="submit"
                        value="Send"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
