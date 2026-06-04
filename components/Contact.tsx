"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error dynamically when user starts typing
    if (id === "name" || id === "email") {
      setErrors((prev) => ({
        ...prev,
        [id]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowErrorBanner(false);

    if (!validate()) {
      setShowErrorBanner(true);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact">
      <div className="section-wrap">
        <p className="sec-label reveal">Say Hello</p>
        <h2 className="sec-title reveal">Get In Touch</h2>
        <div className="sec-divider reveal" />
        <div className="contact-grid">
          <div className="reveal">
            <h3>Let&apos;s work together.</h3>
            <p>
              I&apos;m open to internships, freelance data analytics projects, and
              full-time opportunities. Whether you have a question or just want
              to say hi — my inbox is always open.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="c-icon">
                  <i className="fas fa-envelope" />
                </div>
                <span className="c-text">
                  <a href="mailto:abhikhomane123@gmail.com">
                    abhikhomane123@gmail.com
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <div className="c-icon">
                  <i className="fas fa-phone" />
                </div>
                <span className="c-text">+91 76662 00956</span>
              </div>
              <div className="contact-item">
                <div className="c-icon">
                  <i className="fab fa-linkedin" />
                </div>
                <span className="c-text">
                  <a
                    href="https://linkedin.com/in/abhijeet-khomane-08a202275"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/abhijeet-khomane
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <div className="c-icon">
                  <i className="fab fa-github" />
                </div>
                <span className="c-text">
                  <a
                    href="https://github.com/Abhikhomane45"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Abhikhomane45
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="contact-form reveal reveal-delay-2">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && (
                    <span className="field-error">{errors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="field-error">{errors.email}</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Hi Abhijeet, I'd like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-send"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" /> Send Message
                  </>
                )}
              </button>
              <div className={`form-success ${showSuccess ? "show" : ""}`}>
                ✅ Thanks! I&apos;ll get back to you shortly.
              </div>
              <div className={`form-error-banner ${showErrorBanner ? "show" : ""}`}>
                ❌ Please correct the errors in the form before sending.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
