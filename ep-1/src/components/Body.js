import { useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}


const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList.restaurants);
    
  return (
    <>
    <div className="search-container">
            <input type="text" 
            className="search-input" 
            placeholder="Search Hotels/Food" 
            value={searchText} 
            onChange={(e) =>{
                setSearchText(e.target.value);
            }}
            />
            
            <button className="search-btn" 
            onClick={() => {
                //need to filter the data
                const data = filterData(searchText, restaurants);
                setRestaurants(data)
            }
            }
             >Search </button>
    </div>
    <div className="restraunt-list">
      {restaurants.map((restaurant) => {
        return <RestrauntCard {...restaurant.info} key={restaurant.info.id}  />;
      })}
    </div>
    </>
    
  );
};

export default Body