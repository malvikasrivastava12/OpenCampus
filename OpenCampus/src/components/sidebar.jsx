import React from "react";
import "../style/SideBar.css"; // We'll define the CSS here
import DAOGovernance from "../assets/DAOGovern.png";
import SubmissionProcess from "../assets/SubmissionProcess.png";
import DAOtermenology from "../assets/DAOtermenology.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* DAO Governance Section */}
      <div className="section">
        <div className="section-title">
          <img src={DAOGovernance} alt="DAO Governance Icon" className="icon" />
          <span className="heading">DAO Governance</span>
        </div>
        <ul className="section-links">
          <li>
            <a href="#">Overview</a>
          </li>
        </ul>
      </div>

      {/* Submission Process Section */}
      <div className="section">
        <div className="section-title">
          <img
            src={SubmissionProcess}
            alt="Submission Process Icon"
            className="icon"
          />
          <span className="heading">Submission process</span>
        </div>
        <ul className="section-links">
          <li>
            <a href="#">Proposal Structure</a>
          </li>
          <li>
            <a href="#">How to deal with proposal conflicts?</a>
          </li>
          <li>
            <a href="#">Who can submit a Proposal?</a>
          </li>
          <li>
            <a href="#">How does a proposal get approved?</a>
          </li>
          <li>
            <a href="#">What is the voting process?</a>
          </li>
        </ul>
      </div>

      {/* Open Campus DAO Terminology Section */}
      <div className="section">
        <div className="section-title">
          <img
            src={DAOtermenology}
            alt="Open Campus Terminology Icon"
            className="icon"
          />
          <span className="heading">Open Campus DAO terminology</span>
        </div>
        <ul className="section-links">
          <li>
            <a href="#">What are the different entities and names?</a>
          </li>
          <li>
            <a href="#">What are the different categories of OCP?</a>
          </li>
          <li>
            <a href="#">What are the different states of OCP on Discourse?</a>
          </li>
          <li>
            <a href="#">How was the Council selected?</a>
          </li>
          <li>
            <a href="#">Does the Foundation or Council control OCP?</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
