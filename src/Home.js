import React from "react";
import "./Home.css";
import Product from "./Product";
import Footer from "./Footer";
import hero from "./img/hero.jpg";
import binocular from "./img/binocular.png";
import drone from "./img/drone.png";
import headset from "./img/headset.png";
import xpad from "./img/xpad.png";
import pods from "./img/pods.png";
import xbox from "./img/xbox.png";
import bags from "./img/bags.png";
import bag from "./img/bag.png";
import blue from "./img/blue.png";
import cap from "./img/cap.png";
import phones from "./img/phones.png";
import hoodie from "./img/hoodie.png";
import night from "./img/night.png";
import jordan from "./img/jordan.png";
import ps5 from "./img/p5.png";
import set from "./img/set.png";
import watch from "./img/watch.png";
import xboxPad from "./img/xboxPad.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={hero}
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Binocular 390"
            price={11.96}
            rating={5}
            image={binocular}
            
          />
          <Product
            id="49538094"
            title="Drone LX9"
            price={239.0}
            rating={4}
            image={drone}
          />
          <Product
            id="49538094"
            title="Head Set"
            price={239.0}
            rating={4}
            image={headset}
          />
          <Product
            id="49538094"
            title="Play Station Controller"
            price={239.0}
            rating={4}
            image={xpad}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple Pods"
            price={199.99}
            rating={3}
            image={pods}
          />
          <Product
            id="23445930"
            title="Nike Air Jordan"
            price={98.99}
            rating={5}
            image={jordan}
          />
          <Product
            id="3254354345"
            title="Naruto Hoodie"
            price={598.99}
            rating={4}
            image={hoodie}
          />
            <Product
            id="3254354345"
            title="Headset Bluetooth"
            price={598.99}
            rating={4}
            image={blue}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Xbox One Console"
            price={1094.98}
            rating={4}
            image={xbox}
          />
            <Product
            id="90829332"
            title="Playstation 5"
            price={1094.98}
            rating={4}
            image={ps5}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Laptop Bag"
            price={199.99}
            rating={3}
            image={bag}
          />
          <Product
            id="23445930"
            title="Laptop Bag"
            price={98.99}
            rating={5}
            image={bags}
          />
          <Product
            id="3254354345"
            title="Face Cap"
            price={598.99}
            rating={4}
            image={cap}
          />
            <Product
            id="3254354345"
            title="Head Set"
            price={598.99}
            rating={4}
            image={set}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Smart Watch"
            price={199.99}
            rating={3}
            image={watch}
          />
          <Product
            id="23445930"
            title="Xbox Controller"
            price={98.99}
            rating={5}
            image={xboxPad}
          />
          <Product
            id="3254354345"
            title="Night Vision"
            price={598.99}
            rating={4}
            image={night}
          />
            <Product
            id="3254354345"
            title="Tecno Camon"
            price={598.99}
            rating={4}
            image={phones}
          />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
