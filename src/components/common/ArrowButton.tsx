import React from "react";


const ArrowButton = ({ icon,onClick }: any) => {

    const IconComponent = icon; // Capitalize the icon component name

    return (

        <div className="arrow-button">

            <div className="w-[30px] h-[30px] border text-white
                             font-semibold border-darker-blue p-1
                              rounded-lg flex justify-center items-center"
                              
                              onClick={onClick}

                              >
                {/* Render the 'icon' passed as prop */}

                <IconComponent className="" />

            </div>

        </div>
    );
};

export default ArrowButton;




