import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const clientsUrl = "https://supplylync.herokuapp.com/clients";
  const enterprisesUrl = "https://supplylync.herokuapp.com/enterprises";
  const computersUrl = "https://supplylync.herokuapp.com/computers";
  const printersUrl = "https://supplylync.herokuapp.com/printers";
  const manufacturersUrl = "https://supplylync.herokuapp.com/manufacturers";

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
    const getClients = async () => {
      try {
        const response = await axios.get(clientsUrl);
        const clientsData = response.data;
        setClients(clientsData);
      } catch (error) {
        console.log(error);
      }
    };
    getClients();
  }, []);


  useEffect(() => {
    const getEnterprises = async () => {
      try {
        const response = await axios.get(enterprisesUrl);
        const enterprisesData = response.data;
        setEnterprises(enterprisesData);
      } catch (error) {
        console.log(error);
      }
    };
    getEnterprises();
  }, []);

  useEffect(() => {
    const getComputers = async () => {
      try {
        const response = await axios.get(computersUrl);
        const computersData = response.data;
        setComputers(computersData);
      } catch (error) {
        console.log(error);
      }
    };
    getComputers();
  }, []);

  useEffect(() => {
    const getPrinters = async () => {
      try {
        const response = await axios.get(printersUrl);
        const printersData = response.data;
        setPrinters(printersData);
      } catch (error) {
        console.log(error);
      }
    };
    getPrinters();
  }, []);

  useEffect(() => {
    const getManufacturers = async () => {
      try {
        const response = await axios.get(manufacturersUrl);
        const manufacturersData = response.data;
        setManufacturers(manufacturersData);
      } catch (error) {
        console.log(error);
      }
    };
    getManufacturers();
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
        setEditPrinterId,
       

      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
