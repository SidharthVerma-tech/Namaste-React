import { useState, useEffect } from "react";
import ResItem from "./ResItem";
//import Shimmer from "./Shimmer";

  const Body = () => {
  const [rests, setRests] = useState([]);
  const [originalRests, setOriginalRests] = useState([]);
  const [text, setText] = useState("");
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

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="btn" onClick={handleFilter}>
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
         {rests.map((restaurant) => (
          <ResItem key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
