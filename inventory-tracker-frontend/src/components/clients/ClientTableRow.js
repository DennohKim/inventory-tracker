import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import ClientReadOnlyRow from "./ClientReadOnlyRow";
import ClientEditableRow from "./ClientEditableRow";

const ClientTableRow = () => {
  const {
    clients,
    setClients,
    editClientId,
    setEditClientId,
    clientsUrl,
    search,
    setSearch,
    
  } = useStateContext();


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

  function handleUpdateFormData(formValuesObj) {
  
    const updatedFormValues = clients.map((client) => {
      if (client.id === formValuesObj.id) {
        return formValuesObj;
      } else {
        return client;
      }
    });
    setClients(updatedFormValues);
  }


  function handleEditFormSubmit(e) {
    e.preventDefault();

    const editClientForm = {
      name: editFormData.name,
      location: editFormData.location,
      phone: editFormData.phone,
      email: editFormData.email,
    };

    const handleUpdateRequest = () => {
      clients.map(async (client) => {
        const response = await fetch(`${clientsUrl}/${client.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editClientForm),
        });
        const updatedClient = await response.json();
        handleUpdateFormData(updatedClient);
        return updatedClient;
      });
    };
    handleUpdateRequest();
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  const clientListToDisplay = clients.filter((clientsInfo) => clientsInfo.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
          <div className="w-11/12">
            <div className="bg-white shadow-md rounded my-6 ">
              <div className="flex justify-end">
                <input
                  className="w-1/4 border-2 border-gray-300 pl-3 py-2 mb-2 rounded-md"
                  type="text"
                  name="search"
                  placeholder="Search by name ..."
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
              <form>
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-[#FDBFFF] text-[#130026]  uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Id</th>
                      <th className="py-3 px-6 text-left">Full name</th>
                      <th className="py-3 px-6 text-left">Location</th>
                      <th className="py-3 px-6 text-center">Phone</th>
                      <th className="py-3 px-6 text-center">Email</th>
                      <th className="py-3 px-6 text-center">Date created</th>
                    {/* <th className="py-3 px-6 text-center">Updated at</th>  */}
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#130026]  text-sm font-light">
                    {clientListToDisplay.map((client) => (
                      <>
                        {editClientId === client.id? (
                          <ClientEditableRow
                            key={client.id}
                            editFormData={editFormData}
                            setEditFormData={setEditFormData}
                            handleCancelClick={handleCancelClick}
                           
                      
                          />
                        ) : ( 
                          <ClientReadOnlyRow
                            key={client.id}
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
