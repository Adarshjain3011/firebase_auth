import React from "react";
import { FaUser } from "react-icons/fa"; // Import the FontAwesome User icon

export default function Button({ children, icon, onClick }: any) {
  const IconComponent = icon; // Capitalize the icon component name

  return (
    <div className="flex">
      <button
        className="flex justify-center items-center text-sm bg-dark-blue font-bold text-white py-3 px-10 gap-3 rounded-lg border border-darker-blue w-full"
        onClick={onClick}
      >
        <span className="">{icon && <IconComponent className="text-xl" />}</span>
        {children}
      </button>
    </div>
  );
}




