// src/components/Header.js
import React from 'react';

function Header({ age }) {
  const yearsRemaining = 18 - age;

  return (

    <header style={{ 
      position: 'relative', 
      border: '2px solid blue', 
      backgroundColor: '#e0f7fa', 
      padding: '10px', 
      textAlign: 'center' 
    }}>
      <img 
        src="/logo.jpg" 
        alt="Logo" 
        style={{ 
          width: '100px', 
          position: 'absolute', 
          top: '10px', 
          left: '10px' 
        }} 
      />
      <h1 style={{ marginLeft: '120px' }}>Welcome to Diankana Express Web App!</h1>
      <p>
        {age >= 18 
          ? 'You are eligible to pass the Driving License'
          : (age >= 12 && !isNaN(age))
            ? `Please come back in ${yearsRemaining} year${yearsRemaining > 1 ? 's' : ''}!`
            : 'Please enter a valid age'}
      </p>
      <img src="/logo.jpg" alt="Logo" style={{ width: '100px', position: 'absolute', top: '10px', left: '10px' }} />
    </header>
  );
}

export default Header;


