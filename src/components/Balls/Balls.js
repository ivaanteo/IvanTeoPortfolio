import classes from "./Balls.module.css";
import { useState, useEffect } from "react";
import Ball from "./Ball/Ball";

export default function Balls() {
  const getBallCount = () => {
    return Math.min(window.innerWidth / 50, 5);
  };

  const getBallVelocity = () => {
    return Math.min(window.innerWidth / 150, 4);
  };

  const getBallDiameter = () => {
    return window.innerWidth / 7;
  };

  const [count, setCount] = useState(getBallCount());
  const [ballDiameter, setBallDiameter] = useState(getBallDiameter());

  useEffect(() => {
    const handleResize = () => {
      setCount(getBallCount());
      setBallDiameter(getBallDiameter());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ballsModel = Array.from({ length: count }, () => ({
    diameter: Math.random() * 50 + ballDiameter,
    initialVelocity: {
      x: Math.random() * getBallVelocity() + 1,
      y: Math.random() * getBallVelocity() + 1,
    },
  }));

  return (
    <>
      <div className={classes.layer}>
        {ballsModel.map((ball) => (
          <Ball
            diameter={ball.diameter}
            initialVelocity={ball.initialVelocity}
          />
        ))}
      </div>
    </>
  );
}
