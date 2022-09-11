import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import ManufacturerReadOnlyRow from "./ManufacturerReadOnlyRow";
import ManufacturerEditableRow from "./ManufacturerEditableRow";

const ManufacturerTableRow = () => {
  const { manufacturers, setManufacturers, editManufacturerId, setEditManufacturerId, manufacturersUrl, search, setSearch } =
    useStateContext();
  
    


  const [editFormData, setEditFormData] = useState({
    id: "",
    company_name: "",
  });

  const handleEditClick = (event, manufacturer) => {
    event.preventDefault();
    setEditManufacturerId(manufacturer.id);

    const formValues = {
      name: manufacturer.name,
      location: manufacturer.location,
      phone: manufacturer.phone,
      email: manufacturer.email,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditManufacturerId(null);
  };

  function handleUpdateFormData(formValues) {
    const updatedFormValues = manufacturers.map((manufacturer) => {
      if(manufacturer.id === formValues.id) {
        return formValues;
      } else {
        return manufacturer;
      }
    })
    setManufacturers(updatedFormValues)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const editManufacturerForm = { 
      company_name: editFormData.company_name,
     }
  
    const handleUpdateFetch = () => {
      manufacturers.map((manufacturer) => {
        return (
          fetch(`${manufacturersUrl}/${manufacturer.id}`, {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify(editManufacturerForm)
          })
          .then(response => response.json())
          .then(updatedManufacturer => {
            handleUpdateFormData(updatedManufacturer)
            
          })
        )
      })
     
    }
    handleUpdateFetch();
   
  }
  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  const manufacturerListToDisplay = manufacturers.filter((manufacturerInfo) => manufacturerInfo.company_name.toLowerCase().includes(search.toLowerCase()));

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
              <form>
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-[#FDBFFF] text-[#130026] uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Id</th>
                      <th className="py-3 px-6 text-left">Company name</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {manufacturerListToDisplay.map((manufacturer) => (
                      <>
                        {editManufacturerId === manufacturer.id ? (
                          <ManufacturerEditableRow
                            key={manufacturer.id}
                            editFormData={editFormData}
                            setEditFormData={setEditFormData}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <ManufacturerReadOnlyRow
                            manufacturer={manufacturer}
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

export default ManufacturerTableRow;
