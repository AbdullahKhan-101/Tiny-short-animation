import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import useWebAnimations from "@wellyshen/use-web-animations";

const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateY(30px)", opacity: 0 }, // Move by 500px
      { transform: "translateY(0px)", opacity: 1 }, // Move by 500px
    ],
    animationOptions: {
      duration: 1000, // Run for 1000ms
      iterations: 1, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  return (
    <div id="top" className="carasoul_container">
      <div ref={ref} className="hero_text_container">
        <h1>WELCOME TO BOUNCE VCARD</h1>
        <p>
          BOUNCE VCARD IS BEAUTIFULL PERSONAL SHOWCASING TEMPLATE COMING WITH
          SEVERAL SECTION TO DISPLAY A LOT OF INFORMATION AND WORK
        </p>
        <div className="two_buttons">
          <button className="discover">Discover Bounce</button>
          <button className="buy">Buy Bounce Now</button>
        </div>
      </div>
      <Slider {...settings}>
        <div className="img_container">
          <img
            alt="img"
            src="https://images.unsplash.com/photo-1670878240679-407ec0b05f50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          />
        </div>
        <div className="img_container">
          <img
            alt="img"
            src="https://images.unsplash.com/photo-1553336808-9149bb1f348f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1302&q=80"
          />
        </div>
        <div className="img_container">
          <img
            alt="img"
            src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
