import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import ComputerReadOnlyRow from "./ComputerReadOnlyRow";
import ComputerEditableRow from "./ComputerEditableRow";

const ComputerTableRow = () => {
  const { computers, setComputers, editComputerId, setEditComputerId, computersUrl, search, setSearch } =
    useStateContext();
  
    
  const [editFormData, setEditFormData] = useState({
    model: "",
    core: "",
    disk_space: "",
    lease_terms: "",
    payment_per_month: "",
    purchase_price: "",
    condition: "",
    client_id: "",
  });

  const handleEditClick = (event, computer) => {
    event.preventDefault();
    setEditComputerId(computer.id);

    const formValues = {
      model: computer.model,
      core: computer.core,
      disk_space: computer.disk_space,
      ram: computer.ram,
      lease_terms: computer.lease_terms,
      payment_per_month: computer.payment_per_month,
      purchase_price: computer.purchase_price,
      condition: computer.condition,
      client_id: computer.client_id,
      
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditComputerId(null);
  };

  function handleUpdateFormData(formValues) {
    const updatedFormValues = computers.map((computer) => {
      if(computer.id === formValues.id) {
        return formValues;
      } else {
        return computer;
      }
    })
    setComputers(updatedFormValues)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const editComputerForm = {
      model: editFormData.model,
      core: editFormData.core,
      disk_space: editFormData.disk_space,
      ram: editFormData.ram,
      lease_terms: editFormData.lease_terms,
      payment_per_month: editFormData.payment_per_month,
      purchase_price: editFormData.purchase_price,
      condition: editFormData.condition,
      client_id: editFormData.client_id
     }
  
    const handleUpdateFetch = () => {
      computers.map((computer) => {
        return (
          fetch(`${computersUrl}/${computer.id}`, {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify(editComputerForm)
          })
          .then(response => response.json())
          .then(updatedComputer => {
            handleUpdateFormData(updatedComputer)
            
          })
        )
      })
     
    }
    handleUpdateFetch();
   
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  const computerListToDisplay = computers.filter((computerInfo) => computerInfo.model.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
          <div className="w-11/12">
            <div className="bg-white shadow-md rounded my-6">
            <div className="flex justify-end">
                <input
                  className="w-1/4 border-2 border-gray-300 pl-3 py-2 mb-2 rounded-md"
                  type="text"
                  name="search"
                  placeholder="Search by model ..."
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
              <form>
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-[#FDBFFF] text-[#130026] uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Id</th>
                      <th className="py-3 px-6 text-left">Model</th>
                      <th className="py-3 px-6 text-left">Core</th>
                      <th className="py-3 px-6 text-left">Disk <br/>space</th>
                      <th className="py-3 px-6 text-center">RAM</th>
                      <th className="py-3 px-6 text-center">Lease<br/> Terms</th>
                      <th className="py-3 px-6 text-center">Monthly <br/>Payment</th>
                    <th className="py-3 px-6 text-center">Purchase <br/>Price</th>
                    <th className="py-3 px-6 text-center">Condition</th>
                    <th className="py-3 px-6 text-center">Client</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {computerListToDisplay.map((computer) => (
                      <>
                        {editComputerId === computer.id ? (
                          <ComputerEditableRow
                            key={computer.id}
                            editFormData={editFormData}
                            setEditFormData={setEditFormData}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <ComputerReadOnlyRow
                            computer={computer}
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

export default ComputerTableRow;
