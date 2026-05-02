// src/components/CompanyCard.js
import React from "react";
import "./CompanyCard.css";

const CompanyCard = ({ name, link }) => {
  return (
    <div
      className="company-card"
      onClick={() => window.open(link, "_blank")}
    >
      <h2>{name}</h2>
      <p>Click to view careers</p>
    </div>
  );
};

export default CompanyCard;
