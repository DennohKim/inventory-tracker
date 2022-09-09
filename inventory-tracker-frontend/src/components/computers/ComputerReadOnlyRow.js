import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const ComputerReadOnlyRow = ({ computer, handleEditClick }) => {
  const { computers, setComputers, computersUrl } = useStateContext();

  const {
    id,
    model,
    core,
    disk_space,
    ram,
    lease_terms,
    payment_per_month,
    purchase_price,
    condition,
    client_id,
  } = computer;

  function handleComputerDelete(id) {
    const updatedComputers = computers.filter((Computer) => Computer.id !== id);
    setComputers(updatedComputers);
  }

  function handleDeleteClick() {
    fetch(`${computersUrl}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => handleComputerDelete());
  }

  return (
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
            <span>{model}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{core}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{disk_space}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{ram}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{lease_terms}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{payment_per_month}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{purchase_price}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{condition}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{client_id}</span>
          </div>
        </td>

        {/* <td className="py-3 px-6 text-center">
          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
            Active
          </span>
        </td> */}
        <td className="py-3 px-2 text-center">
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
              <BiEdit onClick={(event) => handleEditClick(event, computer)} />
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

export default ComputerReadOnlyRow;
