import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const ManufacturerReadOnlyRow = ({ manufacturer, handleEditClick}) => {
  const { manufacturers, setManufacturers, manufacturersUrl} = useStateContext();

  const {id, company_name} = manufacturer;

  function handleManufacturerDelete(id){

    const updatedManufacturers = manufacturers.filter((manufacturer) => manufacturer.id !== id);
    setManufacturers(updatedManufacturers);
  }

  function handleDeleteClick(){
    fetch(`${manufacturersUrl}/${id}`, {
      method: 'DELETE'

    })
    .then(response => response.json())
    .then(() => handleManufacturerDelete(id)
  
  )}


  return(
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-2 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span className="font-medium">{id}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{company_name}</span>
          </div>
        </td>
       
        <td className="py-3 px-2 text-center">
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
              <BiEdit onClick={(event) => handleEditClick(event, manufacturer)} />
            </div>
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
              <AiOutlineDelete onClick={handleDeleteClick} />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ManufacturerReadOnlyRow;
