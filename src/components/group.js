import React from "react";
import PropTypes from "prop-types";
import { useThree } from "react-three-fiber";

export const Group = ({ children }) => {

  const { camera } = useThree();
  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;
  camera.up.set(0, 0, 0);
  camera.position.set(0, 0, 100);

  return (
    <group>
      {children}
    </group>
  );
};

Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};