import React, {useState} from "react";
import {useSpring, animated} from '@react-spring/three'
import PropTypes from "prop-types";

export const TreeRing = ({position, radiusTop, radiusBottom, ringThickness}) => {

        const [hovered, setHovered] = useState(false)

        const {animatedPos} = useSpring({
            animatedPos: hovered ? [position[0], position[1] + 5, position[2]] : position,
            from: {animatedPos: position},
            config: {duration: 2000}
        });

        return (
            <>
                <animated.mesh
                    onClick={() => console.log("click")}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    rotation={[0, 0, 0]}
                    position={animatedPos}
                >
                    <animated.cylinderBufferGeometry
                        attach="geometry"
                        args={[radiusTop, radiusBottom, ringThickness, 100]}/>
                    <meshNormalMaterial
                        attach="material"
                        opacity={0.5}
                    />
                </animated.mesh>
            </>
        );
    }
;

TreeRing.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    radiusBottom: PropTypes.number.isRequired,
    radiusTop: PropTypes.number.isRequired,
    ringThickness: PropTypes.number.isRequired
};