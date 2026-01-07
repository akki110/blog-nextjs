"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const AddAndEditModal = ({ open, onClose, onSubmit, editData }) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [publisher, setPublisher] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  // Mock categories - replace with actual API call
  const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Lifestyle" },
    { id: 3, name: "Business" },
    { id: 4, name: "Health" },
  ];

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
      setCategory(editData.category || "");
      setTitle(editData.title || "");
      setDate(editData.date || "");
      setPublisher(editData.publisher || "");
      setDescription(editData.description || "");
    } else {
      setCategory("");
      setTitle("");
      setDate("");
      setPublisher("");
      setDescription("");
    }
  }, [editData, open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      category,
      title,
      date,
      publisher,
      description,
    });
  };

  const formFields = [
    {
      name: "category",
      label: "Category",
      type: "select",
      placeholder: "Select a category",
      required: true,
      options: categories,
      value: category,
      onChange: setCategory,
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Enter blog title",
      required: true,
      value: title,
      onChange: setTitle,
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      required: true,
      value: date,
      onChange: setDate,
    },
    {
      name: "publisher",
      label: "Publisher",
      type: "text",
      placeholder: "Enter publisher name",
      required: true,
      value: publisher,
      onChange: setPublisher,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter blog description",
      required: true,
      rows: 4,
      value: description,
      onChange: setDescription,
    },
  ];

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
          relative bg-white w-full max-w-5xl rounded-xl shadow-xl
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
            px-6 py-6 max-h-[60vh] overflow-y-auto
            transition-all duration-300 delay-100
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          `}
        >
          <div className="space-y-4">
            {formFields.map((field, i) => (
              <div key={i}>
                {field.type === "select" ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={field.value}
                      onChange={(e) => setCategory(e.target.value)}
                      className="
                  w-full px-4 py-3 rounded-lg border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-surface focus:border-transparent
                  transition-all duration-200
                  bg-white
                "
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : field.type === "text" || field.type === "date" ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={field.type}
                      value={field.value}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={field.placeholder}
                      className="
                  w-full px-4 py-3 rounded-lg border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-surface focus:border-transparent
                  transition-all duration-200
                  placeholder:text-gray-400
                "
                    />
                  </div>
                ) : field.type === "textarea" ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={field.value}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={field.placeholder}
                      rows={4}
                      className="
                  w-full px-4 py-3 rounded-lg border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-surface focus:border-transparent
                  transition-all duration-200
                  placeholder:text-gray-400
                  resize-none
                "
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
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
            disabled={
              !category.trim() ||
              !title.trim() ||
              !date ||
              !publisher.trim() ||
              !description.trim()
            }
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAndEditModal;
