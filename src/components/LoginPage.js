import React, { useState } from "react";

function LoginPage({ setShowLoginForm, setIsLoggedIn }) {
  const initialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const dummyUsername = "admin@gmail.com";
    const dummyPassword = "admin";

    const { username, password } = formData;

    if (username === dummyUsername && password === dummyPassword) {
      setIsLoggedIn(true);
      setShowLoginForm(false); 
      setFormData(initialFormData);
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setError("");
  };

  return (
    <div className="mt-8 d-flex justify-content-center align-items-center">
      <div className="row w-40">
        <div className="col-md-8 w-100 mw-100">
          <form className="p-5 shadow rounded bg-light" onSubmit={handleLogin}>

          <div className="text-danger fst-italic blink">
            Note : For Login Use this username and password
            <br /> username : "admin@gmail.com"
            <br /> password : "admin"
          </div><br />

            <div className="mb-3">
              <label htmlFor="username" className="form-label fs-5">
                Username
              </label>
              <input
                type="email"
                className="form-control"
                id="username"
                placeholder="Enter Email Id"
                value={formData.username}
                onChange={handleChange}
                aria-describedby="emailHelp"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fs-5">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && (
              <div className="alert alert-danger">{error}</div>
            )}

            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
