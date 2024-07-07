import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const ResMenu = () => {
    const lat = 22.51800;
    const lng = 88.38320;
    const [resInfo, setResInfo] = useState({});
    const {resId} = useParams()
    useEffect((resId) => {
        fetchMenu();
    }, [resId]);
    console.log(resId)
    const fetchMenu = async () => {
        const data = await fetch(`https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`);
        const json = await data.json();
        const ResInfo = json?.data?.cards?.find(card => card?.card?.card["@type"]?.includes("food.v2.Restaurant"));
        setResInfo(ResInfo?.card?.card?.info || {});
        console.log(ResInfo?.card?.card?.info);
    };

    const { name, cuisines = [], avgRating, costForTwo } = resInfo;

    return (
        <div className='res-info'>
            <h1>{name}</h1>
            <div>
                <h2>Cuisines</h2>
                <ul>
                    {cuisines.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </div>
            <div className='cost'>
                {avgRating}
            </div>
            <div className='rating'>
            Cost - Rs.{costForTwo ? costForTwo / 100 : 'N/A'}
            </div>
        </div>
    );
};

export default ResMenu;
