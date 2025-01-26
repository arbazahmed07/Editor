import React from "react";
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaHeart,
  FaLaugh,
  FaSurprise,
  FaUser,
} from "react-icons/fa";

const PostPreview = () => {
  return (
    <div className="p-3 border-start h-100" style={{ maxWidth: "100%", width: "350px" }}>
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Post Preview</h5>
        <button className="btn btn-outline-primary btn-sm">Copy Text</button>
      </div>

      {/* Card Container */}
      <div
        className="card p-3"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* User Info Section */}
        <div className="d-flex align-items-center mb-2">
          {/* Replacing the image with FaUser icon */}
          <FaUser
            className="rounded-circle me-2"
            style={{ fontSize: "40px", color: "#6c757d" }}
          />
          <div className="w-100">
            <h6 className="m-0 text-truncate">Cody Fisher</h6>
            <small className="text-muted d-block">
              UI/UX Design | Web & Mobile Design | Front-end | UI Developer
            </small>
            <div className="text-muted">
              <small>Now • 🌐</small>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <p className="text-truncate mb-0">
          Content creation is important for digital marketing as it involves
          creating and sharing various types of content to attract and engage
          the target audience... <span className="text-primary">see more</span>
        </p>

        {/* Reactions Section */}
        <div className="d-flex align-items-center justify-content-between mt-3">
          <div className="d-flex align-items-center gap-2">
            <FaHeart className="text-danger" />
            <FaLaugh className="text-warning" />
            <FaSurprise className="text-info" />
            <span>88</span>
          </div>
          <div className="text-muted">
            <span>4 comments • 1 repost</span>
          </div>
        </div>

        <hr className="my-2" />

        {/* Action Buttons */}
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-light d-flex align-items-center gap-2 justify-content-center"
            style={{ flex: "1", margin: "0 5px" }}
          >
            <FaThumbsUp /> Like
          </button>
          <button
            className="btn btn-light d-flex align-items-center gap-2 justify-content-center"
            style={{ flex: "1", margin: "0 5px" }}
          >
            <FaComment /> Comment
          </button>
          <button
            className="btn btn-light d-flex align-items-center gap-2 justify-content-center"
            style={{ flex: "1", margin: "0 5px" }}
          >
            <FaShare /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
