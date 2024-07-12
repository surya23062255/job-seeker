import React from 'react';

const SearchResult = ({ searchResult }) => {
  if (!searchResult) {
    return null;
  }

  return (
    <div className="m-4">
      <h3>Search Result:</h3>
      <div className="text-center">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-warning">
              <tr>
                <th>ID</th>
                <th>{searchResult.id}</th> 
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{searchResult.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{searchResult.email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{searchResult.phone}</td>
              </tr>
              <tr>
                <th>Referral List</th>
                <td>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Relationship</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchResult.referralList.map((referral, index) => (
                        <tr key={index}>
                          <td>{referral.name}</td>
                          <td>{referral.relationship}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <th>Service List</th>
                <td>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Service Name</th>
                        <th>Provider</th>
                        <th>Course (if applicable)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchResult.serviceList.map((service, index) => (
                        <tr key={index}>
                          <td>{service.name}</td>
                          <td>{service.provider}</td>
                          <td>{service.course ? service.course : '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
