import Shimmer from '../components/Shimmer';
import {useState, useEffect} from 'react'
const useRestuarantMenu = (resId) => {
    const lat = 22.51800;
    const lng = 88.38320;
    const [resInfo, setResInfo] = useState([]);
    useEffect(()=>{
        fetchMenu();
    },[])
    // Renders eveytime when oure resId changes
    //if(resInfo === NULL) return <Shimmer/>
    const fetchMenu =  async() => {
        const data = await fetch(`https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`)
        const json = await data.json();
        const ResInfo = json?.data?.cards?.find(card =>                     card?.card?.card["@type"]?.includes("food.v2.Restaurant"));
        setResInfo(ResInfo?.card?.card?.info || {});
        console.log(ResInfo?.card?.card?.info);
    }
    return (
        resInfo
    )

}
export default useRestuarantMenu;