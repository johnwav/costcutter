import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: "Lorem ipsum, d?",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2090784/pexels-photo-2090784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: "Lorem ipsum, dolor sitis?",
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 50)}</p>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}

      <div className="total">
        <span>TOTAL PRICE</span>
        <span>$123</span>
      </div>

      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
