import React from "react";
import Layout from "./Layout";

const PageNotFound = () => {
  const logo =
    "https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1";
  return (
    <Layout>
      <div className="container">
        <img src={logo} alt="logo" />
      </div>
    </Layout>
  );
};

export default PageNotFound;
