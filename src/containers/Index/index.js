import React, {  useRef, useState } from "react";
import SocialLinks from "../../components/SocialLinks";
import ProfileCardFooter from "../../components/ProfileCardFooter";
import ProfileInfo from "../../components/ProfileInfo";
import NavigationTab from "../../components/NavigationTab";
import ThemeToggle from '../../components/ThemeToggle';
import { detectMobile } from "../../utils/helper";
import { PORTFOLIO_DATA, PERSONAL_INFO } from "./constants";
import "./index.scss";

export default function Index() {
  const [selectedTab, updateTab] = useState("about");

  const changeTab = (tab) => {
    if (tab) {
      updateTab(tab);
    }
    if (detectMobile()) {
      profileInfoRef.current?.scrollIntoView({behaviour: 'smooth'})
    }
  };
  
  const profileInfoRef = useRef(null);

  return (
    <div className="container">
      <div className="wrapper">
        <ThemeToggle />
        <NavigationTab currentActive={selectedTab} changeTab={changeTab} />
        <div className="profileCard">
          <div className="profileCard__imgWrapper">
            <img
              src={`${process.env.PUBLIC_URL}/background.jpeg`}
              alt="background profile"
              loading="lazy"
            />
          </div>
          <div className="profileCard__profileImg">
            <img src={`${process.env.PUBLIC_URL}/profile_image.jpg`} loading="lazy" alt="profile" />
          </div>
          <div className="profileCard__infoWrapper">
            <div className="profileCard__infoWrapper--heading">
              {PERSONAL_INFO.name}
            </div>
            <div className="profileCard__infoWrapper--subheading">
              {PERSONAL_INFO.profile}
            </div>
            <SocialLinks />
          </div>
          <ProfileCardFooter />
        </div>
        <ProfileInfo ref={profileInfoRef} data={PORTFOLIO_DATA[selectedTab]} />
      </div>
    </div>
  );
}
