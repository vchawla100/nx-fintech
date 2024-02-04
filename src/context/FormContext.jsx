import { createContext, useState, useContext } from "react";

export const FormContext = createContext(null);

export const useForm = () => {
  const form = useContext(FormContext);
  return form;
};

export const FormContextProvider = (props) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");

  return (
    <FormContext.Provider
      value={{
        number,
        setNumber,
        name,
        setName,
        email,
        setEmail,
        vehicleNo,
        setVehicleNo,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
