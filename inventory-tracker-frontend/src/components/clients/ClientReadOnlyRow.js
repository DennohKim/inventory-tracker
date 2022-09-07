import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const ClientReadOnlyRow = ({ client, handleEditClick}) => {
  const { clients,setClients, clientsUrl} = useStateContext();

  const {id, name, location, phone, email} = client;

  function handleClientDelete(id){

    const updatedClients = clients.filter((client) => client.id !== id);
    setClients(updatedClients);
  }

  function handleDeleteClick(){
    fetch(`${clientsUrl}/${id}`, {
      method: 'DELETE'

    })
    .then(response => response.json())
    .then(() => handleClientDelete()
  
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
            <span>{name}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{location}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{phone}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{email}</span>
          </div>
        </td>
        {/* <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span>{created_at}</span>
                      </div>
                    </td> */}
        {/* <td className="py-3 px-6 text-center">
                      <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        Active
                      </span>
                    </td> */}
        {/* <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span>{updated_at}</span>
                      </div>
                    </td> */}
        <td className="py-3 px-2 text-center">
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <BiEdit onClick={(event) => handleEditClick(event, client)} />
            </div>
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <AiOutlineDelete onClick={handleDeleteClick} />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ClientReadOnlyRow;
