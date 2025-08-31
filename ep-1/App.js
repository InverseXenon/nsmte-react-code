import * as React from "react";
import * as ReactDOM from "react-dom/client";

// Cloudinary base URL for restaurant images
const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://static.vecteezy.com/system/resources/previews/008/687/818/non_2x/food-delivery-logo-free-vector.jpg"
      alt="Bhook Bhagao!"
    />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Restaurant Data   
const restaurantList = {
  restaurants: [
    {
      info: {
        id: "644544",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/56990980-9098-41ed-b1c4-c68ba43237c8_644544.JPG",
        locality: "Panvel",
        areaName: "Kamothe",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.3,
        sla: { deliveryTime: 16, lastMileTravelString: "2.0 km" },
      },
    },
    {
      info: {
        id: "49663",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/d7480e5c-f71e-46fc-9e15-1fca98e0c0b3_49663.JPG",
        locality: "Opposite D Mart",
        areaName: "Kalamboli",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.0,
        sla: { deliveryTime: 25, lastMileTravelString: "2.1 km" },
      },
    },
    {
      info: {
        id: "819283",
        name: "B Burger - Bigger Burger",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/f43904be-770c-4923-8ac6-460b9927faac_819283.jpg",
        locality: "Kharghar",
        areaName: "Kharghar",
        costForTwo: "₹500 for two",
        cuisines: ["Burgers", "Fast Food", "American"],
        avgRating: 4.3,
        sla: { deliveryTime: 39, lastMileTravelString: "6.4 km" },
      },
    },
    {
      info: {
        id: "351396",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/ee8e677b-4076-476e-951a-e5e88e031fd5_351396.JPG",
        locality: "Sahyadri Apartments",
        areaName: "Kalamboli",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.5,
        sla: { deliveryTime: 22, lastMileTravelString: "0.9 km" },
      },
    },
    {
      info: {
        id: "381182",
        name: "Natural Ice Cream",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/71b21374-40f3-41da-a9e6-1160cbc64995_381182.jpg",
        locality: "Kamothe",
        areaName: "Kamothe",
        costForTwo: "₹150 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.7,
        sla: { deliveryTime: 23, lastMileTravelString: "2.7 km" },
      },
    },
    {
      info: {
        id: "567891",
        name: "Subway",
        imageUrl:
          "https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/CaseStudies/Subway_-_Thumbnail.jpg",
        locality: "Sector 11",
        areaName: "Kharghar",
        costForTwo: "₹300 for two",
        cuisines: ["Healthy Food", "Salads", "Sandwiches"],
        avgRating: 4.1,
        sla: { deliveryTime: 28, lastMileTravelString: "3.3 km" },
      },
    },
    {
      info: {
        id: "567892",
        name: "Burger King",
        imageUrl:
          "https://static4.franchisedirect.ie/dims4/default/876326e/2147483647/strip/true/crop/350x184+0+18/resize/1200x630!/quality/95/?url=https%3A%2F%2Ffranchisedirect-40-prod-ops.s3.amazonaws.com%2F48%2Fcb%2Fd5cbb2101186078636c8cb6adbfb%2Fburger-king.png",
        locality: "Sector 5",
        areaName: "Belapur",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "Fast Food"],
        avgRating: 4.2,
        sla: { deliveryTime: 30, lastMileTravelString: "4.1 km" },
      },
    },
    {
      info: {
        id: "567893",
        name: "Pizza Hut",
        imageUrl:
          "https://mma.prnewswire.com/media/1583100/Pizza_Hut_Logo.jpg?p=facebook",
        locality: "Central Mall",
        areaName: "Navi Mumbai",
        costForTwo: "₹450 for two",
        cuisines: ["Pizzas", "Italian", "Pastas"],
        avgRating: 4.0,
        sla: { deliveryTime: 27, lastMileTravelString: "5.0 km" },
      },
    },
    {
      info: {
        id: "567894",
        name: "Starbucks",
        imageUrl:
          "https://blog.ksom.ac.in/wp-content/uploads/2024/12/starbucks-leadership.jpg",
        locality: "Inorbit Mall",
        areaName: "Vashi",
        costForTwo: "₹600 for two",
        cuisines: ["Beverages", "Cafe", "Snacks"],
        avgRating: 4.6,
        sla: { deliveryTime: 18, lastMileTravelString: "1.5 km" },
      },
    },
    {
      info: {
        id: "567895",
        name: "Haldiram's",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXI4Hhy0syCdTEuTzgStyVnUoy-PwWCaIuw&s",
        locality: "Sector 20",
        areaName: "Nerul",
        costForTwo: "₹250 for two",
        cuisines: ["Indian", "Snacks", "Sweets"],
        avgRating: 4.4,
        sla: { deliveryTime: 21, lastMileTravelString: "2.9 km" },
      },
    },
  ],
};

const RestrauntCard = ({
  cloudinaryImageId,
  imageUrl,
  name,
  cuisines,
  areaName: area,
  lastMileTravelString,
  costForTwo,
  avgRating,
}) => {
  // Prefer direct image URL if available, otherwise fall back to Cloudinary
  const imgSrc = imageUrl ? imageUrl : IMG_CDN_URL + cloudinaryImageId;

  return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i> {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list">
      {restaurantList.restaurants.map((restaurant) => {
        return <RestrauntCard {...restaurant.info} key={restaurant.info.id}  />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
