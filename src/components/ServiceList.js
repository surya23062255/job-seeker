import React from 'react';

function ServiceList({ candidateId, candidateServices }) {
  return (
    <div className="card mb-3">
      <div className="card-header">Candidate Services (Candidate ID: {candidateId})</div>
      <div className="card-body">
        <table className="table">
          <thead> 
            <tr>
              <th>Service Name</th>
              <th>Provider</th>
              <th>Course (if applicable)</th>
            </tr>
          </thead>
          <tbody>
            {candidateServices.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.provider}</td>
                <td>{service.course ? service.course : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceList;
