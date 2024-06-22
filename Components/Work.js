import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "You can pick your Favourite Food and also you can search and select your meal and the choice is yours.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "View your choosen meal and make your quantity by next step the order will be in your hand.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Now your meal will reach you as soon as possible, Please open your doors!!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We serve you through online and offline,you can come to the store or else make an order we will be deliverying you.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
