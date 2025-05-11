import React from 'react';
import './Features1.css'; // Same CSS file used earlier

const FeatureSectionLeftContentRightImage = () => {
  return (
    <section className="feature-section">
      {/* New heading */}
      <div className="feature-heading">
        <h1>What it can do </h1>
      </div>

      <div className="feature-container">
        <div className="feature-content">
          <h2>Launch Smarter, Not Harder</h2>
          <p>
            With Eterna, you test your product before launch, analyze real feedback, and adjust your strategy without wasting time or money.
          </p>
          <ul>
            <li>📊 Run early market tests</li>
            <li>🧠 Get insight-driven suggestions</li>
            <li>⚡ Launch with confidence</li>
          </ul>
        </div>
        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt="Smart Launch"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionLeftContentRightImage;
