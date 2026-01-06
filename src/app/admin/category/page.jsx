"use client";
import { SquarePen, Trash2 } from "@/lib/icons";
import AddAndEditModal from "./AddAndEditModal";
import DeletePopover from "@/components/ui/DeletePopover";
import { useState } from "react";

const Category = () => {
  const categoryData = [
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
    {
      id: 3,
      name: "Category 3",
    },
  ];

  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deletePopover, setDeletePopover] = useState({
    isOpen: false,
    category: null,
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

  const handleDelete = (category) => {
    console.log("Deleting category:", category);
    // Add your delete logic here (API call, state update, etc.)
  };
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-md md:text-2xl font-bold text-gray-800">
          Category
        </h2>
        <button
          className="px-2 py-1 md:px-5 md:py-2.5 text-sm md:text-md rounded-lg font-medium
              bg-surface text-white cursor-pointer"
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
        >
          Add Category
        </button>
      </div>
      {/* Category Table */}
      {/* Category Table */}
      <div className="relative overflow-x-auto max-w-full">
        <table className="w-full min-w-[500px] border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 font-medium text-left">Id</th>
              <th className="px-4 py-3 font-medium text-left">Name</th>
              <th className="px-4 py-3 font-medium text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categoryData.map((category, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 text-sm text-gray-700"
              >
                <td className="px-4 py-3 text-left">{category.id}</td>
                <td className="px-4 py-3 text-left">{category.name}</td>
                <td className="px-4 py-3 flex justify-start gap-3">
                  <button
                    className="border border-dashed border-red-200 w-7 h-7 rounded cursor-pointer"
                    onClick={() => {
                      setEditData(category);
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
                        category: category,
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
            category: null,
            position: { top: 0, left: 0 },
          })
        }
        onConfirm={() => handleDelete(deletePopover.category)}
        name={deletePopover.category?.name || ""}
        position={deletePopover.position}
      />
    </div>
  );
};

export default Category;
