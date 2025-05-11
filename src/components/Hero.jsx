import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src="/IMG_2029.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken video */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // 0.7 = 70% transparent black
          zIndex: -1,
        }}
      />

      {/* Content */}
      <div className="hero-content" style={{ zIndex: 1, color: 'white' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'normal' }}>
          Eterna <span style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '0 10px',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>AI</span>
        </h1>
        <p style={{ fontSize: '1.4rem', marginTop: '10px' }}>
          Preserve Your Essence. Forever.
        </p>
        <button
          onClick={() => navigate('/footer')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ccc'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
