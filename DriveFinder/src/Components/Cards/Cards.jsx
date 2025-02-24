import React from "react";
import { Link } from "react-router-dom";
function Cards({ image, title, paragraph, navigate }) {
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
                    <Link to={navigate}>
                        <button className="mt-4 w-full bg-white text-gray-800 border border-gray-300 font-bold py-2 px-4 rounded-lg shadow-lg hover:border-orange-500 hover:text-orange-600 transition-all duration-300">
                            Search Cars
                        </button>
                    </Link>
                </div>
            </div>

            </>
    )
}
export default Cards