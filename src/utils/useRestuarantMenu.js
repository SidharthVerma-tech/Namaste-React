import Shimmer from '../components/Shimmer';
import {useState, useEffect} from 'react'
const useRestuarantMenu = (resId) => {
    const lat = 28.7040592;
    const lng = 77.10249019999999;
    const [resInfo, setResInfo] = useState([]);
    useEffect(()=>{
        fetchMenu();
    },[])
    // Renders eveytime when oure resId changes
    //if(resInfo === NULL) return <Shimmer/>
    const fetchMenu =  async() => {
        const data = await fetch(`https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`)
        const json = await data.json();
        const ResInfo = json?.data?.cards?.find(card =>card?.card?.card["@type"]?.includes("food.v2.Restaurant"));
        setResInfo(ResInfo?.card?.card?.info || {});
        console.log(json?.data?.cards);
        const resCard = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const categories = resCard.filter(c=>c?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        console.log(categories);
    }
    return (
        resInfo
    )

}
export default useRestuarantMenu;