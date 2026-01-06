"use client";
import { SquarePen, Trash2 } from "@/lib/icons";
import AddAndEditModal from "./AddAndEditModal";
import DeletePopover from "@/components/ui/DeletePopover";
import { useState } from "react";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      category: "category 1",
      title: "Blog Title",
      description: "Blog Description",
      date: "2024-01-01",
      publisher: "Admin",
    },
  ];

  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deletePopover, setDeletePopover] = useState({
    isOpen: false,
    blog: null,
    position: { top: 0, left: 0 },
  });

  const handleSubmit = (data) => {
    if (editData) {
      console.log("editData", editData);
    } else {
      console.log("data", data);
    }
    setOpen(false);
    setEditData(null);
  };

  const handleDelete = (blog) => {
    console.log("Deleting blog:", blog);
    // Add your delete logic here (API call, state update, etc.)
  };
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-md md:text-2xl font-bold text-gray-800">Blog</h2>
        <button
          className="px-2 py-1 md:px-5 md:py-2.5 text-sm md:text-md rounded-lg font-medium
              bg-surface text-white cursor-pointer"
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
        >
          Add Blog
        </button>
      </div>
      {/* blog Table */}
      {/* blog Table */}
      <div className="relative overflow-x-auto max-w-full">
        <table className="w-full min-w-[500px] border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 font-medium text-left">Id</th>
              <th className="px-4 py-3 font-medium text-left">Category</th>
              <th className="px-4 py-3 font-medium text-left">Title</th>
              <th className="px-4 py-3 font-medium text-left">Description</th>
              <th className="px-4 py-3 font-medium text-left">Date</th>
              <th className="px-4 py-3 font-medium text-left">Publisher</th>
              <th className="px-4 py-3 font-medium text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogData.map((blog, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 text-sm text-gray-700"
              >
                <td className="px-4 py-3 text-left">{blog.id}</td>
                <td className="px-4 py-3 text-left">{blog.category}</td>
                <td className="px-4 py-3 text-left">{blog.title}</td>
                <td className="px-4 py-3 text-left">{blog.description}</td>
                <td className="px-4 py-3 text-left">{blog.date}</td>
                <td className="px-4 py-3 text-left">{blog.publisher}</td>
                <td className="px-4 py-3 flex justify-start gap-3">
                  <button
                    className="border border-dashed border-red-200 w-7 h-7 rounded cursor-pointer"
                    onClick={() => {
                      setEditData(blog);
                      setOpen(true);
                    }}
                  >
                    <SquarePen className="w-4 h-4 mx-auto" />
                  </button>

                  <button
                    className="border border-dashed border-red-200 w-7 h-7 rounded cursor-pointer hover:bg-red-50 transition-colors"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setDeletePopover({
                        isOpen: true,
                        blog: blog,
                        position: {
                          top: rect.top,
                          left: rect.left + rect.width / 2,
                        },
                      });
                    }}
                  >
                    <Trash2 className="w-4 h-4 mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddAndEditModal
        open={open}
        onClose={() => {
          setOpen(false);
          setEditData(null);
        }}
        onSubmit={handleSubmit}
        editData={editData}
      />

      <DeletePopover
        isOpen={deletePopover.isOpen}
        onClose={() =>
          setDeletePopover({
            isOpen: false,
            blog: null,
            position: { top: 0, left: 0 },
          })
        }
        onConfirm={() => handleDelete(deletePopover.blog)}
        name={deletePopover.blog?.title || ""}
        position={deletePopover.position}
      />
    </div>
  );
};

export default Blog;
