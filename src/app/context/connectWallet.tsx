"use client";
import React, { createContext } from "react";

interface ConnectWalletContextType {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const ConnectWalletContext = createContext<ConnectWalletContextType | undefined>(undefined);


export const ConnectWalletProvider = ({ children } : { children: React.ReactNode }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <ConnectWalletContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ConnectWalletContext.Provider>
  );
}

export const useConnectWallet = () => {
  const context = React.useContext(ConnectWalletContext);
  if (context === undefined) {
    throw new Error("useConnectWallet must be used within a ConnectWalletProvider");
  }
  return context;
}

