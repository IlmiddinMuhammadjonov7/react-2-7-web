import React from "react";

const page = () => {
  return (
    <div className="home">
      <div className="home2">
        <img src={"/home/Bitmap (3).svg"} alt="" className="home-img" />
      </div>
      <div className="home3">
        <div className="home3-1">
          <h1 className="home-one">
            Start building with our APIs for absolutely free.
          </h1>
          <div className="home-two">
            <input type="text" placeholder="Enter email address" />
            <button className="navbar-btn">Schedule a Demo</button>
          </div>
          <span className="home-four">
            Have any questions? <span>Contact Us</span>
          </span>
        </div>
        <img src={"/home/Group 30.svg"} alt="" className="home-img2" />
      </div>
      <div className="home-five">
        <div className="home-six">
          <h1>Who we work with</h1>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{" "}
          </p>
          <button>About Us</button>
        </div>
        <div>
          <img src={"/home/Group 9 (10).svg"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
