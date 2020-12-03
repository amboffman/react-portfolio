import React, { useState, useLayoutEffect } from "react";
import { useSpring, animated } from "react-spring";

const HoverEffect = React.forwardRef((props, ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref]);
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / dimensions.height,
    (x - window.innerWidth / 2) / dimensions.width,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [angle, setAngle] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => {
        setAngle({ xys: calc(x, y) });
      }}
      onMouseLeave={() => {
        setAngle({ xys: [0, 0, 1] });
      }}
      style={{ transform: angle.xys.interpolate(trans) }}
    >
      {props.children}
    </animated.div>
  );
})

export default HoverEffect;
