import React from "react";

function Preloader() {
  return (
    <>
      <div>
        <div className="text-center position-absolute bottom-50 end-50">
          <div className="spinner-border fs-1 text-success" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader;
