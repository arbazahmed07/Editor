import React from "react";
import Sidebar from "./Sidebar";
import PostEditor from "./PostEditor";
import PostPreview from "./PostPreview";

const MainLayout = () => {
  return (
    <div className="container-fluid vh-00 ">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-md-3 bg-light p-0">
          <Sidebar />
        </div>

        {/* Post Editor */}
        <div className="col-md-6 p-3" style={{ overflowY: "auto" }}>
          <PostEditor />
        </div>

        {/* Post Preview */}
        <div className="col-md-3 p-3" style={{ overflowY: "auto" }}>
          <PostPreview />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
