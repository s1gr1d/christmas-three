import React, {useMemo, useState} from 'react'
import {animated, useSpring} from "@react-spring/three";

export function Stars() {

    const [move, setMove] = useState(false);

    const {springRot} = useSpring({
        onRest: () => setMove(!move), // starting animation in the opposite direction
        springRot: move ? [0, 0, 0] : [360, 360, 360],
        from: {springRot: move ? [360, 360, 360] : [0, 0, 0]},
        config: {duration: 2000000},

    });

    const coords = useMemo(() => {
        return Array.from({length: 1000},
            () => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
    }, []);

    const stars = useMemo(() => coords.map(([p1, p2, p3], i) => (
        <mesh key={i} position={[p1, p2, p3]}>
            <sphereBufferGeometry
                attach="geometry"
                args={[1, 10, 10]}/>
            />
            <meshBasicMaterial
                attach={'material'}
                color={'#FFF5EB'}/>
        </mesh>
    )), [coords]);

    return (
        <animated.group position={[0, 0, 0]} scale={[1, 1, 1]} rotation={springRot}>
            {stars}
        </animated.group>
    )
}