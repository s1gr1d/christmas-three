import React from "react";
import {Group} from "./components/group";
import {Canvas} from "react-three-fiber";
import "./App.css";
import {ChristmasTree} from "./components/christmasTree";
import {StoreProvider} from "./data/storeContext";
import {Snowflakes} from "./components/snowflakes";

// as the context is not working yet, the initial data is stored here
const customizationData = {
    ringAmount: 6,
    ringSpacing: 3,
    bottomRadius: 20,
    ringThickness: 5
};

const customizationData2 = {
    ringAmount: 10,
    ringSpacing: 1,
    bottomRadius: 10,
    ringThickness: 2
};

const App = () => (
    <StoreProvider>
        <Canvas>
            <Snowflakes/>
            <Group>
                <ChristmasTree
                    position={[0, -20, 0]}
                    customizationData={customizationData}/>
                <ChristmasTree
                    position={[-30, -30, -5]}
                    customizationData={customizationData2}/>
            </Group>
        </Canvas>
    </StoreProvider>
);

export default App;
