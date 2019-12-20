import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const TreeRing = ({ position, radiusTop, radiusBottom, ringThickness }) => {

  return (
    <>
      <mesh
      onClick={() => console.log("click")}
      onPointerOver={() => console.log("hover")}
      onPointerOut={() => console.log("unhover")}
      rotation={[0, 0, 0]}
      position={position}
    >
      <cylinderBufferGeometry attach="geometry" args={[radiusTop, radiusBottom, ringThickness, 100]} />
      <meshNormalMaterial
        attach="material"
        opacity={0.5}
      />
      </mesh>
      </>
  );
};

TreeRing.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  radiusBottom: PropTypes.number.isRequired,
  radiusTop: PropTypes.number.isRequired,
  ringThickness: PropTypes.number.isRequired
}