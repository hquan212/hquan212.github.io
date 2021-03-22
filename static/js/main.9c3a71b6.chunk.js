(this.webpackJsonpwebby=this.webpackJsonpwebby||[]).push([[0],{37:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(29),i=a.n(c),r=(a(37),a(2)),o=a(3),l=a(5),d=a(4),h=a(30),j=a(15),m=a(31),b=a.n(m),u=a(0),p={0:"Iris-setosa",1:"Iris-versicolor",2:"Iris-virginica"},O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={sl:"1.2",sw:"1.3",pl:"2.1",pw:"1.4"},s.handleSubmit=s.handleSubmit.bind(Object(j.a)(s)),s.handleChange=s.handleChange.bind(Object(j.a)(s)),s}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.sl,s=t.sw,n=t.pl,c=t.pw,i={method:"post",url:"https://evening-caverns-08307.herokuapp.com/predict",headers:{"Content-Type":"application/json"},data:JSON.stringify({sl:a,sw:s,pl:n,pw:c})};b()(i).then((function(e){var t=JSON.stringify(e.data),a=t.lastIndexOf("["),s=t[a+1],n=t.slice(0,a);console.log(p[s]),alert(n+p[s])})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value)),console.log(this.state.sl)}},{key:"render",value:function(){var e=this.state,t=e.sl,a=e.sw,s=e.pl,c=e.pw;return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)("section",{id:"ML",className:"s-resume target-section",children:Object(u.jsxs)("div",{className:"row s-resume__section",children:[Object(u.jsx)("div",{className:"column large-3 tab-12",children:Object(u.jsx)("h3",{className:"section-header-allcaps",children:"ML Project"})}),Object(u.jsxs)("div",{className:"column large-9 tab-12",children:[Object(u.jsxs)("p",{children:["Welcome, here I am using a back end Python Flask app which allows me to POST a JSON body that contains the values for the classic Machine Learning project for"," ",Object(u.jsx)("a",{href:"https://www.kaggle.com/uciml/iris",children:"iris data classification"}),". You can enter different values for the sepal length, width and petal length, width to this KNN classification model hosted in a dockerized heroku backend flask app. The model can classify the species based on the input values and its pre learned dataset."]}),Object(u.jsxs)("form",{className:"submit",onSubmit:this.handleSubmit,children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("input",{type:"text",placeholder:"SepalLength : ".concat(t),name:"sl",onChange:this.handleChange})}),Object(u.jsx)("p",{children:Object(u.jsx)("input",{type:"text",placeholder:"SepalWidth : ".concat(a),name:"sw",onChange:this.handleChange})})]}),Object(u.jsxs)("span",{children:[" ",Object(u.jsx)("p",{children:Object(u.jsx)("input",{type:"text",placeholder:"PetalLength : ".concat(s),name:"pl",onChange:this.handleChange})}),Object(u.jsx)("p",{children:Object(u.jsx)("input",{type:"text",placeholder:"SepalWidth : ".concat(c),name:"pw",onChange:this.handleChange})}),Object(u.jsx)("p",{children:Object(u.jsx)("button",{children:" Submit "})})]})]})]})]})})})}}]),a}(s.Component),g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"ML",children:Object(u.jsx)(O,{})})}}]),a}(s.Component),x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{className:"s-header",children:[Object(u.jsx)("div",{className:"row s-header__nav-wrap",children:Object(u.jsx)("nav",{className:"s-header__nav",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#hero",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Say Hello"})})]})})}),Object(u.jsx)("a",{className:"s-header__menu-toggle",href:"#0",title:"Menu",children:Object(u.jsx)("span",{className:"s-header__menu-icon"})})]}),Object(u.jsxs)("section",{id:"hero",className:"s-hero target-section",children:[Object(u.jsx)("div",{className:"s-hero__bg rellax","data-rellax-speed":-7}),Object(u.jsx)("div",{className:"row s-hero__content",children:Object(u.jsx)("div",{className:"column",children:Object(u.jsxs)("div",{className:"s-hero__content-about",children:[Object(u.jsxs)("h1",{children:[" ",e.name]}),Object(u.jsxs)("h3",{children:["I'm a US based ",Object(u.jsx)("span",{children:e.role})," working with",Object(u.jsx)("span",{children:" React, Redux, NodeJS, Python, and AWS. "}),"I also tutor Data Science online. Start"," ",Object(u.jsxs)("a",{className:"smoothscroll",href:"#about",children:["scrolling"," "]}),"and learn more"," ",Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"about me"}),"."]}),Object(u.jsxs)("div",{className:"s-hero__content-social",children:[Object(u.jsx)("a",{href:"https://www.linkedin.com/in/robert-quan/",children:Object(u.jsx)("i",{className:"fab fa-linkedin","aria-hidden":"true"})}),Object(u.jsx)("a",{href:"https://github.com/hquan212",children:Object(u.jsx)("i",{className:"fab fa-github","aria-hidden":"true"})}),Object(u.jsx)("a",{href:"https://medium.com/@hquan212",children:Object(u.jsx)("i",{className:"fab fa-medium","aria-hidden":"true"})}),Object(u.jsx)("a",{href:"https://hired.com/x/9cedf57463c0596f8cc43cb39a8cd6e6",children:Object(u.jsx)("i",{className:"fab fa-black-tie","aria-hidden":"true"})})]})]})})}),Object(u.jsx)("div",{className:"s-hero__scroll",children:Object(u.jsxs)("a",{href:"#about",className:"s-hero__scroll-link smoothscroll",children:[Object(u.jsx)("span",{className:"scroll-arrow",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",style:{fill:"rgba(0, 0, 0, 1)",transform:"",msFilter:""},children:Object(u.jsx)("path",{d:"M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"})})}),Object(u.jsx)("span",{className:"scroll-text",children:"Scroll Down"})]})})]})]})})}}]),a}(s.Component),f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)("section",{id:"about",className:"s-about target-section",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"column large-3 tab-12",children:Object(u.jsx)("img",{className:"s-about__pic",src:"images/avatars/avatar.jpg",alt:""})}),Object(u.jsxs)("div",{className:"column large-9 tab-12 s-about__content",children:[Object(u.jsx)("h3",{children:"About Me"}),Object(u.jsxs)("p",{children:["Hows it going?! My name is ",e.name,", I am a Software Engineer with experience in a lot of different tech positions. I have progressive experience working as a"," ",Object(u.jsxs)("a",{className:"smoothscroll",href:"#resume",children:[Object(u.jsx)("span",{children:"Data Engineer"}),","," "]})," ",Object(u.jsxs)("a",{className:"smoothscroll",href:"#resume",children:[Object(u.jsx)("span",{children:"Machine Learning Engineer"}),","]})," ","and as a"," ",Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:Object(u.jsx)("span",{children:"Software Engineer"})})," ","I currently work at a start up in Houston, Texas where I have been working on the full stack platform written in Typescript and React. This website is a personal project written in those two technologies and showcase that work."]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"row s-about__content-bottom",children:[Object(u.jsxs)("div",{className:"column w-1000-stack",children:[Object(u.jsx)("h3",{children:"Contact Details"}),Object(u.jsxs)("p",{children:["Robert Quan ",Object(u.jsx)("br",{}),"Apt in the City ",Object(u.jsx)("br",{}),"Houston, TX 77007 US ",Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"tel:+1975432345",children:"+919 737 5059"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"mailto:#hquan212@gmail.com",children:"hquan212@gmail.com"})]})]}),Object(u.jsx)("div",{className:"column w-1000-stack",children:Object(u.jsxs)("a",{href:"https://hquan212-github-io.s3.us-east-2.amazonaws.com/Robert+Quan+Resume+Sofware.pdf",className:"btn btn--download",children:[Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",style:{fill:"rgba(0, 0, 0, 1)",transform:"",msFilter:""},children:[Object(u.jsx)("path",{d:"M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"}),Object(u.jsx)("path",{d:"M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"})]}),"Download CV"]})})]})]})]})})})}}]),a}(s.Component),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={readMore:!1},s}return Object(o.a)(a,[{key:"setReadMore",value:function(e){this.setState({readMore:e})}},{key:"render",value:function(){var e=this,t=this.props.resumeData,a=t.experience.slice(0,2).map((function(e){var t,a;return Object(u.jsxs)("div",{className:"resume-block",children:[Object(u.jsxs)("div",{className:"resume-block__header",children:[Object(u.jsx)("h4",{className:"h3",children:e.company}),Object(u.jsxs)("p",{className:"resume-block__header-meta",children:[Object(u.jsx)("span",{children:e.position}),Object(u.jsxs)("span",{className:"resume-block__header-date",children:[null===(t=e.beginningDate)||void 0===t?void 0:t.toLocaleDateString()," -"," ",e.endingDate?e.endingDate.toLocaleDateString():"Present"]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"resume-block__about",children:e.aboutCompany})]})]}),Object(u.jsx)("div",{style:{textAlign:"left"},children:null===(a=e.keyPoints)||void 0===a?void 0:a.slice(0,2).map((function(e,t){return Object(u.jsx)("li",{style:{paddingBottom:"13px",letterSpacing:"0.10em"},children:"".concat(e.slice(0,65),"...")},t)}))}),Object(u.jsxs)("div",{style:{textAlign:"right"},children:["Technologies:"," ",e.technologies?"".concat(e.technologies.slice(0,30),"..."):"None so far"]})]})})),s=t.experience.map((function(e){var t,a;return Object(u.jsxs)("div",{className:"resume-block",children:[Object(u.jsxs)("div",{className:"resume-block__header",children:[Object(u.jsx)("h4",{className:"h3",children:e.company}),Object(u.jsxs)("p",{className:"resume-block__header-meta",children:[Object(u.jsx)("span",{children:e.position}),Object(u.jsxs)("span",{className:"resume-block__header-date",children:[null===(t=e.beginningDate)||void 0===t?void 0:t.toLocaleDateString()," -"," ",e.endingDate?e.endingDate.toLocaleDateString():"Present"]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"resume-block__about",children:e.aboutCompany})]})]}),Object(u.jsx)("div",{style:{textAlign:"left"},children:null===(a=e.keyPoints)||void 0===a?void 0:a.map((function(e,t){return Object(u.jsx)("li",{style:{paddingBottom:"13px",letterSpacing:"0.10em"},children:e},t)}))}),Object(u.jsxs)("div",{style:{textAlign:"right"},children:["Technologies: ",e.technologies]})]})}));return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsxs)("section",{id:"resume",className:"s-resume target-section",children:[Object(u.jsxs)("div",{className:"row s-resume__section",children:[Object(u.jsx)("div",{className:"column large-3 tab-12",children:Object(u.jsx)("h3",{className:"section-header-allcaps",children:"Career"})}),Object(u.jsxs)("div",{className:"column large-9 tab-12",children:[!this.state.readMore&&a,this.state.readMore&&s,Object(u.jsxs)("a",{href:"/#resume",className:"read-more-link",onClick:function(){return e.setReadMore(!e.state.readMore)},children:[" ",Object(u.jsx)("p",{className:"resume-block__header-meta",children:Object(u.jsx)("span",{style:{fontSize:"28px"},children:this.state.readMore?"Read Less << ":"Read More >> "})})," "]})]})]}),Object(u.jsxs)("div",{className:"row s-resume__section",children:[Object(u.jsx)("div",{className:"column large-3 tab-12",children:Object(u.jsx)("h3",{className:"section-header-allcaps",children:"Education"})}),Object(u.jsx)("div",{className:"column large-9 tab-12",children:t.education.map((function(e){var t,a;return Object(u.jsxs)("div",{className:"resume-block",children:[Object(u.jsxs)("div",{className:"resume-block__header",children:[Object(u.jsx)("h4",{className:"h3",children:e.school}),Object(u.jsxs)("p",{className:"resume-block__header-meta",children:[Object(u.jsx)("span",{children:e.degree}),Object(u.jsxs)("span",{className:"resume-block__header-date",children:[null===(t=e.beginningDate)||void 0===t?void 0:t.toLocaleDateString()," -"," ",e.endingDate?e.endingDate.toLocaleDateString():"Present"]}),Object(u.jsx)("br",{}),e.awards&&Object(u.jsx)("span",{className:"resume-block__about",children:e.awards})]})]}),Object(u.jsx)("div",{style:{textAlign:"left"},children:null===(a=e.keyPoints)||void 0===a?void 0:a.map((function(e,t){return Object(u.jsx)("li",{style:{paddingBottom:"13px",letterSpacing:"0.10em"},children:e},t)}))})]})}))})]}),Object(u.jsxs)("div",{className:"row s-resume__section",children:[Object(u.jsx)("div",{className:"column large-3 tab-12",children:Object(u.jsx)("h3",{className:"section-header-allcaps",children:"Teaching"})}),Object(u.jsx)("div",{className:"column large-9 tab-12",children:t.teaching.map((function(e){var t,a;return Object(u.jsxs)("div",{className:"resume-block",children:[Object(u.jsxs)("div",{className:"resume-block__header",children:[Object(u.jsx)("h4",{className:"h3",children:e.company}),Object(u.jsxs)("p",{className:"resume-block__header-meta",children:[Object(u.jsx)("span",{children:e.position}),Object(u.jsxs)("span",{className:"resume-block__header-date",children:[null===(t=e.beginningDate)||void 0===t?void 0:t.toLocaleDateString()," -"," ",e.endingDate?e.endingDate.toLocaleDateString():"Present"]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"resume-block__about",children:e.aboutCompany})]})]}),Object(u.jsx)("div",{style:{textAlign:"left"},children:null===(a=e.keyPoints)||void 0===a?void 0:a.map((function(e,t){return Object(u.jsx)("li",{style:{paddingBottom:"13px",letterSpacing:"0.10em"},children:e},t)}))}),Object(u.jsxs)("div",{style:{textAlign:"right"},children:["Technologies: ",e.technologies]})]})}))})]}),Object(u.jsxs)("div",{className:"row s-resume__section",children:[Object(u.jsx)("div",{className:"column large-3 tab-12",children:Object(u.jsx)("h3",{className:"section-header-allcaps",children:"Skills"})}),Object(u.jsx)("div",{className:"column large-9 tab-12",children:Object(u.jsxs)("div",{className:"resume-block",children:[Object(u.jsx)("p",{children:"Here are my self ranked skill level of the technologies I am proficient in"}),Object(u.jsxs)("ul",{className:"skill-bars-fat",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("div",{className:"progress percent85"}),Object(u.jsx)("strong",{children:"Python"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("div",{className:"progress percent80"}),Object(u.jsx)("strong",{children:"Pandas"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("div",{className:"progress percent80"}),Object(u.jsx)("strong",{children:"Typescript"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("div",{className:"progress percent65"}),Object(u.jsx)("strong",{children:"SQL"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("div",{className:"progress percent50"}),Object(u.jsx)("strong",{children:"AWS"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("div",{className:"progress percent50"}),Object(u.jsx)("strong",{children:"C#"})]})]})]})})]})]})})}}]),a}(s.Component),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"onClick",value:function(){window.location.href="https://dvq9mc3l8kp03.cloudfront.net/"}},{key:"render",value:function(){var e=this;return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsxs)("section",{id:"portfolio",className:"s-portfolio target-section",children:[Object(u.jsx)("div",{className:"row s-portfolio__header",children:Object(u.jsx)("div",{className:"column large-12",children:Object(u.jsx)("h3",{children:"A Few Of My Latest Projects"})})}),Object(u.jsxs)("div",{className:"row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list",style:{gridColumnGap:"35%",justifyContent:"center"},children:[Object(u.jsxs)("div",{className:"column folio-item",children:[Object(u.jsx)("p",{className:"resume-block__header-meta",children:Object(u.jsx)("span",{children:"Notes App"})}),Object(u.jsx)("div",{onClick:function(){return e.onClick()},className:"folio-item__thumb",children:Object(u.jsx)("img",{style:{width:"100%",height:"100%"},src:"images/portfolio/notes192.png",srcSet:"images/portfolio/notes192.png 1x,  images/portfolio/notes256.png 2x",alt:"Notes App",title:"Notes App"})})]})," ",Object(u.jsxs)("div",{className:"column folio-item",children:[Object(u.jsx)("p",{className:"resume-block__header-meta",children:Object(u.jsx)("span",{children:"Serverless Machine Learning"})}),Object(u.jsx)("a",{href:"ml",className:"folio-item__thumb",children:Object(u.jsx)("img",{src:"images/portfolio/lamp.jpg",srcSet:"images/portfolio/lamp.jpg 1x,  images/portfolio/lamp@2x.jpg 2x",alt:""})})]})]})," "]})})}}]),a}(s.Component),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsxs)("section",{id:"contact",className:"s-contact target-section",children:[Object(u.jsx)("div",{className:"row s-contact__header",children:Object(u.jsx)("div",{className:"column large-12",children:Object(u.jsx)("h3",{className:"section-header-allcaps",children:"Say Hello"})})}),Object(u.jsxs)("div",{className:"row s-contact__content",children:[Object(u.jsx)("div",{className:"column large-7 medium-12",children:Object(u.jsx)("h4",{className:"huge-text",children:"Want to reachout? Go ahead and contact me on LinkedIn to get in touch. If not, you can use my email and we can talk at an available time."})}),Object(u.jsx)("div",{className:"column large-4 medium-12",children:Object(u.jsxs)("div",{className:"row contact-infos",children:[Object(u.jsx)("div",{className:"column large-12 medium-6 tab-12",children:Object(u.jsxs)("div",{className:"contact-block",children:[Object(u.jsx)("h5",{className:"contact-block__header",children:"Email"}),Object(u.jsx)("p",{className:"contact-block__content",children:Object(u.jsx)("a",{className:"mailtoui",href:"mailto:hquan212@gmail.com",children:"hquan212@gmail.com"})})]})}),Object(u.jsx)("div",{className:"column large-12 medium-6 tab-12",children:Object(u.jsxs)("div",{className:"contact-block",children:[Object(u.jsx)("h5",{className:"contact-block__header",children:"Phone"}),Object(u.jsx)("p",{className:"contact-block__content",children:Object(u.jsx)("a",{href:"tel:+1975432345",children:"+919 737 5059"})})]})}),Object(u.jsx)("div",{className:"column large-12",children:Object(u.jsx)("a",{href:"mailto:hquan212@gmail.com",className:"mailtoui btn btn--primary h-full-width",children:"Let's Talk"})})]})})]})]})})}}]),a}(s.Component),N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsxs)("footer",{className:"s-footer",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"column large-4 medium-6 w-1000-stack s-footer__social-block",children:Object(u.jsxs)("ul",{className:"s-footer__social",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/robert-quan/",children:Object(u.jsx)("i",{className:"fab fa-linkedin","aria-hidden":"true"})})}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{href:"https://github.com/hquan212",children:Object(u.jsx)("i",{className:"fab fa-github","aria-hidden":"true"})})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{href:"https://medium.com/@hquan212",children:Object(u.jsx)("i",{className:"fab fa-medium","aria-hidden":"true"})})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{href:"https://hired.com/x/9cedf57463c0596f8cc43cb39a8cd6e6",children:Object(u.jsx)("i",{className:"fab fa-black-tie","aria-hidden":"true"})})]})]})}),Object(u.jsxs)("div",{className:"column large-7 medium-6 w-1000-stack ss-copyright",children:[Object(u.jsx)("span",{children:"\xa9 Copyright Ceevee 2021"}),Object(u.jsxs)("span",{children:["Design by ",Object(u.jsx)("a",{href:"https://www.styleshout.com/",children:"StyleShout"})]})]})]}),Object(u.jsx)("div",{className:"s-hero__scroll",children:Object(u.jsxs)("a",{href:"/",className:"s-hero__scroll-link smoothscroll",children:[Object(u.jsx)("span",{className:"scroll-arrow",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",style:{fill:"rgba(0, 0, 0, 1)",transform:"",msFilter:""},children:Object(u.jsx)("path",{d:"M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"})})}),Object(u.jsx)("span",{className:"smoothscroll",children:"Scroll Up"})]})})]})})}}]),a}(s.Component),S={imageBaseUrl:"https://hquan212.github.io/",name:"Robert Quan",role:"Full Stack Software Engineer with experience in Machine Learning",experience:[{company:"Liongard",beginningDate:new Date(2020,9,1),endingDate:void 0,aboutCompany:"SAAS company focused on MSP visibility platform",position:"Software Engineer - (Full Stack)",keyPoints:["Created new Salesforce provisioning integration in Serverless to complement Hubspot provisioning workflow. Included in crm Daily Sync to manage over 815 active accounts configurations.","Implemented a new Kaseya integrations, to import environments and map them, page in React - Redux UI. Recorded network nocks and implemented action unit testing in Jest.","Leveraging AWS Lambda, wrote new microservices in Typescript to retrieve analytics data form platform. ","Spearheaded a python based JSON obsfuscation class to begin working with Data Science vendor to implement ML based actionable alerts. ","Actively develop, test, maintain, and improve software in high standard of quality, good practices, test driven development, and software design patterns."],technologies:"Typescript, JavaScript, AWS Cloud, TDD, Docker, Severless, API Development, PostgresSQL, Python, Redux, React"},{company:"American Bureau of Shipping (ABS)",beginningDate:new Date(2019,11,1),endingDate:new Date(2020,9,1),aboutCompany:"American maritime classification society.",position:"Software Engineer - (Full Stack and Machine Learning)",keyPoints:["Sole developer for Anomaly Detection program. Written in Python, this program uses approx. 30 algorithms to detect anomalies for large maritime vessels in real time using OSI PI data historian.","Developed and deployed a serverless OpenCV Pytorch function API endpoint for Corrosion Detect App. This app detects and creates a mask for corrosion and weldlines on images uploaded to endpoint.","Architected data flow for Port State Risk NLP classifier. Using Azure ML, created a Web Service based NLP classifier and wrote a .Net console app, using PI AFSDK, to update recommended alerts of high level risk ports and 16,000 vessels.","Organized intents, wrote testing data, and implemented chatbot VA for customer queries.","Created custom OSI PI dashboard and XML reports to display anomaly detection data."],technologies:"Python, SQL, C#, OpenCV, Pytorch, boost.ai, Git, Scikit, Pandas, Jinja"},{company:"ExxonMobil",beginningDate:new Date(2019,8,9),endingDate:new Date(2019,11,1),aboutCompany:"Oil and Gas giant.",position:"Software Engineer - (Full Stack)",keyPoints:["Full stack engineer developing web applications with Angular 7.0 and .NET C# in Exxons Spring Campus. ","Owner for certain Git Repositories and CI/CD pipelines in devOps Azure. Launched two complete pipelines that managed the logic from individual commits, branches, DEV, QA and PROD. ","Implemented custom store procedures and views, that speed up existing queries by 20% in SQL, as per customer request in data gathering chain process. Contacted and developed relationships with internal customers to develop business logic in code.","Launched the global landing page for FindMe, an app to find colleagues seating arrangements at any campus worldwide for the company. Front end development in Angular 7 and Backend APIs in .NET C#."],technologies:"Angular 7, NodeJS, HTML, CSS, BASH, Git, Azure DevOps, CI/CD, SQL, ASP.NET, C#"},{company:"Capital One",beginningDate:new Date(2019,5,1),endingDate:new Date(2019,7,9),aboutCompany:"Bank holding company.",position:"Software Engineer - (Data Engineer Intern)",keyPoints:["Working with AWS to set up a Data Pipeline with CFT Lambda, Apache Kafka, Snowflake (Data Warehousing), S3 (OneLake) and in house tools.","Implemented cloud level ETL pipeline leveraging AWS Lambda and S3 (Boto3) services to automate and schedule data collection tasks using async API requests for data ingestion.","Transformed and rewrote Data Analyst scripts in Python to SQL in Snowflake, a Cloud Warehouse SAAS. Resulting cascading view logic speed up execution of KPI calculations by a factor of 8. ","Deployed a CloudFormation template that ran an EC2 service with an Apache Kafka instance."],technologies:"AWS, Python, SQL, Snowflake, APIs, JSON, Boto3"},{company:"Apache Corp",beginningDate:new Date(2018,4,5),endingDate:new Date(2018,9,2),aboutCompany:"Oil and Gas exploration company.",position:"Software - Data Scientist",keyPoints:["Featured engineered and processed drilling, geological, and well data information to train Random Forest Regression, XGBoost Regressors, SVM and Linear models with GridSearchCV to predict the budget for different job accounts.","Used trained models to develop a Python GUI that predicts the budget estimate for different drilling jobs. Productionized scikitlearn models using Pickle. ","Converted legacy SAS queries to Python and included html email functionality.","Developed a numerical algorithm and wrote a fastest 24-hour competition drilling script with SQL query calls to run daily.","Automated the mining of unstrucutred data for ETL in Python. Wrote a Spotfire Tableau report on said data."],technologies:"Python, SQL, Pandas, Anaconda, Spotfire, SAS, seaborn, Scikit-Learn"},{company:"Brock Solutions",beginningDate:new Date(2018,4,5),endingDate:new Date(2018,9,2),aboutCompany:"Engineering solutions company.",position:"Software Engineer Coop",keyPoints:["Worked as a full time as a Junior Software Developer working with C#, ASP.NET, JavaScript and SQL on web applications.","Resolved and closed issues in and SDLC Manufacturing Execution Systems operation.","Developed and maintained web applications and services. ","Participated in cross-functional code walkthrough/reviews with clients. "],technologies:"TFS, SQL, JavaScript, HTML, CSS, JQuery, Confluence, Jira, Virtual Studio, .NET C#."}],education:[{school:"Texas A&M University",beginningDate:new Date(2017,8,10),endingDate:new Date(2019,5,7),degree:"Masters of Computer Science",keyPoints:["Focused in Data Science, High Performance Computing and Cloud Computing"]},{school:"Texas A&M University",beginningDate:new Date(2013,0,4),endingDate:new Date(2017,4,10),degree:"Bachelor of Science in Physics",awards:"Cum Laude",minors:["Computer Science, Astrophysics, Math"],keyPoints:["Intensive degree in Physics set up for PhD track."]}],teaching:[{company:"Practicum by Yandex",beginningDate:new Date(2020,5,1),endingDate:void 0,aboutCompany:"Online Data Science bootcamp program.",position:"Data Science Tutor",keyPoints:["Personal tutor for a number of cohorts (10+ students each), explained topics in Python, Python libraries, SQL, statistics, mathematics, machine learning, data visualization tools, and career advice in a way that students could understand.","Presented weekly webinars that covers Data Science projects"],technologies:"Python, JupyterNotebook, Pandas, ScikitLearn, Seaborn, Ipython, ScikitLearn"}]},k=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Home",children:[Object(u.jsx)(x,{resumeData:S}),Object(u.jsx)(f,{resumeData:S}),Object(u.jsx)(v,{resumeData:S}),Object(u.jsx)(w,{}),Object(u.jsx)(y,{}),Object(u.jsx)(N,{})]})}}]),a}(s.Component),_=a(13),D=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{style:{backgroundColor:"white",padding:"20px"},children:[Object(u.jsxs)("h1",{style:{textAlign:"center",color:"grey"},children:[" ","404 not found!"]}),Object(u.jsx)("p",{style:{textAlign:"center",fontSize:"26px"},children:Object(u.jsx)(_.b,{to:"/",children:"Go to Home "})})]})}}]),a}(n.a.Component),C=a(6),P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)(_.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(_.b,{to:"/"}),Object(u.jsx)(_.b,{to:"/ml"}),Object(u.jsxs)(C.c,{children:[Object(u.jsx)(C.a,{exact:!0,path:"/",component:k}),Object(u.jsx)(C.a,{exact:!0,path:"/ml",component:g}),Object(u.jsx)(C.a,{component:D})]})]})})}}]),a}(s.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),A()}},[[62,1,2]]]);
//# sourceMappingURL=main.9c3a71b6.chunk.js.map