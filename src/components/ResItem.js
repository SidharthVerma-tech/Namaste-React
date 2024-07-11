import { IMG_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const ResItem = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

    return (
        <div className="m-4 p-4 w-[300px] hover:bg-slate-200 shadow-lg h-[500px]">
            <Link to={`/restaurants/${resData.info.id}`}>
            <img
                src={IMG_URL + cloudinaryImageId}
                className="w-40 h-40 rounded-md mr-4"
                alt={name}
            />
            <div className="flex flex-col justify-center">
                
                    <h3 className="font-semibold text-black hover:text-blue-500 transition-colors">{name}</h3>
                
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
            </Link>
        </div>
    );
};
export const IsPromoted = (ResItem) => {
    return ((props)=>{

        return (
            <div className="">
                <label className="bg-black text-white absolute rounded-md m-2 p-2">Promoted</label>
                <ResItem {...props}/>
            </div>
        )
    })
}
export default ResItem;
