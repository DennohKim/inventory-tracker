import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import ClientForm from "./ClientForm";

import ClientTableRow from "./ClientTableRow";

const ClientTable = () => {  


  
  return (
    <div>
      <ClientForm />
      <ClientTableRow  />
    </div>
  );
};

export default ClientTable;
