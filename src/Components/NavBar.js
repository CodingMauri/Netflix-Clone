import React from "react";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <img src  = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
        </div>
        <ul>Home</ul>
        <ul>TV Shows</ul>
        <ul>Movies</ul>
        <ul>New & Popular</ul>
        <ul>My List</ul>
        <ul>Browse By Language</ul>

      </div>
        <div className = "profile-cntnr">
          <div className = "profile">
            <p>ACCOUNT</p>
          </div>
        </div>
      
    </div>
  );
}
