import { useState, createContext, useContext } from "react";

const CounterCtx = createContext(null);

// Provider
const CounterContextProvider = ({ children }) => {
  <CounterCtx.Provider value={useState(0)}>{children}</CounterCtx.Provider>;
};
