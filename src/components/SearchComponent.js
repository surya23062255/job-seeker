import React from "react";

function SearchComponent({
  searchId,
  setSearchId,
  searchType,
  setSearchType,
  handleSearch,
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="row my-4 align-items-center">
      <div className="col-lg-6">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="searchType"
            id="searchByReferral"
            value="referral"
            checked={searchType === "referral"}
            onChange={() => setSearchType("referral")}
          />
          <label className="form-check-label" htmlFor="searchByReferral">
            Search by Referral
          </label>
        </div>


        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="searchType"
            id="searchByService"
            value="service"
            checked={searchType === "service"}
            onChange={() => setSearchType("service")}
          />
          <label className="form-check-label" htmlFor="searchByService">
            Search by Service
          </label>
        </div>
      </div>

      <div className="col-lg-6">
        <label className="form-label">{`Search by ${
          searchType === "referral" ? "Referral" : "Service"
        } Name:`}</label>

        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder={`Enter ${
              searchType === "referral" ? "Referral" : "Service"
            } Name and click on search`}
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            onKeyPress={handleKeyPress} // Handle Enter key press
          />
          <button
            className="btn btn-secondary rounded-end-3"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
