import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Long Sleeve T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },

  {
    id: 2,
    img: "https://images.pexels.com/photos/2090784/pexels-photo-2090784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coat",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1039518/pexels-photo-1039518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coat",
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coat",
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
];

const List = () => {
  return (
    <div className="list">
      {data?.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
