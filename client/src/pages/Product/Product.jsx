import React, { useState } from "react";
import "./Product.scss";

const images = [
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0JTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0JTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
];

const Product = () => {
  const [selectedImg, setSetlectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSetlectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSetlectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          reprehenderit saepe tempora tenetur vero asperiores dolore et iste,
          pariatur repellat ducimus voluptatem, expedita officiis beatae!
          Recusandae quis deleniti omnis dolorem!
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>

        </div>
      </div>
    </div>
  );
};

export default Product;
