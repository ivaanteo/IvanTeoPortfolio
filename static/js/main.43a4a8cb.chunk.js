(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,s){e.exports={projects:"Projects_projects__3AArG",container:"Projects_container__2uzUC",gradientAnimatedBg:"Projects_gradientAnimatedBg__GaSv8",Animation:"Projects_Animation__1kZKr",carouselImg:"Projects_carouselImg__1vOdW"}},13:function(e,t,s){e.exports={contactMe:"ContactMe_contactMe__3nPep",container:"ContactMe_container__22yYj",pulse:"ContactMe_pulse__SMj7I"}},20:function(e,t,s){e.exports={ball:"Ball_ball__RmKOO",Animation:"Ball_Animation__lvNfX"}},21:function(e,t,s){e.exports={layer:"Balls_layer__12eXH"}},22:function(e,t,s){e.exports={logo:"LogoButton_logo__1Jkrr",pulse:"LogoButton_pulse__H7s7B",Animation:"LogoButton_Animation__2yiWJ"}},23:function(e,t,s){e.exports={layer:"FABs_layer__qgBjb",buttonGroup:"FABs_buttonGroup__3nP4z"}},28:function(e,t,s){},3:function(e,t,s){e.exports={wrapper:"NavBar_wrapper__oIyfV",navBar:"NavBar_navBar__1EMwZ",navBarJustify:"NavBar_navBarJustify__3rSde",logo:"NavBar_logo__2C6RD",selectedNavLink:"NavBar_selectedNavLink__3WE7_",navLink:"NavBar_navLink__1YIgg",buttonGroup:"NavBar_buttonGroup__37bQA",button:"NavBar_button__1UC0o",Animation:"NavBar_Animation__233ej",pulse:"NavBar_pulse__1ieEJ",icon:"NavBar_icon__1avjB",navLinks:"NavBar_navLinks__1vgf7",close:"NavBar_close__2h-ac",navTitle:"NavBar_navTitle__1bKqb"}},4:function(e,t,s){e.exports={header:"Header_header__3mObx",container:"Header_container__X8QFV",circleGradientBorder:"Header_circleGradientBorder__35Y1p",gradientAnimatedBg:"Header_gradientAnimatedBg__2_-BH",Animation:"Header_Animation__161ho",fadeIn:"Header_fadeIn__D3Znw",fadeOut:"Header_fadeOut__3jFZX",pulse:"Header_pulse__11ccO",textFade:"Header_textFade__1Q4cS"}},5:function(e,t,s){e.exports={aboutMe:"AboutMe_aboutMe__22JKo",container:"AboutMe_container__2xiLV",gradientAnimatedBg:"AboutMe_gradientAnimatedBg__1J_Vy",Animation:"AboutMe_Animation__3MsK7",longText:"AboutMe_longText__1SNVX",spanBtn:"AboutMe_spanBtn__14_7A",anchorLink:"AboutMe_anchorLink__3mDVM",languagesContainer:"AboutMe_languagesContainer__3bvra",descContainer:"AboutMe_descContainer__33dnZ"}},52:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(17),r=s.n(i),c=(s(28),s(3)),o=s.n(c);const j="/about-me",b="/projects",l="/contact";var d=[{to:j,text:"About Me"},{to:"/projects",text:"Projects"},{to:"/contact",text:"Contact"}],p=s.p+"static/media/resume.d6590648.pdf",m=s(0);var O=e=>{const[t,s]=Object(n.useState)(!1),a="home",i=t=>{t.target.id===j?e.aboutMeRef.current.scrollIntoView(!0):t.target.id===b?e.projectsRef.current.scrollIntoView(!0):t.target.id===l?e.contactMeRef.current.scrollIntoView(!0):t.target.id===a&&e.homeRef.current.scrollIntoView(!0)},[r,c]=Object(n.useState)(a);return Object(n.useEffect)((()=>{const t=()=>{window.scrollY>e.contactMeRef.current.offsetTop-window.innerHeight/2?c(l):window.scrollY>e.projectsRef.current.offsetTop-window.innerHeight/2?c(b):window.scrollY>e.aboutMeRef.current.offsetTop-window.innerHeight/2?c(j):c(a)};return document.addEventListener("scroll",t),()=>{document.removeEventListener("scroll",t)}}),[]),Object(m.jsx)("div",{className:o.a.wrapper,children:Object(m.jsxs)("div",{className:"".concat(o.a.navBar," ").concat(o.a.navBarJustify),children:[Object(m.jsx)("h1",{className:o.a.logo,children:Object(m.jsx)("span",{id:"home",onClick:i,children:"Ivan"})}),Object(m.jsx)("div",{className:"".concat(o.a.navLinks," ").concat(t||o.a.close),children:d.map((e=>Object(m.jsx)("a",{id:e.to,className:"".concat(r===e.to?o.a.selectedNavLink:o.a.navLink),onClick:i,children:e.text},e.to)))}),Object(m.jsxs)("div",{className:o.a.buttonGroup,children:[Object(m.jsx)("a",{className:o.a.button,href:p,target:"_blank",rel:"noopener noreferrer",children:"Resume"}),Object(m.jsx)("i",{className:"".concat(t?"fa fa-times":"fa fa-bars"," ").concat(o.a.icon),onClick:()=>{s((e=>!e))}})]})]})})},x=s(4),g=s.n(x),h=s.p+"static/media/ivan.e5e8dbfe.jpg",u=s(2);var A=e=>{const[t,s]=Object(n.useState)(0),[a,i]=Object(n.useState)(!1);Object(n.useEffect)((()=>setInterval((()=>{i(!0),setTimeout((e=>{s((e=>(e+1)%3)),i(!1)}),1e3)}),3e3)),[]);return Object(m.jsx)("header",{className:g.a.header,ref:e.homeRef,children:Object(m.jsx)(u.a,{children:Object(m.jsxs)("div",{className:g.a.container,children:[Object(m.jsx)("div",{className:"".concat(g.a.circleGradientBorder," ").concat(g.a.gradientAnimatedBg),children:Object(m.jsx)("img",{src:h,alt:"ivan"})}),Object(m.jsxs)("h1",{children:["Hi, I'm ",Object(m.jsx)("span",{className:g.a.gradientAnimatedBg,children:"Ivan."})]}),Object(m.jsx)("h3",{className:a?g.a.fadeOut:g.a.fadeIn,children:["iOS Developer","Full Stack Developer","Design Enthusiast"][t]}),Object(m.jsx)("p",{children:"Passionate towards code, design and business."}),Object(m.jsx)("button",{className:g.a.gradientAnimatedBg,onClick:()=>{e.aboutMeRef.current.scrollIntoView(!0)},children:"Learn More"})]})})})},f=s(5),w=s.n(f);var y=e=>Object(m.jsx)("section",{className:w.a.aboutMe,ref:e.aboutMeRef,children:Object(m.jsx)(u.a,{children:Object(m.jsxs)("div",{className:w.a.container,children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)("span",{children:"About"})," Me"]}),Object(m.jsxs)("p",{className:w.a.longText,children:["Nice to meet you! I'm Ivan, a software engineer from Singapore.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"I'm also a final year Computer Science and Business undergraduate at Nanyang Technological University's Renaissance Engineering Programme -- find out more about my course"," ",Object(m.jsx)("a",{className:w.a.anchorLink,href:"https://www.ntu.edu.sg/admissions/undergraduate/premier-scholar-programmes/renaissance-engineering-programme",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{className:w.a.spanBtn,children:"here"})}),". I'm graduating in December 2024 and am looking for full time roles in Singapore or New York!",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),'It was 2017 when I first watched a movie called "The Social Network", which told the story of Mark Zuckerberg\'s journey in the development of Facebook. Little did I know, this movie would inspire me to build playful, yet beautiful mobile applications and websites.',Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Today, code has become the medium in which I express my creativity -- take a look at my"," ",Object(m.jsx)("a",{className:w.a.anchorLink,onClick:()=>{e.projectsRef.current.scrollIntoView(!0)},children:Object(m.jsx)("span",{className:w.a.spanBtn,children:"projects"})})," ","below!"]})]})})}),v=s(11),S=s.n(v),k=s(19),B=s.n(k),C=s(7),N=s.n(C);s(50),s(51);var I=e=>{var t={infinite:!0,speed:400,slidesToShow:e.isLandscape?1:Math.min(e.imgs.length,3),slidesToScroll:1,focusOnSelect:!1,responsive:[{breakpoint:768,settings:{slidesToShow:e.isLandscape?1:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:N.a.projectContainer,children:[Object(m.jsxs)("div",{className:N.a.descContainer,children:[Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:e.title})}),e.desc]}),Object(m.jsxs)("div",{className:N.a.descContainer,children:[Object(m.jsx)("h1",{children:"Tech Used"}),e.techDesc]})]}),Object(m.jsx)(B.a,{...t,children:e.imgs.map((t=>Object(m.jsx)("div",{className:N.a.carouselContainer,children:Object(m.jsx)("img",{className:e.isLandscape?N.a.carouselLandscapeImg:N.a.carouselImg,src:t.img,alt:""})},t.key)))})]})},P=s.p+"static/media/Apple iPhone 11 Pro Max Screenshot 1.f769818b.png",M=s.p+"static/media/Apple iPhone 11 Pro Max Screenshot 2.0b9e172f.png",D=s.p+"static/media/Apple iPhone 11 Pro Max Screenshot 3.33bce9ff.png",E=s.p+"static/media/Apple iPhone 11 Pro Max Screenshot 4.3a18a29e.png",F=s.p+"static/media/Apple iPhone 11 Pro Max Screenshot 5.4e3755e6.png",_=s.p+"static/media/Apple iPhone 11 Pro Max Screenshot 6.ba2fe415.png",L=s.p+"static/media/evibe1.fb10e9c2.png",R=s.p+"static/media/evibe2.78fa17fe.png",Y=s.p+"static/media/evibe3.a14c914c.png",H=s.p+"static/media/heatmap.dc9c21f7.png",J=s.p+"static/media/dendrogram.402848e7.png",V=s.p+"static/media/linear_regression.2f0b6ea1.png",T=s.p+"static/media/image1.cb930e2e.png",Z=s.p+"static/media/image2.268b9c16.png",W=s.p+"static/media/image3.85cfb0cb.png",K=s.p+"static/media/image4.e7aa0c4b.png",U=s.p+"static/media/image5.d9e06347.png",X=s.p+"static/media/image1.13829b37.png",G=s.p+"static/media/image2.8fd651a2.png",q=s.p+"static/media/image3.dbb4f395.png",z=s.p+"static/media/image4.e4e32e30.png",Q=s.p+"static/media/image5.d80b9dbe.png",$=s.p+"static/media/image6.3c29343e.png",ee=s.p+"static/media/image1.17e5d780.png",te=s.p+"static/media/image2.17a5a0d4.png",se=s.p+"static/media/image3.9b050999.png",ne=(s.p,s.p,s.p+"static/media/image1.5e891db7.gif"),ae=s.p+"static/media/image2.8edcf1c9.png",ie=s.p+"static/media/image3.5cd793ba.png",re=s.p+"static/media/image4.03586518.png",ce=s.p+"static/media/image5.280d0b7d.png";function oe(){return Object(m.jsx)("span",{children:Object(m.jsx)("b",{children:"\xb7"})})}const je=[{key:"aux1",img:P},{key:"aux2",img:M},{key:"aux3",img:D},{key:"aux4",img:E},{key:"aux5",img:F},{key:"aux6",img:_}],be=[{key:"evibe1",img:L},{key:"evibe2",img:R},{key:"evibe3",img:Y}],le=[{key:"stockFundamentalImg1",img:H},{key:"stockFundamentalImg2",img:J},{key:"stockFundamentalImg3",img:V}],de=[{key:"fundleImg1",img:T},{key:"fundleImg2",img:Z},{key:"fundleImg3",img:W},{key:"fundleImg4",img:K},{key:"fundleImg5",img:U}],pe=[{key:"pbmImg1",img:X},{key:"pbmImg2",img:G},{key:"pbmImg3",img:q},{key:"pbmImg4",img:z},{key:"pbmImg5",img:Q},{key:"pbmImg6",img:$}],me=[{key:"fypImg1",img:ee},{key:"fypImg2",img:te},{key:"fypImg3",img:se}],Oe=[{key:"bussin1",img:ne},{key:"bussin2",img:ae},{key:"bussin3",img:ie},{key:"bussin4",img:re},{key:"bussin5",img:ce}],xe=Object(m.jsxs)("p",{children:["AuxBox is an iOS app that puts a modern twist on the traditional JukeBox.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"A Spotify Premium user playing music out loud can now allow friends to queue songs through AuxBox onto their Spotify Queue. No more fighting over the aux during road trips or house parties.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Written in ",Object(m.jsx)("span",{children:"Swift"}),"."]}),ge=Object(m.jsxs)("p",{children:[Object(m.jsx)(oe,{})," Fully Programmatic UIKit",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Firebase Auth, Storage, Firestore",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Sign in with Apple and Facebook",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Spotify API & SDK",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," CoreLocation",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," StoreKit"]}),he=Object(m.jsxs)("p",{children:["E-Vibe is an iOS app which allows users to control their iPhone's Vibrations.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"This app was inspired from watching TikTok videos and seeing someone going viral after building a similar app, and me thinking to myself: I could do that... And so I did.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Written in ",Object(m.jsx)("span",{children:"Swift"}),"."]}),ue=Object(m.jsxs)("p",{children:[Object(m.jsx)(oe,{})," Fully Programmatic UIKit",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," CoreHaptics",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," CoreAnimation",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," StoreKit",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," User Defaults"]}),Ae=Object(m.jsxs)("p",{children:["For our Data Science and Artificial Intelligence class, my groupmates and I sought to create some form of asset pricing model, which would provide an estimate of the value of prices of equities, based on the company's fundamentals and intrinsic value rather than past prices.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"We learnt to formulate real world problems into machine learning problems, and understand the scenarios in which supervised and unsupervised learning can be used, as well as the benefits and limitations that different machine learning models may have for different types of data.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"View the project"," ",Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"https://github.com/ivaanteo/stock-fundamental-analysis/blob/main/DSAI_Final.ipynb",target:"_blank",rel:"noopener noreferrer",children:"here"})}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Written in ",Object(m.jsx)("span",{children:"Python"}),"."]}),fe=Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Data Retrieval and Cleaning"}),Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Python Scripts",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Data Visualisation Tools "}),Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Matplotlib",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{}),"Seaborn",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Feature Selection "}),Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Standard Scaler",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," KNN Imputer ",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Gradient Boosting Regressor",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Hyper Parameter Optimisation"}),Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," GridSearchCV",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Supervised Learning"}),Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Linear Regression",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Lasso Regression",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Ridge Regression",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Artificial Neural Networks",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Unsupervised Learning"}),Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Agglomerative Clustering"]}),we=Object(m.jsxs)("p",{children:["Fundle is a DeFi fundraising platform that allows donors to have the option to donate the interest earned on their assets by simply depositing funds to the protocol for any amount of time.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"At the end of the period, donors will get back 100% of their underlying capital, while any interest earned is distributed using quadratic funding to Non-Profit Organizations. This interest is generated from fixed yields using lossless pools in DeFi.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Built as part of the Ethereum Singapore hackathon 2023. View the project"," ",Object(m.jsx)("a",{href:"https://github.com/ETHSG-Fundle",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{children:"here"})}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Won bounties from"," ",Object(m.jsx)("a",{href:"https://spark.fi/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{children:"MakerDAO's Spark"})}),","," ",Object(m.jsx)("a",{href:"https://www.pendle.finance/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{children:"Pendle"})})," ","and"," ",Object(m.jsx)("a",{href:"https://www.mantle.xyz/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{children:"Mantle"})}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Written in ",Object(m.jsx)("span",{children:"Solidity"})," and ",Object(m.jsx)("span",{children:"Typescript"}),"."]}),ye=Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Smart Contracts"}),Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Solidity",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Hardhat",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Ethers.js",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Frontend"}),Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Typescript",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," React",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Next.js",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Web3.js",Object(m.jsx)("br",{})]}),ve=Object(m.jsxs)("p",{children:["Purpose Bound Money is a model for programmable money that sets specific rules for the use of a cryptocurrency.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"This works by wrapping an underlying cryptocurrency, such as a Central Bank Digital Currency (CDBC) or stablecoin, and then applying rules to the wrapped currency. These rules can be programmed to restrict the use of the currency to specific purposes, such as only for paying for groceries or for educational purposes.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Written as a project for a Blockchain class in NTU. Read the"," ",Object(m.jsx)("a",{href:"https://www.mas.gov.sg/publications/monographs-or-information-paper/2023/purpose-bound-money-whitepaper",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{children:"whitepaper"})})," ","and the"," ",Object(m.jsx)("a",{href:"https://www.mas.gov.sg/-/media/mas-media-library/development/fintech/project-orchid/mas-project-orchid-report.pdf",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{children:"report"})})," ","for more information.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Feel free to view the code for the"," ",Object(m.jsx)("a",{href:"https://github.com/googlercolin/pbm-frontend",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{children:"frontend"})})," ","and the"," ",Object(m.jsx)("a",{href:"https://github.com/ivaanteo/PurposeBoundMoney",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{children:"smart contracts"})}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Written in ",Object(m.jsx)("span",{children:"Solidity"})," and ",Object(m.jsx)("span",{children:"Typescript"}),"."]}),Se=Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Smart Contracts"}),Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Solidity",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Foundry",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Ethers.js",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Frontend"}),Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Typescript",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Next.js",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Web3.js",Object(m.jsx)("br",{})]}),ke=Object(m.jsxs)("p",{children:["This mobile application uses Augmented Reality to superimpose a pair of spetacles onto the user's face, allowing them to see how they look in different frames.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"As an extension, the app also allows users to create a 3D model of a pair of spectacles just by taking photos of it, and then superimpose it onto their face. This allows store owners to create a digital inventory of their frames.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Written in ",Object(m.jsx)("span",{children:"Swift"}),"."]}),Be=Object(m.jsxs)("p",{children:[Object(m.jsx)(oe,{})," SwiftUI",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," UIKit",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," ARKit",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," RealityKit",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Object Capture",Object(m.jsx)("br",{})]}),Ce=Object(m.jsxs)("p",{children:["Bussin' is an iOS app that tells you the arrival time of the next bus at your bus stop.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"I used this project mainly to learn animations on SwiftUI and caching network requests using NSCache and combine.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Written in ",Object(m.jsx)("span",{children:"Swift"}),"."]}),Ne=Object(m.jsxs)("p",{children:[Object(m.jsx)(oe,{})," SwiftUI",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Combine",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," Core Location",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," NSCache",Object(m.jsx)("br",{}),Object(m.jsx)(oe,{})," LTA API"]});var Ie=e=>Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("section",{ref:e.projectsRef,className:S.a.projects,children:Object(m.jsxs)("div",{className:S.a.container,children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)("h1",{children:["Featured"," ",Object(m.jsx)("span",{className:S.a.gradientAnimatedBg,children:"Projects"})]})}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(I,{title:"AuxBox",desc:xe,techDesc:ge,imgs:je}),Object(m.jsx)("hr",{})]}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(I,{title:"E-Vibe",desc:he,techDesc:ue,imgs:be}),Object(m.jsx)("hr",{})]}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(I,{title:"Stock Fundamental Analysis",desc:Ae,techDesc:fe,imgs:le,isLandscape:!0}),Object(m.jsx)("hr",{})]}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(I,{title:"Fundle",desc:we,techDesc:ye,imgs:de,isLandscape:!0}),Object(m.jsx)("hr",{})]}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(I,{title:"Purpose Bound Money",desc:ve,techDesc:Se,imgs:pe,isLandscape:!0}),Object(m.jsx)("hr",{})]}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(I,{title:"Virtual Spectacle Try-On",desc:ke,techDesc:Be,imgs:me,isLandscape:!1}),Object(m.jsx)("hr",{})]}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(I,{title:"Bussin'",desc:Ce,techDesc:Ne,imgs:Oe,isLandscape:!1}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(u.a,{children:Object(m.jsx)("h1",{children:"More Projects Coming Soon!"})})]})})}),Pe=s(13),Me=s.n(Pe),De="data:image/png;base64,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",Ee="data:image/png;base64,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";var Fe=e=>{const[t,s]=Object(n.useState)("Email");return Object(m.jsx)("section",{className:Me.a.contactMe,ref:e.contactMeRef,children:Object(m.jsx)(u.a,{children:Object(m.jsxs)("div",{className:Me.a.container,children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)("span",{children:"Contact"})," Me"]}),Object(m.jsxs)("p",{children:["From job opportunities to casual conversions, I'd love to have a chat with you - maybe over a ",Object(m.jsx)("span",{children:"coffee"})," or two!"]}),Object(m.jsxs)("button",{onClick:()=>{s("Copied"),navigator.clipboard.writeText("ivanteozhiming@gmail.com")},onMouseLeave:()=>{s("Email")},children:[t," ",Object(m.jsx)("i",{className:"fa fa-copy"})]})]})})})},_e=s(20),Le=s.n(_e);function Re(e){let{diameter:t,initialVelocity:s}=e;const[a,i]=Object(n.useState)({x:0,y:0}),[r,c]=Object(n.useState)({x:10,y:10}),[o,j]=Object(n.useState)(""),b=t/2;return Object(n.useEffect)((()=>{c(s)}),[s]),Object(n.useEffect)((()=>{const e=()=>{c((e=>({x:-e.x,y:e.y})))},s=()=>{c((e=>({x:e.x,y:-e.y})))};a.x+t>window.outerWidth&&r.x>0||a.x<0&&r.x<0?e():(a.y+t>window.outerHeight&&r.y>0||a.y<0&&r.y<0)&&s()}),[a]),Object(n.useEffect)((()=>{clearInterval(o);const e=setInterval((()=>{(e=>{i((t=>({x:t.x+e.x,y:t.y+e.y})))})(r)}),10);j(e)}),[r]),Object(m.jsx)("div",{style:{top:a.y,left:a.x,width:t,height:t,borderRadius:b},className:Le.a.ball})}var Ye=s(21),He=s.n(Ye);function Je(){const e=()=>Math.min(window.innerWidth/50,5),t=()=>Math.min(window.innerWidth/150,4),s=()=>window.innerWidth/7,[a,i]=Object(n.useState)(e()),[r,c]=Object(n.useState)(s());Object(n.useEffect)((()=>{const t=()=>{i(e()),c(s())};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[]);const o=Array.from({length:a},(()=>({diameter:50*Math.random()+r,initialVelocity:{x:Math.random()*t()+1,y:Math.random()*t()+1}})));return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:He.a.layer,children:o.map((e=>Object(m.jsx)(Re,{diameter:e.diameter,initialVelocity:e.initialVelocity})))})})}var Ve=s(22),Te=s.n(Ve);function Ze(e){return Object(m.jsx)("img",{className:Te.a.logo,src:e.src,alt:e.alt,onClick:()=>e.onClick()})}var We=s(23),Ke=s.n(We);function Ue(){const e=e=>{const t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)};return Object(m.jsxs)("div",{className:Ke.a.buttonGroup,children:[Object(m.jsx)(Ze,{src:De,alt:"linkedinLogo",onClick:()=>e("https://www.linkedin.com/in/ivanteozhiming/")}),Object(m.jsx)(Ze,{src:Ee,alt:"githubLogo",onClick:()=>e("https://github.com/ivaanteo/")})]})}var Xe=function(){const e=Object(n.useRef)(),t=Object(n.useRef)(),s=Object(n.useRef)(),a=Object(n.useRef)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{aboutMeRef:e,projectsRef:t,contactMeRef:s,homeRef:a}),Object(m.jsx)(Ue,{}),Object(m.jsx)(Je,{}),Object(m.jsx)(A,{homeRef:a,aboutMeRef:e}),Object(m.jsx)(y,{aboutMeRef:e,projectsRef:t}),Object(m.jsx)(Ie,{projectsRef:t}),Object(m.jsx)(Fe,{contactMeRef:s})]})};var Ge=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,53)).then((t=>{let{getCLS:s,getFID:n,getFCP:a,getLCP:i,getTTFB:r}=t;s(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(Xe,{})}),document.getElementById("root")),Ge()},7:function(e,t,s){e.exports={projectContainer:"Project_projectContainer__194iJ",descContainer:"Project_descContainer__1_ob1",gradientAnimatedBg:"Project_gradientAnimatedBg__mIOXp",Animation:"Project_Animation__29x59",carouselImg:"Project_carouselImg__GPq30",carouselContainer:"Project_carouselContainer__P0eO3",carouselLandscapeImg:"Project_carouselLandscapeImg__20Pc0"}}},[[52,1,2]]]);
//# sourceMappingURL=main.43a4a8cb.chunk.js.map