import React from "react";
import { Link } from "react-router-dom";

function Navbar({
  setShowLoginForm,
  isLoggedIn,
  setIsLoggedIn,
  onJobsLinkClick,
  onCandidateLinkClick,
}) {
  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false to hide all components
  };

  return (
    <nav className="navbar p-2 bg-info">
      <div className="container-fluid mx-200">
        <Link to={"/"} className="navbar-brand fw-bold fs-2">
          Worko
        </Link>

        {isLoggedIn && (
          <ul className="nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link me-4 fw-bold"
                aria-current="page"
                onClick={onJobsLinkClick}
              >
                Jobs
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link me-4 fw-bold"
                aria-current="page"
                onClick={onCandidateLinkClick}
              >
                Candidate Page
              </Link>
            </li>
          </ul>
        )}

        {isLoggedIn ? (
          <button
            className="btn btn-danger ms-2"
            type="button"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        ) : (
          <button
            className="btn btn-danger ms-2"
            type="button"
            onClick={handleLoginClick}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
