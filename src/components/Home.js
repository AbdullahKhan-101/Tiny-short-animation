import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Hero from "./Hero";
import "./Home.css";
import useWebAnimations from "@wellyshen/use-web-animations";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1641273577458-f6d156de0721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1589196728426-4613a4992c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1628104000525-8e88995a8086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1562375121-ea1bc3e8fc10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  ];

  const { ref } = useWebAnimations({
    keyframes: [
      { opacity: 0 }, // Move by 500px
      { opacity: 1 }, // Move by 500px
    ],
    animationOptions: {
      duration: 2000, // Run for 1000ms
      iterations: "1", // Repeat once
      direction: "normal", // Run the animation forwards and then backwards
      easing: "ease-out", // Use a fancy timing function
    },
  });

  return (
    <div>
      <Hero />
      <div ref={ref} className="layout_section">
        <h4>CHOOSE THE VERSION THAT YOU WANT</h4>
        <hr />
        <p>
          Bounce Vcard is beautifull personal showcasing template coming with
          several section to display a lot of information and list your
          experiences and work
        </p>
      </div>
      <div className="card_container">
        {images.map((item, index) => (
          <Card img={item} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
