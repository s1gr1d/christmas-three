import React from "react";
import { TreeRing } from "./components/treeRing";
import { Group } from "./components/group";
import { Canvas } from "react-three-fiber";
import "./App.css";
import { ChristmasTree } from "./components/christmasTree";
import { Controls} from "./components/controls";
import { AppContext} from "./data/appContext";


const App = () => (
  <AppContext.Provider >
    <Controls/>
    <Canvas>
      <Group>
        <ChristmasTree
          position={[0, -20, 0]}
          ringAmount={6}
          ringSpacing={2}
          bottomRadius={25}
          ringThickness={5}/>
      </Group>
    </Canvas>
  </AppContext.Provider>
);

export default App;
