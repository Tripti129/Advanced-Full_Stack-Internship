import React from "react";
import "./App.css";
import photo from "./tripti.jpeg"

const App = () => {
  return (
    <div className="page">
      <div className="card">
        <div className="left">
          <img src={photo} className="profile-img" />
        </div>

        <div className="right">
          <h1>Tripti Mittal</h1>
          <h2>B.Tech CSE Student</h2>

          <div className="line"></div>

          <p>📞 +91 7056935169</p>
          <p>✉️ triptimittal@gmail.com</p>
          <p>🔗 www.linkedin.com/in/-tripti-mittal/</p>
          <p>📍 Panipat, Haryana</p>
        </div>
      </div>
    </div>
  );
};

export default App;