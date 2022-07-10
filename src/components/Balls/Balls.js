import classes from "./Balls.module.css";
import { useState, useEffect } from "react";
import Ball from "./Ball/Ball";

export default function Balls() {
  const getBallCount = () => {
    return window.innerWidth / 50;
  };

  const getBallVelocity = () => {
    return Math.min(window.innerWidth / 150, 8);
  };

  const [count, setCount] = useState(getBallCount());

  useEffect(() => {
    const handleResize = () => {
      setCount(getBallCount());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ballsModel = Array.from({ length: count }, () => ({
    diameter: Math.random() * 100 + 50,
    initialVelocity: { x: Math.random() * getBallVelocity() + 1, y: Math.random() * getBallVelocity() + 1 },
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
