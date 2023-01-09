import React from 'react'
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import Card from "../Card/Card";

function Cards() {
  return (
    <div className="Cards">
    {cardsData.map((card, id) => {
      return (
        <div className="parentContainer" key={id}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            png={card.png}
            series={card.series}
          />
        </div>
      );
    })}
  </div>
  )
}

export default Cards