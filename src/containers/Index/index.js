import React, { Component } from "react";
import SocialLinks from "../../components/SocialLinks";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="profileCard">
            <div className="profileCard__imgWrapper">
              <img
                src="https://bslthemes.com/ryan/demo/images/bg.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="profileCard__profileImg">
              <img src="/profile_image.jpg" loading="lazy" alt="" />
            </div>
            <div className="profileCard__infoWrapper">
              <div className="profileCard__infoWrapper--heading">
                Kanishk Anand
              </div>
              <div className="profileCard__infoWrapper--subheading">
                Web Developer
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
