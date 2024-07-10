import { useState, useEffect } from "react";
import ResItem from "./ResItem";
import useOnlineStatus from "../utils/useOnlineStatus";
//import Shimmer from "./Shimmer";

  const Body = () => {
  const [rests, setRests] = useState([]);
  const [originalRests, setOriginalRests] = useState([]);
  const [text, setText] = useState("");
  const onlineStatus = useOnlineStatus();
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
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

  // if (rests.length === 0) {
  //   return <Shimmer />;
  // }

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
        </div>
        <button className="flex mx-3 my-auto justify-center bg-blue-300 shdow-md p-2.5 text-white hover:shadow-lg rounded-md" onClick={handleFilter}>
          Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
         {rests.map((restaurant) => (
          <ResItem key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
