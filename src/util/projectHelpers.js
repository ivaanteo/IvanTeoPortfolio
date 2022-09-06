import aux1 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 1.png";
import aux2 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 2.png";
import aux3 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 3.png";
import aux4 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 4.png";
import aux5 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 5.png";
import aux6 from "../assets/AuxBox Screenshots/Apple iPhone 11 Pro Max Screenshot 6.png";

import evibe1 from "../assets/eVibe Screenshots/evibe1.png";
import evibe2 from "../assets/eVibe Screenshots/evibe2.png";
import evibe3 from "../assets/eVibe Screenshots/evibe3.png";
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
