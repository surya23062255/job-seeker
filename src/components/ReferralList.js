import React from 'react';

function ReferralList({ candidateId, referralList }) {
  return (
    <div className="card mb-3">
      <div className="card-header">Referral List (Candidate ID: {candidateId})</div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Relationship</th>
            </tr> 
          </thead>
          <tbody>
            {referralList.map((referral, index) => (
              <tr key={index}>
                <td>{referral.name}</td>
                <td>{referral.relationship}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReferralList;
