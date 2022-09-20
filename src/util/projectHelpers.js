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
    estimate of the value of prices of equities, based on the company's fundamentals and intrinsic value rather than past prices.
    <br />
    <br />
    We learnt to formulate real world problems into machine learning problems, 
    and understand the scenarios in which supervised and unsupervised learning can be used, 
    as well as the benefits and limitations that different machine learning models may have for different types of data.
    <br />
    <br />
    View the project <span><a 
              href="https://github.com/ivaanteo/stock-fundamental-analysis/blob/main/DSAI_Final.ipynb"
              target="_blank"
              rel="noopener noreferrer">here</a></span>.
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
    <Bullet />Seaborn
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
