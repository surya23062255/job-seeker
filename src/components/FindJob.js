import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function FindJob() {

    const [jobName, setJobName] = useState("")

    function inputOnchange(e){
        setJobName(e.target.value);
    }

    function handleSearch(e) {
        console.log("Click Working")
    }

  return (
    <div className="container mt-10">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form className="d-flex gap-4 align-items-center">
            <span className="mr-2 fw-bold fs-5" style={{ width: 110 }}>
              Find Jobs
            </span>

            <input
              type="text"
              className="form-control p-2 px-4 rounded-5 w-100 mr-2"
              id="inputPassword2"
              placeholder="Search by Company Name or Industry"
              value={jobName}
              onChange={inputOnchange}
            />

            <button type="button" onClick={handleSearch} className="btn fs-5 rounded-circle btn-primary">
              <FaSearch />
            </button> 
          </form>
        </div>
      </div>
    </div>
  );
}

export default FindJob;
