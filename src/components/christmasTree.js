import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TreeRing } from "./treeRing";

const generateRadiusData = (ringAmount, bottomRadius) => {
  const ringInterpolation = bottomRadius / ringAmount; // how much space is between the rings from top (0) to bottom
  const radiusData = Array.from({ length: ringAmount },
    (currValue, index) => (
      {
        radiusBottom: index * ringInterpolation + ringInterpolation,
        radiusTop: index * ringInterpolation + ringInterpolation - ringInterpolation * 0.7
      }));
  return radiusData.reverse();
};

const generateRingTreeData = (radiusData, ringSpacing, ringThickness) => {
  const sampleData = Array.from({ length: radiusData.length }, (currValue, index) => (
    {
      radiusBottom: radiusData[index].radiusBottom,
      radiusTop: radiusData[index].radiusTop,
      position: [0, (ringSpacing + ringThickness) * index, 0]
    }));

  console.log(sampleData);
  return sampleData;
};

export const ChristmasTree = ({ ringAmount, position, ringSpacing, bottomRadius, ringThickness }) => {

  const radiusData = generateRadiusData(ringAmount, bottomRadius);
  const ringData = generateRingTreeData(radiusData, ringSpacing, ringThickness);

  const christmasRings = ringData.map((data) =>
    <TreeRing position={data.position}
              radiusTop={data.radiusTop}
              radiusBottom={data.radiusBottom}
              ringThickness={ringThickness}
              key={`ring${data.radiusBottom}/${ringAmount}`}/>
  );

  return (
    <group position={position}>
      {christmasRings}
    </group>
  );
};

ChristmasTree.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  ringAmount: PropTypes.number.isRequired,
  ringSpacing: PropTypes.number.isRequired,
  bottomRadius: PropTypes.number.isRequired,
  ringThickness: PropTypes.number.isRequired
};

