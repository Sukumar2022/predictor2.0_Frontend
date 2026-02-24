import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
  const cards = [
    {
      title: "Regular Plan",
      price: "0 /month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      link: "/checkout/basic",
    },
    {
      title: "Ultra Plan",
      price: "50 /month",
      features: ["Feature A", "Feature B", "Feature C"],
      link: "/checkout/pro",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap gap-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="price-card pop-font h-120 w-90 flex justify-center items-center flex-col flex-wrap text-white bg-[#303952]"
        >
          <h1 className="text-4xl bg-orange-400 p-3 rounded font-bold mb-5">{card.title}</h1>

          <p className="text-2xl mb-5"> <i class="ri-money-rupee-circle-line"></i> {card.price}</p>

          <ul className="text-lg mb-5">
            {card.features.map((feature, i) => (
              <li key={i} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>

          <Link to={card.link}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Choose Plan
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
