import React from 'react';
import './Features.css';

const FeatureSection = () => {
  return (
    <section className="feature-sectionaa" id="feature">
      <div className="feature-heading">
        <h1>What Eterna Does</h1>
      </div>
      <div className="feature-container">
        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
            alt="Eterna Preview"
          />
        </div>
        <div className="feature-contentaa">
          <h2>Turn Your Startup Dream into Reality</h2>
          <p>
            Eterna helps solo founders validate ideas, find team members, and launch products with confidence — no tech skills required.
          </p>
          <ul>
            <li>✅ Idea validation with real feedback</li>
            <li>✅ Access to pre-vetted professionals</li>
            <li>✅ Built-in tools for smart launching</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
