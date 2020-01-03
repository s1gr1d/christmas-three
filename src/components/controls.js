import React from "react";
import styled from 'styled-components'
import {useStore} from "../data/storeContext";
import { useSpring, animated } from 'react-spring'

const StyledBox = styled(animated.div)`
  display: flex;
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: white;
`

// TODO: create a box with text boxes to customize the tree
export const Controls = () => {

    const ctx = useStore(); // customization data from store

    return (
        <>
            <StyledBox></StyledBox>
        </>
    );
};
