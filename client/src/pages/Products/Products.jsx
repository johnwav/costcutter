import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item !== value)
    );
  };

  console.log(data)
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Prioduct Categories</h2>
          {data.map((item) => {
            return (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            );
          })}
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
              value={100}
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
        <img
          className="catImg"
          src="https://img.ltwebstatic.com/images3_acp/2020/01/13/157889589779510114a29e361fe437fcb63d0c17ca.webp"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCat}
        />
      </div>
    </div>
  );
};

export default Products;
