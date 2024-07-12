import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";

function Jobs() {
  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    const url = "https://jobs-api19.p.rapidapi.com/jobs?limit=10";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "adbdeb3b45msh98eacf2550888a7p1a93c7jsna8e5de106dfe",
        "x-rapidapi-host": "jobs-api19.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setJobAds(data);
        } else {
          throw new Error("Data is not in expected format");
        }
      })
      .catch((error) => console.error("Error fetching job ads:", error));
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-success mb-4"><u>Jobs for You</u></h2>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {jobAds.length === 0 ? (
            <Preloader />
          ) : (
            jobAds.map((ad) => (
              <div key={ad.id} className="col">
                <div className="card p-3 h-100">
                  <div className="card-body">
                    <h5 className="card-title fs-4 text-danger mb-3">
                      {ad.job_title}
                    </h5>
                    <h6 className="card-subtitle text-primary mb-2 fs-6">
                      Company : {ad.company}
                    </h6>
                    <h6 className="card-subtitle mb-2 fs-6">
                      Job Location : {ad.location}
                    </h6>
                    <div className="my-4">
                      <span
                        style={{ backgroundColor: "#c4d0db" }}
                        className="py-2 px-3 m-2 rounded-pill"
                      >
                        {ad.experience}
                      </span>
                      <span
                        style={{ backgroundColor: "#c4d0db" }}
                        className="py-2 px-3 m-2 rounded-pill"
                      >
                        {" "}
                        {ad.job_type}{" "}
                      </span>
                    </div>
                    <p className="card-text text-justify fst-italic">
                      {ad.job_description}
                    </p>
                    <a
                      href={ad.apply_link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>

            ))
          )}
        </div>
      </div>

      <div className="mt-5"></div>
    </>
  );
}

export default Jobs;
