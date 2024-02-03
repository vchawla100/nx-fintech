import { createContext, useState, useContext } from "react";

export const ModalContext = createContext(null);

export const UseModal = () => {
  const modal = useContext(ModalContext);
  return modal;
};

export const ModalContextProvider = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen}}>
      {props.children}
    </ModalContext.Provider>
  );
};
