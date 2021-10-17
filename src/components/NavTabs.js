import React from 'react';

// Extract the data by calling within curly braces {}
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // Ternary operator checking if the Home page is chosen on click of nav-link
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Ternary operator checking if the About page is chosen on click of nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#mywork"
          onClick={() => handlePageChange('MyWork')}
          // Ternary operator checking if the Blog page is chosen on click of nav-link
          className={currentPage === 'MyWork' ? 'nav-link active' : 'nav-link'}
        >
          My Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          // Ternary operator checking if the Blog page is chosen on click of nav-link
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Ternary operator checking if the Contact page is chosen on click of nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Ternary operator checking if the Resume page is chosen on click of nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          My Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;