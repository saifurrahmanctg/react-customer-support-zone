import React from "react";

const Banner = ({ tickets, resolved }) => {
  return (
    <div className="md:flex gap-8 justify-between items-center">
      <div className="progress-card banner-card">
        <h3 className="text-2xl">In-Progress</h3>
        <h2 className="font-semibold text-5xl">{tickets.length}</h2>
      </div>

      {/* Resolved Card */}
      <div className="resolved-card banner-card mt-5 md:mt-0">
        <h3 className="text-2xl">Resolved</h3>
        <h2 className="font-semibold text-5xl">{resolved.length}</h2>
      </div>
    </div>
  );
};

export default Banner;
