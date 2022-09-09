import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { HiOutlineSave } from "react-icons/hi";

const ManufacturerEditableRow = ({
  editFormData,
  setEditFormData,
  handleCancelClick,
}) => {
  return (
    <>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-2 text-left whitespace-nowrap">
            <input
              type="text"
              placeholder="Don't change the ID"
              name="id"
              size="10"
              value={editFormData.id}
              onChange={(e) => setEditFormData(e.target.value)}
            />
          </td>
          <td className="py-3 px-2 text-left whitespace-nowrap">
            <input
              type="text"
              required="required"
              placeholder="Enter a name..."
              name="name"
              size="10"
              value={editFormData.company_name}
              onChange={(e) => setEditFormData(e.target.value)}
            />
          </td>
          <td className="py-3 px-2 text-center">
            <div className="flex item-center justify-center">
              <button
                type="submit"
                className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
              >
                <HiOutlineSave />
              </button>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                <ImCancelCircle onClick={handleCancelClick} />
              </div>
            </div>
          </td>
        </tr>
    </>
  );
};

export default ManufacturerEditableRow;
