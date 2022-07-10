import { useState, useEffect } from "react";

import classes from "./Ball.module.css";

export default function Ball({ diameter, initialVelocity }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 10, y: 10 });
  const [intervalId, setIntervalId] = useState("");

  // Dimensions
  const radius = diameter / 2;
  useEffect(() => {
    setVelocity(initialVelocity);
  }, [initialVelocity]);

  useEffect(() => {
    const bounceX = () => {
      setVelocity((prevValue) => {
        return { x: -prevValue.x, y: prevValue.y };
      });
    };

    const bounceY = () => {
      setVelocity((prevValue) => {
        return { x: prevValue.x, y: -prevValue.y };
      });
    };

    const bounceBall = () => {
      if (position.x + diameter > window.outerWidth && velocity.x > 0) {
        bounceX();
      } else if (position.x < 0 && velocity.x < 0) {
        bounceX();
      } else if (position.y + diameter > window.outerHeight && velocity.y > 0) {
        bounceY();
      } else if (position.y < 0 && velocity.y < 0) {
        bounceY();
      }
    };
    bounceBall();
  }, [position]);

  useEffect(() => {
    const moveBall = (velocity) => {
      setPosition((prevValue) => {
        return { x: prevValue.x + velocity.x, y: prevValue.y + velocity.y };
      });
    };

    clearInterval(intervalId);
    const moveIntervalId = setInterval(() => {
      moveBall(velocity);
    }, 10);
    setIntervalId(moveIntervalId);
  }, [velocity]);

  return (
    <div
      style={{
        top: position.y,
        left: position.x,
        width: diameter,
        height: diameter,
        borderRadius: radius,
      }}
      className={classes.ball}
    />
  );
}
