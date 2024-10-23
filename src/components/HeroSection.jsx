import React from "react";

function HeroSection() {
  return (
    <div>
      <main className="hero-main">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE BEST</h1>
          <h4>Are you sure about your interest of bear shoes if answer is yes then you are now at right place.</h4>

          <div className="hero-button">
             <button type="button">Shop Now</button>
             <button type="button">Category</button>
          </div>
          <div className="hero-cross-sites">
            <h6>Also available on</h6>
            <div className="sites-icons">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png" alt="flipkart" />
              <img src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png" alt="amazon" />
            </div>
          </div>
        </div>
        <div className="hero-img"><img src="https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-12.png" alt="shoe img" /></div>
      </main>
    </div>

  );
}

export default HeroSection;