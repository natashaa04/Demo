import React, { useState } from "react";
import { blogT } from "@/app/types/product";
import "../admin.css";
import { uploadBlogtModelProps } from "@/app/types/props";
import { useApi } from "@/app/customHooks/useApi";


const UploadBlogModal = ({ onClose }: uploadBlogtModelProps) => {
    const { createBlog } = useApi();
  const [blog, setBlog] = useState<blogT>({
    id: "",
    title: "",
    desc: "",
    image: "",
    link: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

     const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBlog(blog);
      alert("Blog uploaded successfully!");
      onClose();
    } catch (error) {
      console.error("Error uploading blog:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Upload Blog</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={blog.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="desc"
            placeholder="Blog Description"
            value={blog.desc}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={blog.image}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="link"
            placeholder="Blog Link"
            value={blog.link}
            onChange={handleChange}
            required
          />
          <div className="modal-buttons">
            <button type="submit" className="modal-btn">Upload</button>
            <button type="button" className="modal-btn cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadBlogModal;
