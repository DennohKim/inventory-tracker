import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import ClientReadOnlyRow from "./ClientReadOnlyRow";
import ClientEditableRow from "./ClientEditableRow";

const ClientTableRow = () => {
  const { clients, setClients, editClientId, setEditClientId, clientsUrl } =
    useStateContext();
  
    


  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    location: "",
    phone: "",
    email: "",
  });

  const handleEditClick = (event, client) => {
    event.preventDefault();
    setEditClientId(client.id);

    const formValues = {
      name: client.name,
      location: client.location,
      phone: client.phone,
      email: client.email,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditClientId(null);
  };

  function handleUpdateFormData(formValues) {
    const updatedFormValues = clients.map((client) => {
      if(client.id === formValues.id) {
        return formValues;
      } else {
        return client;
      }
    })
    setClients(updatedFormValues)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const editClientForm = { 
      name: editFormData.name,
      location: editFormData.location,
      phone: editFormData.phone,
      email: editFormData.email}
  
    const handleUpdateFetch = () => {
      clients.map((client) => {
        return (
          fetch(`${clientsUrl}/${client.id}`, {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify(editClientForm)
          })
          .then(response => response.json())
          .then(updatedClient => {
            handleUpdateFormData(updatedClient)
            
          })
        )
      })
     
    }
    handleUpdateFetch();
   
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
          <div className="w-11/12">
            <div className="bg-white shadow-md rounded my-6">
              <form onSubmit={handleFormSubmit}>
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Id</th>
                      <th className="py-3 px-6 text-left">Full name</th>
                      <th className="py-3 px-6 text-left">Location</th>
                      <th className="py-3 px-6 text-center">Phone</th>
                      <th className="py-3 px-6 text-center">Email</th>
                      {/* <th className="py-3 px-6 text-center">Created at</th>
                    <th className="py-3 px-6 text-center">Updated at</th> */}
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {clients.map((client) => (
                      <>
                        {editClientId === client.id ? (
                          <ClientEditableRow
                            key={client.id}
                            editFormData={editFormData}
                            setEditFormData={setEditFormData}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <ClientReadOnlyRow
                            client={client}
                            handleEditClick={handleEditClick}
                            
                          />
                        )}
                      </>
                    ))}
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTableRow;
