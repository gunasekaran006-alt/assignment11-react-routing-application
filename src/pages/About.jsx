import React from 'react';

const About = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      
      {/* 1. Page Heading */}
      <h1>About Us</h1>

      {/* 2. Images or icons */}
      <img 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" 
        alt="Team Collaboration" 
        style={{ borderRadius: '8px', marginBottom: '20px', width: '100%', maxHeight: '350px', objectFit: 'cover' }}
      />

      {/* 3. About content (3-4 paragraphs) */}
      <div style={{ textAlign: 'justify', lineHeight: '1.6', fontSize: '16px' }}>
        <p>
          Welcome to our React Routing Application! This website is built as part of Assignment 11 to demonstrate the powerful capabilities of React Router DOM in creating seamless single-page applications.
        </p>
        <p>
          We are a fictional team of passionate Full Stack Developers dedicated to mastering modern web technologies. Our primary focus is on building user-friendly, responsive, and highly interactive web interfaces using React.
        </p>
        <p>
          This application showcases various routing techniques, including standard navigation, nested routes, dynamic routing with URL parameters, and programmatic navigation. It also implements active link highlighting and robust error handling with a custom 404 page.
        </p>
      </div>

      {/* 4. Contact/social links */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> contact@example.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p>
          <strong>Social Links:</strong>{' '}
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>GitHub</a>
          {' | '}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>LinkedIn</a>
        </p>
      </div>
      
    </div>
  );
};

export default About;