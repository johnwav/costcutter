import React from "react";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Accessories</span>
          <span>Shoes</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab
            voluptate, laudantium omnis nobis quia odio inventore tempore sit
            iste soluta adipisci magnam fuga vero minus voluptas in ullam
            voluptatum?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
            deserunt! Accusantium, ipsum? Iusto adipisci velit laboriosam
            accusamus quis rem, veritatis, mollitia dolores deserunt magni
            praesentium! Fugiat eaque fuga aspernatur cumque.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">COSTCUTTER</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
