import React from "react";
// uses React Router's Link component to change the url but stay on the same page
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>Deep Thoughts</h1>
      </div>
    </header>
  );
};

export default Header;
