import React from "react";
function Cards({ image, title, paragraph }) {
    return (
        <>
            <div className="max-w-sm mt-7 mx-auto bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                    src={image}
                    alt="Minimal design"
                    className="w-full h-70 object-contain rounded-t-xl"
                />
                <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
                    <p className="mt-2 text-gray-600">{paragraph}</p>
                    <p className="text-blue-500">Search Cars</p>
                </div>
            </div>
        </>
    )
}
export default Cards