import React, {useState} from "react";
import PropTypes from "prop-types";
import {TreeRing} from "./treeRing";
import {useSpring, animated} from '@react-spring/three'

// generates an array with size data of the radius for each tree-ring
const generateRadiusData = (ringAmount, bottomRadius) => {
    const ringInterpolation = bottomRadius / ringAmount; // how much space is between the rings from top (0) to bottom
    const radiusData = Array.from({length: ringAmount},
        (currValue, index) => (
            {
                radiusBottom: index * ringInterpolation + ringInterpolation,
                radiusTop: index * ringInterpolation + ringInterpolation - ringInterpolation * 0.8
            }));
    return radiusData.reverse();
};

// generates an object with the previously generated radius data and the position values
const generateRingTreeData = (radiusData, ringSpacing, ringThickness) => {
    return Array.from({length: radiusData.length}, (currValue, index) => (
        {
            radiusBottom: radiusData[index].radiusBottom,
            radiusTop: radiusData[index].radiusTop,
            position: [0, (ringSpacing + ringThickness) * index, 0]
        }));
};

export const ChristmasTree = ({position, customizationData}) => {

    // const ctx = useStore();  --> context should be used later for handling customizaiton data

    const radiusData = generateRadiusData(customizationData.ringAmount, customizationData.bottomRadius);
    const ringData = generateRingTreeData(radiusData, customizationData.ringSpacing, customizationData.ringThickness);

    const [swing, setSwing] = useState(false);

    // Rotation Values:
    //      X: forward
    //      Y: circular
    //      Z: right/left
    const {rotation} = useSpring({
        onRest: () => setSwing(!swing), // starting animation in the opposite direction
        rotation: swing ? [0, 30, 0.2] : [0, 0, -0.2],
        from: {rotation: swing ? [0, 0, -0.2] : [0, 30, 0.2]},
        config: {duration: 15000},

    });

    const christmasRings = ringData.map((data) =>
        <TreeRing position={data.position}
                  radiusTop={data.radiusTop}
                  radiusBottom={data.radiusBottom}
                  ringThickness={customizationData.ringThickness}
                  key={`ring${data.radiusBottom}/${customizationData.ringAmount}`}/>
    );

    return (
        <animated.group position={position} rotation={rotation}>
            {christmasRings}
        </animated.group>
    );
};

ChristmasTree.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number),
    customizationData: PropTypes.objectOf(PropTypes.number)
};

