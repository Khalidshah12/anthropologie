import React from "react";
import "./HOme.css";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="FirstDiv">
        <img
          src="https://images.ctfassets.net/5de70he6op10/66gBHQY9rlKtf5IItLdMCa/eb48274717871eb64ba75900e042218f/LS_M0_Banner_a.jpg?w=630&q=80&fm=webp"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/7FtJ5t3fiV8RM8Q80ufmqS/4b8d59935ecd871b8f0b1055665bbe09/LS_M0_Banner_b.jpg?w=630&q=80&fm=webp"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/6Rg6bbVw5EcY8ZFGylD3Lt/52e96081fac4772cbd0e5aabda58219a/LS_M0_Banner_c.jpg?w=630&q=80&fm=webp"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/2jP2GsJVfSqC66yrxJJPOX/a4b3ecfc7c2a6de75aa10b764c9cfe9f/LS_M0_Banner_d.jpg?w=630&q=80&fm=webp"
          alt=""
        />
      </div>
      <div className="SecondDiv">
        <img
          src="https://images.ctfassets.net/5de70he6op10/iMM14RuhLCVUGYVmrKvc9/b97a6a1d371ca72bbc1ae9aaf4a11f26/LS_M1a.jpg?w=1302&q=80&fm=webp"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/6pgHrENVmjeLfmWwwGZuiG/7087546a3b3529f4de0de0ccedca384e/LS_M1b.jpg?w=1302&q=80&fm=webp"
          alt=""
        />
      </div>
    </Layout>
  );
};

export default Home;

// 1. App -- routing.js
// 2. in Routing.js import all pages
// 3. Aadd layout for Specific pages - for example Homepage will be wrapped in a layout component
