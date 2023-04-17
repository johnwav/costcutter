import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState();

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Prioduct Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={1} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={1} />
            <label htmlFor="3">Shirts</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value={"asc"}
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value={"desc"}
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="asc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
