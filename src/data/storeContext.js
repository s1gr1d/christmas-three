import React, {useState, createContext, useContext} from "react";

export const StateContext = createContext(null);

export const StoreProvider = ({children}) => {

    const [ringAmount, setRingAmount] = useState(0);
    const [ringSpacing, setRingSpacing] = useState(0);
    const [bottomRadius, setBottomRadius] = useState(0);
    const [ringThickness, setRingThickness] = useState(0);

    const store = {
        ringAmount: [ringAmount, setRingAmount],
        ringSpacing: [ringSpacing, setRingSpacing],
        bottomRadius: [bottomRadius, setBottomRadius],
        ringThickness: [ringThickness, setRingThickness]
    };

    return <StateContext.Provider value={store}>{children}</StateContext.Provider>
};

export const useStore = () => useContext(StateContext);
