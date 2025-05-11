import React from 'react';
import './Testi.css';

const testimonialsData = [
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    quote: "Forpreneurs helped me validate my idea and connect with professionals I couldn’t find anywhere else. It changed the game for me!"
  },
  {
    name: "Ankit Rao",
    role: "Tech Entrepreneur",
    quote: "I loved how they broke down the market fit and gave me a roadmap. The tools are intuitive and the support is top-notch."
  },
  {
    name: "Sneha Patel",
    role: "Solo Founder",
    quote: "As someone without a team, Forpreneurs gave me instant access to experienced people. I felt like I wasn’t building alone anymore."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonial-title">What Founders Are Saying</h2>
      <div className="testimonial-container">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-quote">“{item.quote}”</p>
            <div className="testimonial-author">
              <strong>{item.name}</strong><br />
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
