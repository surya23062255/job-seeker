import React, { useState, useEffect } from "react";
import ReferralList from "./ReferralList";
import ServiceList from "./ServiceList";
import SearchComponent from "./SearchComponent";
import SearchResult from "./SearchResult";
import { candidates } from "../database/data"; // Assuming this is correctly importing candidates from data.js
import Preloader from "./Preloader";

const CandidatePage = () => {
  const [searchId, setSearchId] = useState("");
  const [searchType, setSearchType] = useState("referral");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async data fetching
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate 1 second delay for data fetching
  }, []);

  // Function to handle search
  const handleSearch = () => {
    let result = null;
    if (searchType === "referral") {
      result = candidates.find((candidate) =>
        candidate.referralList.some(
          (referral) => referral.name.toLowerCase() === searchId.toLowerCase()
        )
      );
      console.log(result);
    } else {
      result = candidates.find((candidate) =>
        candidate.serviceList.some(
          (service) => service.name.toLowerCase() === searchId.toLowerCase()
        )
      );
    }
    setSearchResult(result);
  };

  if (loading) {
    return <Preloader/>;
  }

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-danger">
          <u>Candidate Page</u>
        </h2>

        {/* Search Component */}
        <SearchComponent
          searchId={searchId}
          setSearchId={setSearchId}
          searchType={searchType}
          setSearchType={setSearchType}
          handleSearch={handleSearch}
        />

        {/* Render SearchResult if available */}
        {searchResult && <SearchResult searchResult={searchResult} />}

        {/* Render Referral Lists */}
        <div className="row mt-4">
          <div className="col-lg-6">
            {/* Render ReferralList with data */}
            {candidates.map((candidate) => (
              <ReferralList
                key={candidate.id}
                candidateId={candidate.id}
                referralList={candidate.referralList}
              />
            ))}
          </div>

          {/* Render Service List */}
          <div className="col-lg-6">
            {/* Render ServiceList with data */}
            {candidates.map((candidate) => (
              <ServiceList
                key={candidate.id}
                candidateId={candidate.id}
                candidateServices={candidate.serviceList}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidatePage;
