import { IMG_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const ResItem = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

    return (
        <div className="m-4 p-4 w-[300px] hover:bg-slate-200 shadow-lg">
            <img
                src={IMG_URL + cloudinaryImageId}
                className="w-40 h-40 rounded-md mr-4"
                alt={name}
            />
            <div className="flex flex-col justify-center">
                <Link to={`/restaurants/${resData.info.id}`}>
                    <h3 className="font-semibold text-black hover:text-blue-500 transition-colors">{name}</h3>
                </Link>
                <div className="flex flex-wrap">
                    <h5 className="text-gray-600">Cuisines:</h5>
                    <div className="flex flex-wrap gap-1">
                        {cuisines.map((cuisine, index) => (
                            <span key={index} className="bg-gray-300 px-2 py-1 rounded-md text-sm">{cuisine}</span>
                        ))}
                    </div>
                </div>
                <h5 className="text-gray-600">Rating: {avgRating}</h5>
            </div>
        </div>
    );
};

export default ResItem;
