import { useState, useEffect, useContext } from "react";
import ResItem , {IsPromoted} from "./ResItem";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
//import Shimmer from "./Shimmer";

  const Body = () => {
  const [rests, setRests] = useState([]);
  const [originalRests, setOriginalRests] = useState([]);
  const [text, setText] = useState("");
  const onlineStatus = useOnlineStatus();
  const PromotedResItem = IsPromoted(ResItem);
  const {loggedInUser, setUserName} = useContext(UserContext)
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5/?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const fetchedRests =
    json?.data?.cards?.find((x) => x?.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setRests(fetchedRests);
    setOriginalRests(fetchedRests);
    console.log(fetchedRests);
    console.log("Hello workd");
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtRests = originalRests.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setRests(filtRests);
  };

  const handleFilter = () => {
    const filteredRests = originalRests.filter((res) => res.info.avgRating >= 4);
    setRests(filteredRests);
    console.log("Filtered");
  };
  if(onlineStatus === false){
    return (
      <h1>Looks Like you are offline</h1>
    )
  }
  return (
    <div className>
      <div className="flex justify-between m-2 p-2">
        <div className="">
          <input
            type="text"
            value={text}
            className='border border-black m-4 p-2.5 rounded-md'
            onChange={(e) => setText(e.target.value)
            }
          />
          <button className="bg-blue-300 shdow-md p-2.5 text-white hover:shadow-lg rounded-md" onClick={handleSearch}>
            Search
          </button>
          <label>Username</label>
          <input type="text" 
          className="p-2 border-2 border-black"
          value={loggedInUser}
          onChange={(e)=>{
            setUserName(e.target.value)
          }}
          />
        </div>
        <button className="flex mx-3 my-auto justify-center bg-blue-300 shdow-md p-2.5 text-white hover:shadow-lg rounded-md" onClick={handleFilter}>
          Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        

         {rests.map((restaurant) => (
           restaurant.info.promoted ? <PromotedResItem key={restaurant.info.id} resData={restaurant}/>
            : 
          <ResItem key={restaurant.info.id} resData={restaurant}/>
        ))}

      </div>
    </div>
  );
};

export default Body;
