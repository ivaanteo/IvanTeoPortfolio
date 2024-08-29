import aux1 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 1.png";
import aux2 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 2.png";
import aux3 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 3.png";
import aux4 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 4.png";
import aux5 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 5.png";
import aux6 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 6.png";

import evibe1 from "../assets/eVibe Screenshots/evibe1.png";
import evibe2 from "../assets/eVibe Screenshots/evibe2.png";
import evibe3 from "../assets/eVibe Screenshots/evibe3.png";

import stockFundamentalImg1 from "../assets/StockFundamentalsImages/heatmap.png";
import stockFundamentalImg2 from "../assets/StockFundamentalsImages/dendrogram.png";
import stockFundamentalImg3 from "../assets/StockFundamentalsImages/linear_regression.png";

import fundleImg1 from "../assets/Fundle Screenshots/image1.png";
import fundleImg2 from "../assets/Fundle Screenshots/image2.png";
import fundleImg3 from "../assets/Fundle Screenshots/image3.png";
import fundleImg4 from "../assets/Fundle Screenshots/image4.png";
import fundleImg5 from "../assets/Fundle Screenshots/image5.png";

import pbmImg1 from "../assets/PBM Screenshots/image1.png";
import pbmImg2 from "../assets/PBM Screenshots/image2.png";
import pbmImg3 from "../assets/PBM Screenshots/image3.png";
import pbmImg4 from "../assets/PBM Screenshots/image4.png";
import pbmImg5 from "../assets/PBM Screenshots/image5.png";
import pbmImg6 from "../assets/PBM Screenshots/image6.png";

import fypImg1 from "../assets/FYP Screenshots/image1.png";
import fypImg2 from "../assets/FYP Screenshots/image2.png";
import fypImg3 from "../assets/FYP Screenshots/image3.png";
import fypImg4 from "../assets/FYP Screenshots/image4.png";
import fypImg5 from "../assets/FYP Screenshots/image5.png";

import bussinImg1 from "../assets/Bussin Screenshots/image1.gif";
import bussinImg2 from "../assets/Bussin Screenshots/image2.png";
import bussinImg3 from "../assets/Bussin Screenshots/image3.png";
import bussinImg4 from "../assets/Bussin Screenshots/image4.png";
import bussinImg5 from "../assets/Bussin Screenshots/image5.png";

import Bullet from "../components/Common/Bullet";

export const auxBoxImages = [
  { key: "aux1", img: aux1 },
  { key: "aux2", img: aux2 },
  { key: "aux3", img: aux3 },
  { key: "aux4", img: aux4 },
  { key: "aux5", img: aux5 },
  { key: "aux6", img: aux6 },
];
export const evibeImages = [
  { key: "evibe1", img: evibe1 },
  { key: "evibe2", img: evibe2 },
  { key: "evibe3", img: evibe3 },
];

export const stockFundamentalImages = [
  { key: "stockFundamentalImg1", img: stockFundamentalImg1 },
  { key: "stockFundamentalImg2", img: stockFundamentalImg2 },
  { key: "stockFundamentalImg3", img: stockFundamentalImg3 },
];

export const fundleImages = [
  { key: "fundleImg1", img: fundleImg1 },
  { key: "fundleImg2", img: fundleImg2 },
  { key: "fundleImg3", img: fundleImg3 },
  { key: "fundleImg4", img: fundleImg4 },
  { key: "fundleImg5", img: fundleImg5 },
];
export const pbmImages = [
  { key: "pbmImg1", img: pbmImg1 },
  { key: "pbmImg2", img: pbmImg2 },
  { key: "pbmImg3", img: pbmImg3 },
  { key: "pbmImg4", img: pbmImg4 },
  { key: "pbmImg5", img: pbmImg5 },
  { key: "pbmImg6", img: pbmImg6 },
];

// TODO: Update images for fyp
export const fypImages = [
  { key: "fypImg1", img: fypImg1 },
  { key: "fypImg2", img: fypImg2 },
  { key: "fypImg3", img: fypImg3 },
  // { key: "fypImg4", img: fypImg4 },
  // { key: "fypImg5", img: fypImg5 },
];

export const bussinImages = [
  { key: "bussin1", img: bussinImg1 },
  { key: "bussin2", img: bussinImg2 },
  { key: "bussin3", img: bussinImg3 },
  { key: "bussin4", img: bussinImg4 },
  { key: "bussin5", img: bussinImg5 },
];

export const auxboxDesc = (
  <p>
    AuxBox is an iOS app that puts a modern twist on the traditional JukeBox.
    <br />
    <br />A Spotify Premium user playing music out loud can now allow friends to
    queue songs through AuxBox onto their Spotify Queue. No more fighting over
    the aux during road trips or house parties.
    <br />
    <br />
    Written in <span>Swift</span>.
  </p>
);
export const auxboxTechDesc = (
  <p>
    <Bullet /> Fully Programmatic UIKit
    <br />
    <Bullet /> Firebase Auth, Storage, Firestore
    <br />
    <Bullet /> Sign in with Apple and Facebook
    <br />
    <Bullet /> Spotify API & SDK
    <br />
    <Bullet /> CoreLocation
    <br />
    <Bullet /> StoreKit
  </p>
);

export const eVibeDesc = (
  <p>
    E-Vibe is an iOS app which allows users to control their iPhone's
    Vibrations.
    <br />
    <br />
    This app was inspired from watching TikTok videos and seeing someone going
    viral after building a similar app, and me thinking to myself: I could do
    that... And so I did.
    <br />
    <br />
    Written in <span>Swift</span>.
  </p>
);

export const eVibeTechDesc = (
  <p>
    <Bullet /> Fully Programmatic UIKit
    <br />
    <Bullet /> CoreHaptics
    <br />
    <Bullet /> CoreAnimation
    <br />
    <Bullet /> StoreKit
    <br />
    <Bullet /> User Defaults
  </p>
);

export const stockFundamentalDesc = (
  <p>
    For our Data Science and Artificial Intelligence class, my groupmates and I
    sought to create some form of asset pricing model, which would provide an
    estimate of the value of prices of equities, based on the company's
    fundamentals and intrinsic value rather than past prices.
    <br />
    <br />
    We learnt to formulate real world problems into machine learning problems,
    and understand the scenarios in which supervised and unsupervised learning
    can be used, as well as the benefits and limitations that different machine
    learning models may have for different types of data.
    <br />
    <br />
    View the project{" "}
    <span>
      <a
        href="https://github.com/ivaanteo/stock-fundamental-analysis/blob/main/DSAI_Final.ipynb"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
    </span>
    .
    <br />
    <br />
    Written in <span>Python</span>.
  </p>
);

export const stockFundamentalTechDesc = (
  <p>
    <b>Data Retrieval and Cleaning</b>
    <br />
    <Bullet /> Python Scripts
    <br />
    <br />
    <b>Data Visualisation Tools </b>
    <br />
    <Bullet /> Matplotlib
    <br />
    <Bullet />
    Seaborn
    <br />
    <br />
    <b>Feature Selection </b>
    <br />
    <Bullet /> Standard Scaler
    <br />
    <Bullet /> KNN Imputer <br />
    <Bullet /> Gradient Boosting Regressor
    <br />
    <br />
    <b>Hyper Parameter Optimisation</b>
    <br />
    <Bullet /> GridSearchCV
    <br />
    <br />
    <b>Supervised Learning</b>
    <br />
    <Bullet /> Linear Regression
    <br />
    <Bullet /> Lasso Regression
    <br />
    <Bullet /> Ridge Regression
    <br />
    <Bullet /> Artificial Neural Networks
    <br />
    <br />
    <b>Unsupervised Learning</b>
    <br />
    <Bullet /> Agglomerative Clustering
  </p>
);

export const fundleDesc = (
  <p>
    Fundle is a DeFi fundraising platform that allows donors to have the option
    to donate the interest earned on their assets by simply depositing funds to
    the protocol for any amount of time.
    <br />
    <br />
    At the end of the period, donors will get back 100% of their underlying
    capital, while any interest earned is distributed using quadratic funding to
    Non-Profit Organizations. This interest is generated from fixed yields using
    lossless pools in DeFi.
    <br />
    <br />
    Built as part of the Ethereum Singapore hackathon 2023. View the project{" "}
    <a
      href="https://github.com/ETHSG-Fundle"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>here</span>
    </a>
    .
    <br />
    <br />
    Won bounties from{" "}
    <a href={"https://spark.fi/"} target="_blank" rel="noopener noreferrer">
      <span>MakerDAO's Spark</span>
    </a>
    ,{" "}
    <a
      href={"https://www.pendle.finance/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Pendle</span>
    </a>{" "}
    and{" "}
    <a
      href={"https://www.mantle.xyz/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Mantle</span>
    </a>
    .
    <br />
    <br />
    Written in <span>Solidity</span> and <span>Typescript</span>.
  </p>
);

export const fundleTechDesc = (
  <p>
    <b>Smart Contracts</b>
    <br />
    <Bullet /> Solidity
    <br />
    <Bullet /> Hardhat
    <br />
    <Bullet /> Ethers.js
    <br />
    <br />
    <b>Frontend</b>
    <br />
    <Bullet /> Typescript
    <br />
    <Bullet /> React
    <br />
    <Bullet /> Next.js
    <br />
    <Bullet /> Web3.js
    <br />
  </p>
);

export const pbmDesc = (
  <p>
    Purpose Bound Money is a model for programmable money that sets specific
    rules for the use of a cryptocurrency.
    <br />
    <br />
    This works by wrapping an underlying cryptocurrency, such as a Central Bank
    Digital Currency (CDBC) or stablecoin, and then applying rules to the
    wrapped currency. These rules can be programmed to restrict the use of the
    currency to specific purposes, such as only for paying for groceries or for
    educational purposes.
    <br />
    <br />
    Written as a project for a Blockchain class in NTU. Read the{" "}
    <a
      href={
        "https://www.mas.gov.sg/publications/monographs-or-information-paper/2023/purpose-bound-money-whitepaper"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>whitepaper</span>
    </a>{" "}
    and the{" "}
    <a
      href={
        "https://www.mas.gov.sg/-/media/mas-media-library/development/fintech/project-orchid/mas-project-orchid-report.pdf"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>report</span>
    </a>{" "}
    for more information.
    <br />
    <br />
    Feel free to view the code for the{" "}
    <a
      href={"https://github.com/googlercolin/pbm-frontend"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>frontend</span>
    </a>{" "}
    and the{" "}
    <a
      href={"https://github.com/ivaanteo/PurposeBoundMoney"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>smart contracts</span>
    </a>
    .
    <br />
    <br />
    Written in <span>Solidity</span> and <span>Typescript</span>.
  </p>
);

export const pbmTechDesc = (
  <p>
    <b>Smart Contracts</b>
    <br />
    <Bullet /> Solidity
    <br />
    <Bullet /> Foundry
    <br />
    <Bullet /> Ethers.js
    <br />
    <br />
    <b>Frontend</b>
    <br />
    <Bullet /> Typescript
    <br />
    <Bullet /> Next.js
    <br />
    <Bullet /> Web3.js
    <br />
  </p>
);

export const fypDesc = (
  <p>
    My Final Year Project is a mobile application that uses Augmented Reality to
    superimpose a pair of spetacles onto the user's face, allowing them to see
    how they look in different frames.
    <br />
    <br />
    As an extension, the app also allows users to create a 3D model of a pair of
    spectacles just by taking photos of it, and then superimpose it onto their
    face. This allows store owners to create a digital inventory of their
    frames.
    <br />
    <br />
    Written in <span>Swift</span>.
  </p>
);

export const fypTechDesc = (
  <p>
    <Bullet /> SwiftUI
    <br />
    <Bullet /> UIKit
    <br />
    <Bullet /> ARKit
    <br />
    <Bullet /> RealityKit
    <br />
    <Bullet /> Object Capture
    <br />
  </p>
);

// Bus app to tell the arrival time of the next bus
export const bussinDesc = (
  <p>
    Bussin' is an iOS app that tells you the arrival time of the next bus at
    your bus stop.
    <br />
    <br />
    This app was inspired by the frustration of waiting for the bus and not
    knowing when it would arrive.
    <br />
    <br />
    Written in <span>Swift</span>.
  </p>
);

export const bussinTechDesc = (
  <p>
    <Bullet /> SwiftUI
    <br />
    <Bullet /> Core Location
    <br />
    <Bullet /> NSCache
    <br />
    <Bullet /> LTA API
  </p>
);
