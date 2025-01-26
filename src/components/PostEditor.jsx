import React, { useState, useEffect } from "react";
import {
  FaMagic,
  FaSync,
  FaHighlighter,
  FaBold,
  FaItalic,
  FaSmile,
  FaRobot,
  FaBrain,
  FaFlask,
  FaFileUpload,
  FaCopy,
  FaImage,
  FaSave,
  FaClock,
  FaCheckCircle,
  FaUser,
  FaChartLine,
  FaTextHeight,
  FaFileAlt,
  FaAsterisk,
  FaArrowDown,
  FaPencilAlt,
} from "react-icons/fa";

const PostEditor = () => {
  const [content, setContent] = useState("");
  const [lastSaved, setLastSaved] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setLastSaved(new Date().toLocaleString());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCharCount(content.length);
  }, [content]);

  const handleInsertFile = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setContent((prevContent) => prevContent + `<img src="${e.target.result}" alt="Uploaded Image" />`);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload an image file.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      alert("Content copied to clipboard");
    });
  };

  const handleSaveDraft = () => {
    alert("Draft saved!");
  };

  const handleSchedule = () => {
    alert("Post scheduled!");
  };

  const handlePublish = () => {
    alert("Post published!");
  };

  const handleTextDoubleClick = (e) => {
    if (content.trim().length > 0) {
      setShowContextMenu(true);
      setContextMenuPosition({ top: e.clientY, left: e.clientX });
    }
  };

  const handleContextMenuItemClick = (action) => {
    alert(`Action: ${action}`);
    setShowContextMenu(false);
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Write Post</h5>
        <div className="d-flex gap-2 align-items-center">
          <button className="btn btn-outline-secondary d-flex align-items-center gap-1 p-2">
            <FaChartLine /> Check Score
          </button>
          <FaUser className="fs-4" />
        </div>
      </div>

      <nav className="navbar navbar-light bg-light mb-3">
        <div className="container-fluid">
          <div className="d-flex gap-2">
            <button className="btn btn-light" aria-label="Bold text">
              <FaBold />
            </button>
            <button className="btn btn-light" aria-label="Italic text">
              <FaItalic />
            </button>
            <button className="btn btn-light" aria-label="Insert smiley">
              <FaSmile />
            </button>
          </div>
          <div className="d-flex gap-2 ms-auto">
            <button
              className="btn btn-light"
              onClick={() => document.getElementById("fileInput").click()}
              aria-label="Insert file"
            >
              <FaFileUpload /> Insert File
            </button>
            <button className="btn btn-light" onClick={handleCopy} aria-label="Copy content">
              <FaCopy /> Copy
            </button>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleInsertFile}
            />
          </div>
        </div>
      </nav>

      <textarea
        className="form-control my-3"
        rows="14"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content creation is important for..."
        onDoubleClick={handleTextDoubleClick}
      ></textarea>

      {/* Context Menu for AI Tools */}
      {showContextMenu && (
        <div
          className="position-absolute"
          style={{
            top: `${contextMenuPosition.top}px`,
            left: `${contextMenuPosition.left}px`,
            zIndex: 10,
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
          }}
          onMouseLeave={() => setShowContextMenu(false)}
        >
          <div className="dropdown-menu show">
            <button className="dropdown-item" onClick={() => handleContextMenuItemClick("Complete")}>
              <FaAsterisk /> Complete
            </button>
            <button className="dropdown-item" onClick={() => handleContextMenuItemClick("Shorten")}>
              <FaArrowDown /> Shorten
            </button>
            <button className="dropdown-item" onClick={() => handleContextMenuItemClick("Rephrase")}>
              <FaSync /> Rephrase
            </button>
            <button className="dropdown-item" onClick={() => handleContextMenuItemClick("Summarize")}>
              <FaHighlighter /> Summarize
            </button>
            <button className="dropdown-item" onClick={() => handleContextMenuItemClick("TL;DR")}>
              <FaClock /> TL;DR
            </button>
            <button className="dropdown-item" onClick={() => handleContextMenuItemClick("Simplify")}>
              <FaTextHeight /> Simplify
            </button>
            <button className="dropdown-item" onClick={() => handleContextMenuItemClick("Spelling/Grammar")}>
              <FaPencilAlt /> Spelling/Grammar
            </button>
            <button className="dropdown-item" onClick={() => handleContextMenuItemClick("Emojify")}>
              <FaSmile /> Emojify
            </button>
            <button className="dropdown-item" onClick={() => handleContextMenuItemClick("Tone of Voice")}>
              <FaBrain /> Tone of Voice
            </button>
            <button className="dropdown-item" onClick={() => handleContextMenuItemClick("Translate")}>
              <FaFileAlt /> Translate
            </button>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-between mb-3">
        <span>Last Saved: {lastSaved ? lastSaved : "Not saved yet"}</span>
        <span>Total Characters: {charCount}</span>
      </div>

      <hr />

      <div className="d-flex flex-wrap gap-3">
        <button className="btn btn-outline-secondary" onClick={handleSaveDraft}>
          <FaSave /> Save as Draft
        </button>
        <button className="btn btn-outline-info" onClick={handleSchedule}>
          <FaClock /> Schedule
        </button>
        <button className="btn btn-outline-success" onClick={handlePublish}>
          <FaCheckCircle /> Publish
        </button>
      </div>

      <div className="dropdown mb-3">
        <button className="btn btn-info mt-3 dropdown-toggle" type="button" data-bs-toggle="dropdown">
          <FaMagic /> AI Tools
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item d-flex align-items-center gap-2" href="#">
              <FaSync /> Rephrase
            </a>
          </li>
          <li>
            <a className="dropdown-item d-flex align-items-center gap-2" href="#">
              <FaHighlighter /> Summarize
            </a>
          </li>
          <li>
            <a className="dropdown-item d-flex align-items-center gap-2" href="#">
              <FaRobot /> Generate Ideas
            </a>
          </li>
          <li>
            <a className="dropdown-item d-flex align-items-center gap-2" href="#">
              <FaBrain /> Brainstorm Topics
            </a>
          </li>
          <li>
            <a className="dropdown-item d-flex align-items-center gap-2" href="#">
              <FaFlask /> Analyze Text
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostEditor;
