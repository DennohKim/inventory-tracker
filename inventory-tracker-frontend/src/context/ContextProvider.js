import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const clientsUrl = "http://localhost:9292/clients";
  const enterprisesUrl = "http://localhost:9292/enterprises";
  const computersUrl = "";
  const printersUrl = "";
  const manufacturersUrl = "http://localhost:9292/manufacturers";

  const [clients, setClients] = useState([]);
  const [enterprises, setEnterprises] = useState([]);
  const [computers, setComputers] = useState([]);
  const [printers, setPrinters] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [search, setSearch] = useState("");
  const [editClientId, setEditClientId] = useState(null);
  const [editEnterpriseId, setEditEnterpriseId] = useState(null);
  const [editManufacturerId, setEditManufacturerId] = useState(null);
  const [editComputerId, setEditComputerId] = useState(null);
  const [editPrinterId, setEditPrinterId] = useState(null);
  

  useEffect(() => {
    fetch(clientsUrl)
      .then((res) => res.json())
      .then((clients) => setClients(clients))
      .catch(e=>console.log(e));
  }, []);
  
  useEffect(() => {
    fetch(enterprisesUrl)
      .then((res) => res.json())
      .then((business) => setEnterprises(business));
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
        clientsUrl,
        enterprisesUrl,
        computersUrl,
        printersUrl,
        manufacturersUrl,
        clients,
        setClients,
        enterprises,
        setEnterprises,
        printers,
        setPrinters,
        computers,
        setComputers,
        manufacturers,
        setManufacturers,
        search,
        setSearch,
        editClientId,
        setEditClientId,
        editEnterpriseId,
        setEditEnterpriseId,
        editManufacturerId,
        setEditManufacturerId,
        editComputerId,
        setEditComputerId,
        editPrinterId,
        setEditPrinterId

      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
