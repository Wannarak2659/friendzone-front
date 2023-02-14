import { useState } from "react";

export default function Dropdown() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="justify-end">
      <div className="relative">
        <button
          className="flex items-center px-4 py-2 text-white font-black"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          ...
        </button>
        <div
          className={`absolute right-0 w-48 py-2 mt-1 bg-white rounded-md shadow-lg z-10 
          ${openDropdown ? "" : "hidden"}`}
        >
          <button className="block px-4 py-2 text-gray-800">Delete</button>
        </div>
      </div>
    </div>
  );
}
