import InfoBadge from "../../components/InfoBadge";
import ProgressBar from "../../components/ProgressBar";
import WorkExCard from "../../components/WorkExCard";
import Highlights from "../../components/Highlights";

export const PERSONAL_INFO = {
  profile: "Software Engineer",
  name: "Kanishk Anand",
};

export const PORTFOLIO_DATA = {
  about: {
    sections: [
      {
        heading: "About Me",
        topSection: {
          heading: "",
          text: `Full stack software developer who loves to solve business problems
            with code. Have a keen eye towards pixel perfect UI, user friendly UX, web performance and security.`,
        },
        bottomSection: {
          heading: "",
          list: [
            {
              Component: InfoBadge,
              props: {
                badgeText: "Age....",
                badgeSubtext: new Date().getFullYear() - 1996,
              },
            },
            {
              Component: InfoBadge,
              props: {
                badgeText: "Residence....",
                badgeSubtext: "Hyderabad, India",
              },
            },
            {
              Component: InfoBadge,
              props: {
                badgeText: "Professional Experience....",
                badgeSubtext: `${
                  new Date().getFullYear() -
                  2018 +
                  (new Date().getMonth() % 6) / 10
                } years`,
              },
            },
            {
              Component: InfoBadge,
              props: {
                badgeText: "Current Role....",
                badgeSubtext: "Software Engineer",
              },
            },
            {
              Component: InfoBadge,
              props: {
                badgeText: "Email....",
                badgeSubtext: "kanishk.kanishk.anand@gmail.com",
              },
            },
          ],
        },
      },
      {
        heading: "Highlights",
        topSection: {
          Component: Highlights,
        },
      },
    ],
  },
  skills: {
    sections: [
      {
        heading: "Skills",
        bottomSection: {
          list: [
            {
              Component: ProgressBar,
              props: { name: "Javascript", highLight: 90 },
            },
            {
              Component: ProgressBar,
              props: { name: "Angular", highLight: 80 },
            },
            {
              Component: ProgressBar,
              props: { name: "Stencil JS", highLight: 60 },
            },
            {
              Component: ProgressBar,
              props: { name: "React", highLight: 60 },
            },
            {
              Component: ProgressBar,
              props: { name: "Redux", highLight: 55 },
            },
            {
              Component: ProgressBar,
              props: { name: "Node JS", highLight: 55 },
            },
            {
              Component: ProgressBar,
              props: { name: "HTML", highLight: 70 },
            },
            {
              Component: ProgressBar,
              props: { name: "CSS", highLight: 65 },
            },
            { Component: ProgressBar, props: { name: "Nginx", highLight: 80 } },
            {
              Component: ProgressBar,
              props: { name: "Web Performace & Security", highLight: 70 },
            },
          ],
        },
      },
    ],
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
                from: "July, 2020",
                to: "Present",
                companyName: "Apple",
                role: "Software Engineer",
                description:
                  "Integral member of Software Apps, Ad Platforms team, managing the Ad booking portal for B2B cosnumers, leading the Ads rendering in the Apple News and Apple Stocks app, which includes tech overhaul & architecture, and developing a component library using web components",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "Jan, 2020",
                to: "July, 2020",
                companyName: "OYO Rooms",
                role: "Senior Frontend Developer",
                description:
                  "Part of Consumer Experience Platform team, responsible for infrastructure, website performance, designing architecture for features and writing & maintaing libraries which can be resued across teams.",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "May, 2018",
                to: "Dec, 2019",
                companyName: "OYO Rooms",
                role: "Frontend Developer",
                description:
                  "Responsible for revamping and managing the consumer facing website, improving web performance scores, latencies, and developing offline experience.",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "Jan, 2018",
                to: "May, 2018",
                companyName: "OYO Rooms",
                role: "Intern",
                description:
                  "Introduced user personalization, and implement OYO Wizard as a feature on consumer facing website.",
              },
            },
            {
              Component: WorkExCard,
              props: {
                from: "June, 2016",
                to: "August, 2016",
                companyName: "IntelliRise Solutions",
                role: "Intern",
                description:
                  "Developed an e-commerce consumer facing website template.",
              },
            },
          ],
        },
      },
    ],
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
                role: "Bacherlors of Technology, Computer Science and Engineering",
                companyName: "Shiv Nadar University",
                description: [
                  "CGPA: 9.36/10",
                  "Delivered multiple industry standard projects",
                  "Part of Project Samuday, an HCL led initiative to uplift education in Indian villages",
                ],
              },
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
                  "Part of debating and quizzing socities",
                ],
              },
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
                  "Won several accolades in co-curricular activities",
                ],
              },
            },
          ],
        },
      },
    ],
  },
};
