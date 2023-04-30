import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${catId}
      ${subCats.map(
        (item) => `&filters[sub_categories][id][$eq]=${item}`
      )}&filters[price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  console.log(subCats);

  return (
    <div className="list">
      {loading
        ? "Loading..."
        : data?.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
    </div>
  );
};

export default List;
