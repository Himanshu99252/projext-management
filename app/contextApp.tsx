"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Defining the structure of the context
type AppType = {
  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

// Setting the default state
const defaultState: AppType = {
  openSideBarObject: {
    openSideBar: false,
    setOpenSideBar: () => {}, // Placeholder function
  },
};

// Creating the context
const ContextApp = createContext<AppType>(defaultState);

// Creating the provider component
export default function ContextAppProvider({ children }: { children: ReactNode }) {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <ContextApp.Provider value={{ openSideBarObject: { openSideBar, setOpenSideBar } }}>
      {children}
    </ContextApp.Provider>
  );
}

// Creating the custom hook
export function useContextApp() {
  return useContext(ContextApp);
}
