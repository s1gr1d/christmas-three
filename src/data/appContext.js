import React from "react";

const data = {
  ringAmount: 5,
  ringSpacing: 2,
  bottomRadius: 25,
  ringThickness: 5
};

export const AppContext = React.createContext(data);
