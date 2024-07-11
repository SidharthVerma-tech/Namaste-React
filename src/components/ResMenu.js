import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ResCategory from './ResCategory';

const ResMenu = () => {
    const { resId } = useParams();
    const [categories, setCategories] = useState([]);
    const lat = 28.7040592;
    const lng = 77.10249019999999;
    const [resInfo, setResInfo] = useState({});
    const [showIndex, setShowIndex] = useState(null); // Changed to null for proper toggling

    useEffect(() => {
        fetchMenu();
    }, [resId]); // Add resId as a dependency

    const fetchMenu = async () => {
        try {
            const data = await fetch(`https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`);
            const json = await data.json();

            const ResInfo = json?.data?.cards?.find(card => card?.card?.card["@type"]?.includes("food.v2.Restaurant"));
            setResInfo(ResInfo?.card?.card?.info || {});

            const resCard = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            if (resCard) {
                const allCategories = resCard.filter(c => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
                setCategories(allCategories);
            }
        } catch (error) {
            console.error("Error fetching menu data:", error);
        }
    };

    const { name, costForTwo } = resInfo;

    return (
        <div className='text-2xl font-bold text-center'>
            <h1>{name}</h1>
            <div className='text-lg font-bold'>
                Cost - Rs.{costForTwo ? costForTwo / 100 : 'N/A'}
            </div>
            <div className=''>
                {categories.map((category, index) => (
                    <ResCategory 
                        key={category?.card?.card.title} 
                        data={category?.card?.card}
                        showItems={index === showIndex}
                        toggleShowIndex={() => setShowIndex(showIndex === index ? null : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ResMenu;
