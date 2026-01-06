"use client";
import { useEffect, useRef } from "react";

const DeletePopover = ({ isOpen, onClose, onConfirm, name, position }) => {
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Popover */}
      <div
        ref={popoverRef}
        style={{
          position: "fixed",
          top: position.top,
          left: position.left,
          transform: "translate(-80%, -100%)",
          marginTop: "-12px",
        }}
        className="z-50 w-44 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="p-4">
          <p className="text-sm text-gray-700">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-gray-900">"{name}"</span>?
          </p>
        </div>

        {/* Footer */}
        <div className="p-3 bg-gray-50 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-0.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-3 py-0.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-200 active:scale-95"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeletePopover;
