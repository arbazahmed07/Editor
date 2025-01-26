import React, { useState } from "react";
import {
  FaPen,
  FaLightbulb,
  FaCalendar,
  FaListUl,
  FaCompass,
  FaLayerGroup,
  FaCogs,
  FaBullhorn,
  FaChartBar,
  FaArrowUp,
  FaBars, 
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-flex flex-column p-3 bg-light h-100">
      {/* Hamburger button to toggle the sidebar */}
      <button
        className="btn btn-secondary d-md-none mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars /> {/* Hamburger icon */}
      </button>

      {/* Sidebar content */}
      <div
        className={`collapse d-md-block ${isOpen ? "show" : ""}`} // Collapse class to hide sidebar on mobile and show when opened
      >
        <button className="btn btn-primary mb-3 d-flex align-items-center gap-2 rounded-pill">
          <FaPen /> Write Post
        </button>
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
                <FaCompass /> Post Generator
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
                <FaLightbulb /> Ideas Generator
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
                <FaLayerGroup /> Carousel Maker
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
                <FaListUl /> Posts
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
                <FaLightbulb /> Content Inspiration
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
                <FaCalendar /> Schedule
              </a>
            </li>
          </ul>
        </nav>

        <hr />

        <div className="mt-auto">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
                <FaCogs /> Preferences
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
                <FaBullhorn /> Feature Request
              </a>
            </li>
          </ul>

          {/* Usage Stats Section */}
          <div className="bg-white p-3 rounded shadow-sm mt-4">
            <h6 className="mb-3">Usage Stats</h6>
            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span>Words Generated</span>
                <span>
                  <strong>1.25k / 50k</strong>
                </span>
              </div>
              <div className="progress rounded-pill" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-primary rounded-pill"
                  role="progressbar"
                  style={{ width: "2.5%" }}
                  aria-valuenow="1250"
                  aria-valuemin="0"
                  aria-valuemax="50000"
                ></div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Monthly usage resets in 29 days</span>
              <button className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1 rounded-pill">
                <FaArrowUp />
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
