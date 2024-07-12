import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LoginPage from '../components/LoginPage';
import CandidatePage from '../components/CandidatePage';
import FindJob from '../components/FindJob';
import Jobs from '../components/Jobs';

function Home({ setIsLoggedIn, isLoggedIn }) {
  const [showCandidatePage, setShowCandidatePage] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(!isLoggedIn);

  const handleJobsLinkClick = () => {
    setShowCandidatePage(false);
  };

  const handleCandidateLinkClick = () => {
    setShowCandidatePage(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar
            setShowLoginForm={setShowLoginForm}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            onJobsLinkClick={handleJobsLinkClick}
            onCandidateLinkClick={handleCandidateLinkClick}
          />
          {!showCandidatePage && (
            <>
              <FindJob />
              <Jobs />
            </>
          )}
          {showCandidatePage && <CandidatePage />}
        </>
      ) : (
        <LoginPage
          setShowLoginForm={setShowLoginForm}
          setIsLoggedIn={(status) => {
            setIsLoggedIn(status);
            if (status) {
              setShowCandidatePage(false);
            }
          }}
        />
      )}
    </>
  );
}

export default Home;
