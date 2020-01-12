import React, { Component } from "react";
import SocialLinks from "../../components/SocialLinks";
import ProfileCardFooter from "../../components/ProfileCardFooter";
import ProfileInfo from "../../components/ProfileInfo";
import InfoBadge from "../../components/InfoBadge";
import ProgressBar from "../../components/ProgressBar";
import WorkExCard from "../../components/WorkExCard";
import NavigationTab from "../../components/NavigationTab";
import "./index.scss";
import Highlights from "../../components/Highlights";

const data = {
  about: {
    sections: [
      {
        heading: "About Me",
        topSection: {
          heading: "",
          text:
            "Prolific, full stack web developer with a passion for metrics and beating former 'best-yets.' Delivered more than 25 projects meeting highest web development standards, with optimal performance benchmarks. Decreased rework by 22% and infrastructure costs by 50%. Consistently receive high user experience scores for all web development projects, including a 100/100 on Lighthouse Audit. Passionate about building world class web applications."
        },
        bottomSection: {
          heading: "",
          list: [
            {
              Component: InfoBadge,
              props: { badgeText: "Age....", badgeSubtext: 24 }
            },
            {
              Component: InfoBadge,
              props: {
                badgeText: "Residence....",
                badgeSubtext: "Gurugram, India"
              }
            },
            {
              Component: InfoBadge,
              props: {
                badgeText: "Professional Experience....",
                badgeSubtext: "2 years"
              }
            },
            {
              Component: InfoBadge,
              props: {
                badgeText: "Current Role....",
                badgeSubtext: "Web Developer"
              }
            },
            {
              Component: InfoBadge,
              props: {
                badgeText: "Email....",
                badgeSubtext: "kanishk.kanishk.anand@gmail.com"
              }
            }
          ]
        }
      },
      {
        heading: "Highlights",
        topSection: {
          Component: Highlights
        }
      }
    ]
  },
  skills: {
    sections: [
      {
        heading: "Skills",
        bottomSection: {
          list: [
            {
              Component: ProgressBar,
              props: { name: "Javascript", highLight: 90 }
            },
            {
              Component: ProgressBar,
              props: { name: "React JS", highLight: 85 }
            },
            {
              Component: ProgressBar,
              props: { name: "Redux JS", highLight: 75 }
            },
            {
              Component: ProgressBar,
              props: { name: "Node JS", highLight: 80 }
            },
            {
              Component: ProgressBar,
              props: { name: "HTML", highLight: 70 }
            },
            {
              Component: ProgressBar,
              props: { name: "CSS", highLight: 65 }
            },
            { Component: ProgressBar, props: { name: "Nginx", highLight: 80 } },
            {
              Component: ProgressBar,
              props: { name: "Web Performace", highLight: 75 }
            },
            { Component: ProgressBar, props: { name: "Redis", highLight: 65 } },
            {
              Component: ProgressBar,
              props: { name: "AWS", highLight: 60 }
            }
          ]
        }
      }
    ]
  },
  experience: {
    sections: [
      {
        heading: "Work Experience",
        bottomSection: {
          list: [
            {
              Component: WorkExCard,
              props: {
                from: "May, 2018",
                to: "present",
                companyName: "OYO Rooms",
                role: "Web Developer",
                description:
                  "Responsible for revamping and managing the consumer facing website, improving web performance scores, latencies, and developing offline experience."
              }
            },
            {
              Component: WorkExCard,
              props: {
                from: "Jan, 2018",
                to: "May, 2018",
                companyName: "OYO Rooms",
                role: "Intern",
                description:
                  "Introduced user personalization, and implement OYO Wizard as a feature on consumer facing website."
              }
            },
            {
              Component: WorkExCard,
              props: {
                from: "June, 2016",
                to: "August, 2016",
                companyName: "IntelliRise Solutions",
                role: "Intern",
                description:
                  "Developed an e-commerce consumer facing website template."
              }
            }
          ]
        }
      }
    ]
  },
  education: {
    sections: [
      {
        heading: "Education",
        bottomSection: {
          list: [
            {
              Component: WorkExCard,
              props: {
                to: "May, 2018",
                from: "Aug, 2014",
                role:
                  "Bacherlors of Technology, Computer Science and Engineering",
                companyName: "Shiv Nadar University",
                description: [
                  "CGPA: 9.36/10",
                  "Delivered multiple industry standard projects",
                  "Part of Project Samuday, an HCL led initiative to uplift education in Indian villages"
                ]
              }
            },
            {
              Component: WorkExCard,
              props: {
                to: "March, 2014",
                from: "March, 2013",
                role: "Senior Secondary School",
                companyName: "The Asian Scool",
                description: [
                  "Scored 94.6%",
                  "Part of debating and quizzing socities"
                ]
              }
            },
            {
              Component: WorkExCard,
              props: {
                to: "March, 2012",
                from: "March, 2011",
                role: "Secondary School",
                companyName: "The Asian Scool",
                description: [
                  "CGPA: 10/10",
                  "Won several accolades in co-curricular activities"
                ]
              }
            }
          ]
        }
      }
    ]
  }
};

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "about"
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    if (tab) {
      this.setState({ selectedTab: tab });
    }
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <NavigationTab
            currentActive={selectedTab}
            changeTab={this.changeTab}
          />
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
              <ProfileCardFooter />
            </div>
          </div>
          <ProfileInfo data={data[selectedTab]} />
        </div>
      </div>
    );
  }
}
