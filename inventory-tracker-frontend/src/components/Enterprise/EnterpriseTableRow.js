import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import EnterpriseReadOnlyRow from "./EnterpriseReadOnlyRow";
import EnterpriseEditableRow from "./EnterpriseEditableRow";

const EnterpriseTableRow = () => {
  const { Enterprises, setEnterprises, editEnterpriseId, setEditEnterpriseId, EnterprisesUrl } =
    useStateContext();
  
    


  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    location: "",
    phone: "",
    email: "",
  });

  const handleEditClick = (event, Enterprise) => {
    event.preventDefault();
    setEditEnterpriseId(Enterprise.id);

    const formValues = {
      name: Enterprise.name,
      location: Enterprise.location,
      phone: Enterprise.phone,
      email: Enterprise.email,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditEnterpriseId(null);
  };

  function handleUpdateFormData(formValues) {
    const updatedFormValues = Enterprises.map((Enterprise) => {
      if(Enterprise.id === formValues.id) {
        return formValues;
      } else {
        return Enterprise;
      }
    })
    setEnterprises(updatedFormValues)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const editEnterpriseForm = { 
      name: editFormData.name,
      location: editFormData.location,
      phone: editFormData.phone,
      email: editFormData.email}
  
    const handleUpdateFetch = () => {
      Enterprises.map((Enterprise) => {
        return (
          fetch(`${EnterprisesUrl}/${Enterprise.id}`, {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify(editEnterpriseForm)
          })
          .then(response => response.json())
          .then(updatedEnterprise => {
            handleUpdateFormData(updatedEnterprise)
            
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
                    {Enterprises.map((Enterprise) => (
                      <>
                        {editEnterpriseId === Enterprise.id ? (
                          <EnterpriseEditableRow
                            key={Enterprise.id}
                            editFormData={editFormData}
                            setEditFormData={setEditFormData}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <EnterpriseReadOnlyRow
                            Enterprise={Enterprise}
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

export default EnterpriseTableRow;
