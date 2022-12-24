import { BsPinterest, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.css";
// import { Link } from "react-router-dom";

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
          <form
            className="firstly1"
            action="https://getform.io/f/34bd933a-2684-49ec-8de1-4ba482473cc2"
            method="POST"
          >
            <input type="text" name="Email" placeholder="Enter Email Address" />
            <button>SUBMIT</button>
          </form>
        </div>
        <h1 className="end">
          By signing up, you will receive Anthropologie offers, promotions and
          other commercial messages. You are also agreeing to Anthropologie’s
          Privacy Policy. You may unsubscribe at any time .
        </h1>

        {/* Footer Here  */}
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
            <ul>
              <a
                href="https://www.anthropologie.com/help/our-story"
                target="_blank"
              >
                Our Story
              </a>
            </ul>
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
          <li className="Box1">
            <ul className="Boxes">
              <IoLocationSharp size="2em" />
              Story Locater
            </ul>
            <ul className="Boxes">
              <HiOutlineMail size="2em" />
              Get Email
            </ul>
          </li>
        </div>
        <div className="SocialHandles">
          <img
            src="https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg"
            alt=""
          />
          <a href="https://www.pinterest.com/anthropologie/" target="_blank">
            <BsPinterest size="1.5em" />
          </a>

          <a href=" https://www.instagram.com/anthropologie/" target="_blank">
            <GrInstagram size="1.5em" />
          </a>

          <a href="https://www.facebook.com/Anthropologie" target="_blank">
            <FaFacebookSquare size="1.5em" />
          </a>
          <a href="https://twitter.com/anthropologie" target="_blank">
            <BsTwitter size="1.5em" />
          </a>
        </div>
        <div>
          <img
            className="banner"
            src="https://images.ctfassets.net/5de70he6op10/6QWLFz6Lw3Gua0R6sZm9OU/61d2acdd321f73a35d140957a266f02c/Holiday22_SiteFooter_DownloadTheApp_LS.jpg"
            alt=""
          />
        </div>
        <div className="country">
          <a
            href="https://www.anthropologie.com/?cm_mmc=Anthro-_-Footer-_-en-US-_-en-US&cm_sp=FOOTER-_-INTL-_-en-US_en-US&ref=footer"
            target="_blank"
          >
            US
          </a>
          <a
            href="https://www.anthropologie.com/de-de?cm_mmc=Anthro-_-Footer-_-de-DE-_-en-US&ref=footer&utm_campaign=intl_footer&utm_medium=a_ref&utm_source=anthro_en-us&utm_term=de-de"
            target="_blank"
          >
            France
          </a>
          <a>Germany</a>
          <a>Italy</a>
          <a
            href="https://www.anthropologie.com/de-de?cm_mmc=Anthro-_-Footer-_-de-DE-_-en-US&ref=footer&utm_campaign=intl_footer&utm_medium=a_ref&utm_source=anthro_en-us&utm_term=de-de"
            target="_blank"
          >
            Spain
          </a>
          <a>UK</a>
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
          <div className="last">
            <p>2022 URBN.com. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
