import React from "react";
import "./Home.css";

const Home = () => {
  console.log("home");
  return (
    <div className="logo">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1 style={{ color: "white" }}>QuillQuest Library Management System</h1>
      </div>
      <img
        src="../Assets/"
        alt="Logo"
        style={{
          maxWidth: "200px",
          marginTop: "20px",
          filter: "blur(2px)",
        }}
      />

    </div>
  );
};

export default Home;
