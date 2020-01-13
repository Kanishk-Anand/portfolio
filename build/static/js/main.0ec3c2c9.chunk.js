(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(35)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(9),i=t.n(r),c=(t(20),t(10)),s=t(11),l=t(13),m=t(12),p=t(5),d=t(14),u=t(2),h=t(4),g=(t(26),function(e){return o.a.createElement("div",{className:"socialLinks"},o.a.createElement("a",{href:"https://www.linkedin.com/in/kanishk-anand-b86b07121/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(u.a,{icon:h.b,className:"socialLinks__icons",size:"1x"})),o.a.createElement("a",{href:"https://github.com/Kanishk-Anand/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(u.a,{icon:h.a,className:"socialLinks__icons",size:"1x"})),o.a.createElement("a",{href:"https://stackoverflow.com/users/10867662/kanishk-anand/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(u.a,{icon:h.d,className:"socialLinks__icons",size:"1x"})),o.a.createElement("a",{href:"https://medium.com/@kanishk.kanishk.anand/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(u.a,{icon:h.c,className:"socialLinks__icons",size:"1x"})))}),b=t(3),f=(t(27),function(){return o.a.createElement("div",{className:"footerWrapper"},o.a.createElement("a",{href:"/portfolio/kanishk_anand_resume.pdf",download:"kanishkAnandResume.pdf",className:"footerWrapper__btn"},"Download CV",o.a.createElement(u.a,{icon:b.b})))}),v=(t(28),function(e){var a=e.data.sections,t=void 0===a?[]:a;return o.a.createElement("div",{className:"infoWrapper"},t.length&&t.map((function(e){var a=e.topSection&&e.topSection.Component;return o.a.createElement(o.a.Fragment,null,e.heading&&o.a.createElement("div",{className:"infoWrapper__header"}," ",e.heading," ")||null,e.topSection&&o.a.createElement("div",{className:"infoWrapper__topSection"},e.topSection.text&&o.a.createElement("div",{className:"infoWrapper__text"}," ",e.topSection.text," ")||o.a.createElement(o.a.Fragment,null,a&&o.a.createElement(a,e.topSection.props)||null)),e.bottomSection&&o.a.createElement("div",{className:"infoWrapper__bottomSection"},e.bottomSection&&e.bottomSection.list&&e.bottomSection.list.length&&e.bottomSection.list.map((function(e){var a=e.Component;return o.a.createElement(o.a.Fragment,null,a&&o.a.createElement(a,e.props)||o.a.createElement("p",{className:"infoWrapper__list"},e))}))))})))}),E=(t(29),function(e){var a=e.badgeText,t=e.badgeSubtext,n=e.className,r=e.badgeClassName;return a?o.a.createElement("div",{className:"badgeWrapper ".concat(n||"")},o.a.createElement("span",{className:"badgeWrapper__text ".concat(r||"")},a),t&&o.a.createElement("span",{className:"badgeWrapper__subtext"}," ",t)):null}),_=(t(30),function(e){var a=e.name,t=e.highLight,n=void 0===t?0:t;return a?o.a.createElement("div",{className:"progressBar"},o.a.createElement("div",{className:"progressBar__name"},a),o.a.createElement("div",{className:"progressBar__bar"},n&&o.a.createElement("div",{className:"progressBar__bar--highlight",style:{width:"".concat(n,"%")}}))):null}),k=(t(31),function(e){var a=e.to,t=void 0===a?"present":a,n=e.from,r=e.companyName,i=e.description,c=e.role;if(!r)return null;var s=null;return i&&(s=i.constructor===Array&&i.length?i.map((function(e){return o.a.createElement("li",null,e)})):i),o.a.createElement("div",{className:"workCard"},o.a.createElement(E,{badgeText:"".concat(n," - ").concat(t||""),badgeClassName:"workCard__badge"}),c&&o.a.createElement("div",{className:"workCard__role"},c," ")||null,r&&o.a.createElement("div",{className:"workCard__company"},r)||null,s&&o.a.createElement("div",{className:"workCard__description"}," ",s," "),o.a.createElement("div",{className:"workCard__divider"}))}),N=(t(32),function(e,a){var t=a.currentActive,n=a.changeTab,o=void 0===n?function(){}:n;e&&t&&e.toLowerCase()!==t.toLowerCase()&&o(e.toLowerCase())}),C=function(e){var a=e.currentActive;return o.a.createElement("div",{className:"navTab"},o.a.createElement("div",{className:"navTab__item ".concat("about"===a?" navTab__selected":""),onClick:function(){N("about",e)}},o.a.createElement(u.a,{icon:b.e}),o.a.createElement("div",{className:"navTab__text"},"About")),o.a.createElement("div",{className:"navTab__item ".concat("skills"===a?" navTab__selected":""),"data-state":"skills",onClick:function(){N("skills",e)}},o.a.createElement(u.a,{icon:b.d}),o.a.createElement("div",{className:"navTab__text"},"Skills")),o.a.createElement("div",{className:"navTab__item ".concat("experience"===a?" navTab__selected":""),onClick:function(){N("experience",e)}},o.a.createElement(u.a,{icon:b.a,"data-state":"experience"}),o.a.createElement("div",{className:"navTab__text"},"Experience")),o.a.createElement("div",{className:"navTab__item ".concat("education"===a?" navTab__selected":""),onClick:function(){N("education",e)}},o.a.createElement(u.a,{icon:b.c,"data-state":"education"}),o.a.createElement("div",{className:"navTab__text"},"Education")))},S=(t(33),t(34),{about:{sections:[{heading:"About Me",topSection:{heading:"",text:"Prolific, full stack web developer with a passion for metrics and beating former 'best-yets.' Delivered more than 25 projects meeting highest web development standards, with optimal performance benchmarks. Decreased rework by 22% and infrastructure costs by 50%. Consistently receive high user experience scores for all web development projects, including a 100/100 on Lighthouse Audit. Passionate about building world class web applications."},bottomSection:{heading:"",list:[{Component:E,props:{badgeText:"Age....",badgeSubtext:24}},{Component:E,props:{badgeText:"Residence....",badgeSubtext:"Gurugram, India"}},{Component:E,props:{badgeText:"Professional Experience....",badgeSubtext:"2 years"}},{Component:E,props:{badgeText:"Current Role....",badgeSubtext:"Web Developer"}},{Component:E,props:{badgeText:"Email....",badgeSubtext:"kanishk.kanishk.anand@gmail.com"}}]}},{heading:"Highlights",topSection:{Component:function(){return o.a.createElement("div",{className:"highlights"},o.a.createElement("ul",null,o.a.createElement("li",null," ","Designed and implemented OYO Microsite framework using"," ",o.a.createElement("a",{href:"https://medium.com/oyotech/react-decorators-5499e95a4cac"},"React Decorators.")),o.a.createElement("li",null,"Introduced PWA's offline experience using service worker."),o.a.createElement("li",null," ","Rerouting of website using"," ",o.a.createElement("a",{href:"https://medium.com/oyotech/understanding-nginx-lookup-server-and-location-blocks-a85cf0c57e35"},"NGINX.")),o.a.createElement("li",null,"Contribited to development and launch of TWA based OYO Lite App."),o.a.createElement("li",null," Revamped OYO Rooms website's user journey experience. ")))}}}]},skills:{sections:[{heading:"Skills",bottomSection:{list:[{Component:_,props:{name:"Javascript",highLight:90}},{Component:_,props:{name:"React JS",highLight:85}},{Component:_,props:{name:"Redux JS",highLight:75}},{Component:_,props:{name:"Node JS",highLight:80}},{Component:_,props:{name:"HTML",highLight:70}},{Component:_,props:{name:"CSS",highLight:65}},{Component:_,props:{name:"Nginx",highLight:80}},{Component:_,props:{name:"Web Performace",highLight:75}},{Component:_,props:{name:"Redis",highLight:65}},{Component:_,props:{name:"AWS",highLight:60}}]}}]},experience:{sections:[{heading:"Work Experience",bottomSection:{list:[{Component:k,props:{from:"May, 2018",to:"present",companyName:"OYO Rooms",role:"Web Developer",description:"Responsible for revamping and managing the consumer facing website, improving web performance scores, latencies, and developing offline experience."}},{Component:k,props:{from:"Jan, 2018",to:"May, 2018",companyName:"OYO Rooms",role:"Intern",description:"Introduced user personalization, and implement OYO Wizard as a feature on consumer facing website."}},{Component:k,props:{from:"June, 2016",to:"August, 2016",companyName:"IntelliRise Solutions",role:"Intern",description:"Developed an e-commerce consumer facing website template."}}]}}]},education:{sections:[{heading:"Education",bottomSection:{list:[{Component:k,props:{to:"May, 2018",from:"Aug, 2014",role:"Bacherlors of Technology, Computer Science and Engineering",companyName:"Shiv Nadar University",description:["CGPA: 9.36/10","Delivered multiple industry standard projects","Part of Project Samuday, an HCL led initiative to uplift education in Indian villages"]}},{Component:k,props:{to:"March, 2014",from:"March, 2013",role:"Senior Secondary School",companyName:"The Asian Scool",description:["Scored 94.6%","Part of debating and quizzing socities"]}},{Component:k,props:{to:"March, 2012",from:"March, 2011",role:"Secondary School",companyName:"The Asian Scool",description:["CGPA: 10/10","Won several accolades in co-curricular activities"]}}]}}]}}),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={selectedTab:"about"},t.changeTab=t.changeTab.bind(Object(p.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"changeTab",value:function(e){e&&this.setState({selectedTab:e})}},{key:"render",value:function(){var e=this.state.selectedTab;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"wrapper"},o.a.createElement(C,{currentActive:e,changeTab:this.changeTab}),o.a.createElement("div",{className:"profileCard"},o.a.createElement("div",{className:"profileCard__imgWrapper"},o.a.createElement("img",{src:"https://bslthemes.com/ryan/demo/images/bg.jpg",alt:"",loading:"lazy"})),o.a.createElement("div",{className:"profileCard__profileImg"},o.a.createElement("img",{src:"/portfolio/profile_image.jpg",loading:"lazy",alt:""})),o.a.createElement("div",{className:"profileCard__infoWrapper"},o.a.createElement("div",{className:"profileCard__infoWrapper--heading"},"Kanishk Anand"),o.a.createElement("div",{className:"profileCard__infoWrapper--subheading"},"Web Developer"),o.a.createElement(g,null),o.a.createElement(f,null))),o.a.createElement(v,{data:S[e]})))}}]),a}(n.Component);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.0ec3c2c9.chunk.js.map