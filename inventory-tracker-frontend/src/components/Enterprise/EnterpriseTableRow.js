import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import EnterpriseReadOnlyRow from "./EnterpriseReadOnlyRow";
import EnterpriseEditableRow from "./EnterpriseEditableRow";

const EnterpriseTableRow = () => {
  const { enterprises, setEnterprises, editEnterpriseId, setEditEnterpriseId, enterprisesUrl, search, setSearch } =
    useStateContext();
  
    


  const [editFormData, setEditFormData] = useState({
    id: "",
    business_name: "",
    address: "",
    physical_location: "",
    phone: "",
    email: "",
  });

  const handleEditClick = (event, enterprise) => {
    event.preventDefault();
    setEditEnterpriseId(enterprise.id);

    const formValues = {
      business_name: enterprise.business_name,
      address: enterprise.address,
      physical_location: enterprise.physical_location,
      phone: enterprise.phone,
      email: enterprise.email,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditEnterpriseId(null);
  };

  function handleUpdateFormData(formValues) {
    const updatedFormValues = enterprises.map((enterprise) => {
      if(enterprise.id === formValues.id) {
        return formValues;
      } else {
        return enterprise;
      }
    })
    setEnterprises(updatedFormValues)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const editEnterpriseForm = { 
      business_name: editFormData.business_name,
      address: editFormData.address,
      physical_location: editFormData.physical_location,
      phone: editFormData.phone,
      email: editFormData.email}
  
    const handleUpdateFetch = () => {
      enterprises.map((enterprise) => {
        return (
          fetch(`${enterprisesUrl}/${enterprise.id}`, {
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

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  const enterpriseListToDisplay = enterprises.filter((enterpriseInfo) => enterpriseInfo.business_name.toLowerCase().includes(search.toLowerCase()));

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
                  placeholder="Search by company name ..."
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
              <form onSubmit={handleFormSubmit}>
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-[#FDBFFF] text-[#130026] uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Id</th>
                      <th className="py-3 px-6 text-left">Business name</th>
                      <th className="py-3 px-6 text-left">Address</th>
                      <th className="py-3 px-6 text-center">Physical Location</th>
                      <th className="py-3 px-6 text-center">Phone</th>
                      <th className="py-3 px-6 text-center">Email</th>
                      <th className="py-3 px-6 text-center">Date created</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {enterpriseListToDisplay.map((enterprise) => (
                      <>
                        {editEnterpriseId === enterprise.id ? (
                          <EnterpriseEditableRow
                            key={enterprise.id}
                            editFormData={editFormData}
                            setEditFormData={setEditFormData}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <EnterpriseReadOnlyRow
                            enterprise={enterprise}
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
