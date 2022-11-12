import React from "react";
import "../assets/css/FooterHome.css";
// images imported
import discord_icon from "../assets/images/discord_icon.png";
import facebook_icon from "../assets/images/facebook_icon.png";
import insta_icon from "../assets/images/insta_icon.png";
import twitter_icon from "../assets/images/twitter_icon.png";
import youtube_icon from "../assets/images/youtube_icon.png";
function Footer() {
  return (
    <div className="footerHomeContainer">
      <div className="footerHomeEmailSectionContainer">
        <div className="footerHomeSection1Head1">Stay with us and get latest updates</div>
        <div className="footerHomeSection1Head2">
          Join our mailing list to stay updated about development at Medico
        </div>
        <div className="footerHomeEmailContainer">
          <input
            placeholder="Enter Your Email Addrress"
            className="footerHomeEmailInput"
            type={"email"}
          />
          <button className="footerHomeEmailSubmitIcon">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="footerHomeAboutContainer">
        <div className="footerHomeAboutGDSC">
          <div className="footerHomeAboutGDSCHead">
            {/* <div className="footerHomeAboutGDSCLogoContainer">
              <img
                className="footerHomeAboutGDSCLogo"
                src={"https://gdscmbcet.com/assets/img/logos/dsc_logo.png"}
                alt="GDSC logo"
              />
            </div> */}
            <div className="footerHomeAboutGDSCText">ABOUT MEDICO </div>
          </div>
          <div className="footerHomeAboutGDSCTextDesc">
          We think that everyone should have easy access to excellent healthcare. Our aim is to make the procedure as simple as possible for our patients and to offer treatment no matter where they are — in person or at their convenience.
          </div>
        </div>
        <div className="footerHomeAboutMarketContainer">
          <div className="footerHomeAboutMarketHead">Contact Us</div>
          <div className="footerHomeAboutMarketDesc">
            <div>medico123@gmail.com</div>
            <div>+919993452190</div>
            {/* <div>Articles</div>
            <div>How it works</div>
            <div>Helps</div> */}
          </div>
        </div>
        <div>
          {/* <div className="footerHomeAboutLinksHead">Links</div>
          <div className="footerHomeAboutLinkDesc">
            <div>Token</div>
            <div>API</div>
          </div> */}
        </div>
      </div>
      <div className="footerHomeAboutJoinCom">
        <div className="footerHomeAboutComHead">Join Our Community</div>
        <div className="footerHomeAboutComDesc">
          <div className="footerHomeAboutComDescContainer">
            {/* <a
              href="https://www.youtube.com/c/GDSCGTBIT/featured"
              rel="noreferrer"
              target={"_blank"}
            >
              <img
                className="footerHomeAboutComIcon"
                src={discord_icon}
                alt={"icon"}
              />
            </a> */}
            <a
              href="https://www.facebook.com/karan.bagga.56884"
              rel="noreferrer"
              target={"_blank"}
            >
              <img
                className="footerHomeAboutComIcon"
                src={facebook_icon}
                alt={"icon"}
              />
            </a>
            <a
              href="https://www.instagram.com/baggakaran_19/"
              rel="noreferrer"
              target={"_blank"}
            >
              <img
                className="footerHomeAboutComIcon"
                src={insta_icon}
                alt={"icon"}
              />
            </a>
            <a
              href="https://twitter.com/baggakaran_19"
              rel="noreferrer"
              target={"_blank"}
            >
              <img
                className="footerHomeAboutComIcon"
                src={twitter_icon}
                alt={"icon"}
              />
            </a>
            {/* <a
              href="https://www.youtube.com/c/GDSCGTBIT/featured"
              rel="noreferrer"
              target={"_blank"}
            >
              <img
                className="footerHomeAboutComIcon"
                src={youtube_icon}
                alt={"icon"}
              />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
