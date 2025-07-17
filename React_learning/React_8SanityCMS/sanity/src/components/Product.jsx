import bg_portfolio from "../assets/bg_portfolio.png";
import blurred_full_page from "../assets/blurred_full_page.png";

import "./product.css";
import time_saving from "../assets/time_saving.png";
import decision_making from "../assets/decision_making.png";
import reporting from "../assets/reporting.png";
import { useEffect, useState } from "react";
import { urlFor, client } from "../client";
export default function Product() {
  const [benefits, setBenefits] = useState([]);
  const result = useEffect(() => {
    const query = '*[_type == "benefits" && !(_id in path("drafts.**"))]';
    client.fetch(query).then((data) => setBenefits(data));
  }, []);

  return (
    <div id="product">
      <div className="product">
        <div className="productImg">
          <img src={blurred_full_page} alt="product image" />
        </div>
        <div className="productText">
          <h2>Designed with precision, built for modern experiences</h2>
          <p>
            This demo was created with modern design principles in mind —
            focusing on visual clarity, layout consistency, and smooth
            responsiveness across all device sizes. Every detail matters, from
            clean, maintainable code to an intuitive user interface that adapts
            seamlessly to mobile, tablet, and desktop screens.
          </p>
        </div>
      </div>
      <div className="benefits">
        <div className="benefits-title">
          <h2>Benefits</h2>
        </div>
        <div className="cards">
          {benefits.map((benefit) => (
            <div className="card" key={benefit.title}>
              <div className="cardIcon">
                <img src={urlFor(benefit.iconURL).url()} alt="icon" />
              </div>
              <div className="cardTitle">{benefit.title}</div>
              <div className="cardDescription">{benefit.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
