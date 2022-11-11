import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="firstt">
        <div className="hello">
          <div className="firstly">
            <h1>Sign Up for Email</h1>
            <p>
              Receive early access to new arrivals, sales, exclusive content,
              events and much more!
            </p>
          </div>
          <div className="firstly1">
            <input placeholder="Enter Email Address" />
            <button>SUBMIT</button>
          </div>
        </div>
        <h1 className="end">
          By signing up, you will receive Anthropologie offers, promotions and
          other commercial messages. You are also agreeing to Anthropologie’s
          Privacy Policy. You may unsubscribe at any time.
        </h1>

        {/* Footer Here */}
        <div className="footer">
          <li className="Box">
            <p>Help</p>
            <ul>Track your Order</ul>
            <ul>Start A Return Or Exchange (Us)</ul>
            <ul>Returns & Exchanges</ul>
            <ul>Customer Service</ul>
            <ul>Current Promotions</ul>
            <ul>Product Recalls</ul>
          </li>

          <li className="Box">
            <p>About Us</p>
            <ul>Our Story</ul>
            <ul>Events </ul>
            <ul>A Greater Good</ul>
            <ul>Diversity & Inclusion</ul>
            <ul>Stories</ul>
          </li>
          <li className="Box">
            <p>Services</p>
            <ul>AnthroPerks</ul>
            <ul>Gift Cards</ul>
            <ul>AnthroLiving Designer & Trades Program</ul>
            <ul>Furniture : Guides & Services</ul>
            <ul> Store Pickup & Collection Points </ul>
            <ul> Klarma</ul>
          </li>
          <li className="Box">
            <p>Connect</p>
            <ul>Contact us</ul>
            <ul>Stay Connected</ul>
            <ul>Careers</ul>
            <ul>Staying Services</ul>
            <ul>Request A Catalog</ul>
          </li>
          <li className="Box">
            <ul>
              <img
                className="logos"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPY5POpiaaROnvHrSSSRbqqNUQ9qLg2Y_YaFj70oSxw&s"
                alt=""
              />
              Story Locater
            </ul>
            <ul>
              <img
                className="logos"
                src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
                alt=""
              />
              Get Email
            </ul>
          </li>
        </div>
        <div className="SocialHandles">
          <img
            src="https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg"
            alt=""
          />
          <img
            className="Sociallogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
            alt="facebook-Logo"
          />
          <img
            className="Sociallogo"
            src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
            alt="twitter-logo"
          />
          <img
            className="Sociallogo"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"
            alt="insta"
          />
          <img
            className="Pinlogo"
            src="https://assets.turbologo.com/blog/en/2021/11/14085618/pinterest-emblem.png"
            alt="pinterest"
          />
        </div>
        <div>
          <img
            className="banner"
            src="https://images.ctfassets.net/5de70he6op10/2DRgCRXNIEkk0wIqUo2ywa/20ea44a95fb361eaf034b42eec179d44/_site_footer__download_app_enable_push_.jpg"
            alt=""
          />
        </div>
        <div className="country">
          <p>US</p>
          <p>France</p>
          <p>Germany</p>
          <p>Italy</p>
          <p>Spain</p>
          <p>UK</p>
        </div>

        <div className="footerEnd">
          <div className="footerpart">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>CA Transparency</p>
            <p>Accessibility</p>
            <p>URBN.com</p>
            <p>For CA Residence</p>
          </div>
          <p className="last">2022 URBN.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
