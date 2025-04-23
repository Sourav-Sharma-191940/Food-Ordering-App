import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import ResCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  // const [filteredRestaurant, setFilteredRestaurant] =useState([])
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    const restaurants = jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurant(restaurants)
    setFilteredRestaurant(restaurants)
    console.log(restaurants)
  };
  

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Type..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
          className="filter-button" 
          onClick={()=>{
            const searchedRestaurants = listOfRestaurant.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
            })
            setFilteredRestaurant(searchedRestaurants)
          }}>Search</button>
        </div> */}
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-button"
          onClick={() => {
            setListOfRestaurant(listOfRestaurant);
          }}
        >
          Reset Filter
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
