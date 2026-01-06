"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const AddAndEditModal = ({ open, onClose, onSubmit, editData }) => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      setShow(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setTimeout(() => setShow(false), 300);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    if (editData) {
      setName(editData.title);
    } else {
      setName("");
    }
  }, [editData, open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title: name });
  };

  if (!show) return null;

  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        transition-all duration-300 ease-out
        ${
          open
            ? "bg-black/40 backdrop-blur-sm"
            : "bg-black/0 backdrop-blur-none"
        }
      `}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative bg-white w-full max-w-md rounded-2xl shadow-2xl
          transition-all duration-300 ease-out
          ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 -translate-y-8"
          }
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`
            absolute top-4 right-4 p-2 rounded-full z-20
            text-gray-400 hover:text-gray-600 hover:bg-gray-100
            transition-all duration-200
            ${open ? "opacity-100 delay-150" : "opacity-0"}
          `}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div
          className={`
            px-6 pt-6 pb-4 border-b border-gray-100
            transition-all duration-300 delay-75
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          `}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            {editData ? "Edit Blog" : "Add Blog"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {editData ? "Update blog details" : "Create a new blog"}
          </p>
        </div>

        {/* Body */}
        <div
          className={`
            px-6 py-6
            transition-all duration-300 delay-100
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          `}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blog Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && name.trim()) {
                handleSubmit(e);
              }
            }}
            placeholder="Enter blog name"
            autoFocus
            className="
              w-full px-4 py-3 rounded-lg border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-surface focus:border-transparent
              transition-all duration-200
              placeholder:text-gray-400
            "
          />
        </div>

        {/* Footer */}
        <div
          className={`
            px-6 py-4 bg-gray-50 rounded-b-2xl
            flex items-center justify-end gap-3
            transition-all duration-300 delay-150
            ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <button
            type="button"
            onClick={onClose}
            className="
              px-5 py-2.5 rounded-lg font-medium
              text-gray-700 bg-white border border-gray-300
              hover:bg-gray-50 hover:border-gray-400
              transition-all duration-200
              active:scale-95
            "
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="
              px-5 py-2.5 rounded-lg font-medium
              bg-surface text-white
              transition-all duration-200
              active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            disabled={!name.trim()}
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAndEditModal;
