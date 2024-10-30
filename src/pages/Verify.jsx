import React, { useState } from "react";
import './Verify.css'; // Import styles for Verify

const Verify = () => {
  const certificateDetails = {
    CIN: "VEH/2024",
    name: "ASHRITHA CHAPPIDI",
    internshipTrack: "Web Development",
    college: "KLU",
    LoR: "Yes",
    startDate: "16/05/2024",
    endDate: "16/06/2024",
    issueDate: "09/08/2024"
  };

  const verified = true; // Automatically set to true for direct verification

  return (
    <div className="verify">
      <h1>Internship Verification</h1>
      {verified && (
        <div className="verification-card success">
          <p><strong>Verification Successful!</strong></p>
          <p><strong>CIN:</strong> {certificateDetails.CIN}</p>
          <p><strong>Name:</strong> {certificateDetails.name}</p>
          <p><strong>Internship Track:</strong> {certificateDetails.internshipTrack}</p>
          <p><strong>College:</strong> {certificateDetails.college}</p>
          <p><strong>LoR:</strong> {certificateDetails.LoR}</p>
          <p><strong>Start Date:</strong> {certificateDetails.startDate}</p>
          <p><strong>End Date:</strong> {certificateDetails.endDate}</p>
          <p><strong>Issue Date:</strong> {certificateDetails.issueDate}</p>
        </div>
      )}
    </div>
  );
};

export default Verify;
