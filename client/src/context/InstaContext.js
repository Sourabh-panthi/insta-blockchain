import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const InstaContext = createContext();

export const InstaProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <InstaContext.Provider value={{ isModalOpen, setIsModalOpen, closeModal }}>
      {children}
    </InstaContext.Provider>
  );
};
