import React from "react";
import "./index.scss";

export default () => {
  return (
    <div className="highlights">
      <ul>
      <li>
         Revamped and re-architectured the B2B Ad booking portal from AngularJS to latest tech stack, which led to 50% improvement in the Core Web Vitals for performance.
      </li>
      <li>
        Part of the team for developing and maintaing component library reused within Ad Platforms ecosystem. 
      </li>
      <li>
         Leads the Ad remdering logic on devices for Apple News and Apple Stocks app.
        </li>
        <li>
          Responsible for performance of consumer facing website, developed a
          date-management library to replace MomentJS.
        </li>
        <li>
          Introduced Blue/Green deployment strategy and managed the
          infrastructure migration.
        </li>
        <li>
          Revamped the user session logic, reducing upto 60% of the
          infrastructure cost.
        </li>
        <li>
          Designed and implemented OYO Microsite framework using{" "}
          <a href="https://medium.com/oyotech/react-decorators-5499e95a4cac">
            React Decorators.
          </a>
        </li>
        <li>Introduced PWA's offline experience using service worker.</li>
        <li>
          {" "}
          Rerouting of website using{" "}
          <a href="https://medium.com/oyotech/understanding-nginx-lookup-server-and-location-blocks-a85cf0c57e35">
            NGINX.
          </a>
        </li>
        <li>
          Contribited to development and launch of TWA based OYO Lite App.
        </li>
        <li> Revamped OYO Rooms website's user journey experience. </li>
      </ul>
    </div>
  );
};
