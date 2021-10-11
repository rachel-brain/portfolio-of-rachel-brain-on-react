import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import MyWork from './pages/MyWork';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Checking for each of the page options to render whichever one is chosen
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'MyWork') {
        return <MyWork />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing the currentPage & the handlePageChange as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Calling the renderPage method to return a component */}
      {renderPage()}
    </div>
  );
}