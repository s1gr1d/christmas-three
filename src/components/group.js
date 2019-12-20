import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useThree } from "react-three-fiber";

export const Group = ({ children }) => {

  const [rotZ, setRotZ] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotZ((rotZ + 0.01) % 100);
    }, 10);
    return () => clearTimeout(timer);
  }, [rotZ]);

  const { camera } = useThree();
  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;
  camera.up.set(0, 0, 0);
  camera.position.set(0, 0, 100);

  return (
    <group rotation={[0, 0, 0]}>
      {children}
    </group>
  );
};

Group.propTypes = {
  children: PropTypes.element
};