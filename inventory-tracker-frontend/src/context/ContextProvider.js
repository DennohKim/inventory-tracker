import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const clientsUrl = "";
  const businessEntitiesUrl = "";
  const computersUrl = "";
  const printersUrl = "";
  const manufacturersUrl = "";

  const [clients, setClients] = useState([]);
  const [businessEntities, setBusinessEntities] = useState([]);
  const [computers, setComputers] = useState([]);
  const [printers, setPrinters] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [search, setSearch ] = useState("");

  useEffect(() => {
    fetch(clientsUrl)
      .then((res) => res.json())
      .then((clients) => setClients(clients));
  }, []);

  useEffect(() => {
    fetch(businessEntitiesUrl )
      .then((res) => res.json())
      .then((business) => setBusinessEntities(business));
  }, []);

  useEffect(() => {
    fetch(computersUrl)
      .then((res) => res.json())
      .then((computer) => setComputers(computer));
  }, []);

  useEffect(() => {
    fetch(printersUrl)
      .then((res) => res.json())
      .then((printer) => setPrinters(printer));
  }, []);

  useEffect(() => {
    fetch(manufacturersUrl)
      .then((res) => res.json())
      .then((manufacturer) => setManufacturers(manufacturer));
  }, []);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        clients,
        setClients,
        businessEntities,
        setBusinessEntities,
        printers,
        setPrinters,
        computers,
        setComputers,
        manufacturers,
        setManufacturers,
        search,        
        setSearch
       
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);