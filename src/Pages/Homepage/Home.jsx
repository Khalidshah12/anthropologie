import React, { useEffect } from "react";
import "./HOme.css";
// import Layout from "../../components/Layout";
import MultipleItems from "./Slider";
// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import Navbar2 from "../../components/Navbar/Navbar2";

const Home = () => {

  useEffect(() => {
    document.title = 'Anthropologie - Womens Clothing, Accessories & Home'
  }, [])

  return (
    <div>
      <div>
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
        <div className="tgirdDiv">
          <img
            src="https://images.ctfassets.net/5de70he6op10/3w8rGkLqypJyMI94W5jAz6/b1a47476e9fa52841b06bcbf50e8c337/LS_M2a.jpg?w=856&q=80&fm=webp"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/5de70he6op10/4dc0UZzh9jWMuJPdVGcr2v/8a7ace4023132337f5e9a81d4ac819f4/LS_M2b.jpg?w=856&q=80&fm=webp"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/5de70he6op10/28WqNdcNbssmLjzWncssjE/a9ef1a745783404fb8f054796735b3b1/LS_M2c.jpg?w=856&q=80&fm=webp"
            alt=""
          />
        </div>
        <div className="banners">
          <img
            src="https://images.ctfassets.net/5de70he6op10/sElVOkh1LlYRV8lFchscj/3fa66885dac24294a26ad182591b8639/ALiving_HPG_LS_01-1.jpg?w=2640&q=80&fm=webp"
            alt=""
          />
        </div>
        <div className="banners1">
          <img
            src="https://images.ctfassets.net/5de70he6op10/6YcDf5MI12J4gw9cOaz9WP/70f858a9574c2e0ff43b2b7bdc6e61af/LS_M4.jpg?w=2641&q=80&fm=webp"
            alt=""
          />
        </div>
        <div className="tgirdDiv">
          <img
            src="https://images.ctfassets.net/5de70he6op10/7fzJY7mnX3XvCv1RNf6mTp/79d5f396c261126621d9a105c88faaf3/RR_Kitchen_Dining.jpg?w=856&q=80&fm=webp"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/5de70he6op10/6qpsukHAAtvED0Tc12y84m/645098d9a2f3d0da07fc3ad86e11a228/RR_Bedding.jpg?w=856&q=80&fm=webp"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/5de70he6op10/7xfJSO2og2DDZa4IpAilFz/882783ed4607343a932d4d975fe22be6/RR_Furniture.jpg?w=856&q=80&fm=webp"
            alt=""
          />
        </div>
        <h1 className="YouMayAlsoLike">You May Also Like</h1>
        <div className="tgirdDiv1">
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/4Uq666sNSwxPJkwfkNekwE/229e99ddfcc9ed0f9fb4c1d0d3f63df9/MTE_1.jpg?w=856&q=80&fm=webp"
              alt=""
            />
            <h1 className="Hi">new! BUNDLE with JOY</h1>
            <p className="p">
              Save time (and $$$) with curated gift sets for everyone on your
              list.
            </p>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/5HxUPMjRhRmYBhDzG7lYb8/8bd8da754c35f286701c479b6fb4885e/LS_MTE_2.jpg?w=856&q=80&fm=webp"
              alt=""
            />
            <h1 className="Hi">The Holiday Beauty Shop</h1>
            <p className="p">Ready, set, let's glow gifting!</p>
          </div>

          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/673WCOKnBlUgppuS7WBHzB/fba4ac8902af41c13345308297b6c9f5/MTE_3.jpg?w=856&q=80&fm=webp"
              alt=""
            />
            <h1 className="Hi"> THE ART OF THE DRESS</h1>
            <p className="p">
              Introducing a lovingly curated collection of sculptural
              silhouettes, enlightened details, and everlasting impressions.
            </p>
          </div>
        </div>
        <MultipleItems />
        <h1 className="YouMayAlsoLike">About Us</h1>
        <p className="ourMission">
          Our mission at Anthropologie has always been to surprise and delight
          you with unexpected, distinctive finds for your closet and home. We
          source and craft all of our products with care, ensuring that any
          treasure you find at Anthropologie is unique, just like you. Explore
          our dress shop to find styles and fits perfect for any occasion, from
          cocktail parties to weddings to casual daytime silhouettes. Browse
          party skirts, wide-leg
        </p>
      </div>
    </div>
  );
};

export default Home;

// 1. App -- routing.js
// 2. in Routing.js import all pages
// 3. Aadd layout for Specific pages - for example Homepage will be wrapped in a layout component
