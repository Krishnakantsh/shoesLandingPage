import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">ShopNow</div>
        <div className="navList">
          <ul>
            <li className="listItem active"><a href="">Home</a></li>
            <li className="listItem"><a href="">Trending</a></li>
            <li className="listItem"><a href="">About</a></li>
            <li className="listItem"><a href="">Contact</a></li>
            <li className="listItem"><a href="">Services</a></li>
          </ul>
        </div>
        <button type="button">Login</button>
      </nav>

    </div>

  );
}

export default Navbar;