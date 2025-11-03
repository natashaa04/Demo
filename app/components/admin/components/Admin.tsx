"use client";

import React, { useState } from "react";
import "../admin.css";
import UploadBlogModal from "./UploadBlogProduct";
import UploadProductModal from "./UploadProductModel";

const Admin = () => {
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="admin-buttons">
        <button
          className="admin-btn"
          onClick={() => setIsBlogModalOpen(true)}
        >
          Upload Blog
        </button>
        <button
          className="admin-btn"
          onClick={() => setIsProductModalOpen(true)}
        >
          Upload Product
        </button>
      </div>

      {isBlogModalOpen && (
        <UploadBlogModal onClose={() => setIsBlogModalOpen(false)} />
      )}

      {isProductModalOpen && (
        <UploadProductModal onClose={() => setIsProductModalOpen(false)} />
      )}
    </div>
  );
};

export default Admin;
