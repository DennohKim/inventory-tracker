import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { HiOutlineSave } from "react-icons/hi";

const PrinterEditableRow = ({
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
              size="5"
              value={editFormData.id}
              onChange={(e) => setEditFormData(e.target.value)}
            />
          </td>
          <td className="py-3 px-2 text-left whitespace-nowrap">
            <input
              type="text"
              required="required"
              placeholder="Enter a model..."
              name="name"
              size="5"
              value={editFormData.model}
              onChange={(e) => setEditFormData(e.target.value)}
            />
          </td>
          <td className="py-3 px-2 text-left">
            <input
              type="text"
              required="required"
              placeholder="Enter lease terms..."
              name="email"
              size="5"
              value={editFormData.lease_terms}
              onChange={(e) => setEditFormData(e.target.value)}
            />
          </td>
          <td className="py-3 px-2 text-left">
            <input
              type="text"
              required="required"
              placeholder="Enter payment..."
              name="email"
              size="5"
              value={editFormData.payment_per_month}
              onChange={(e) => setEditFormData(e.target.value)}
            />
          </td>
          <td className="py-3 px-2 text-left">
            <input
              type="text"
              required="required"
              placeholder="Enter purchase price..."
              name="email"
              size="5"
              value={editFormData.purchase_price}
              onChange={(e) => setEditFormData(e.target.value)}
            />
          </td>
          <td className="py-3 px-2 text-left">
            <input
              type="text"
              required="required"
              placeholder="Enter condition..."
              name="email"
              size="5"
              value={editFormData.condition}
              onChange={(e) => setEditFormData(e.target.value)}
            />
          </td>
          <td className="py-3 px-2 text-left">
            <input
              type="text"
              required="required"
              placeholder="Enter client..."
              name="email"
              size="5"
              value={editFormData.enterprise_id}
              onChange={(e) => setEditFormData(e.target.value)}
            />
          </td>
          <td className="py-3 px-2 text-left">
            <input
              type="text"
              required="required"
              placeholder="Enter client..."
              name="email"
              size="5"
              value={editFormData.manufacturer_id}
              onChange={(e) => setEditFormData(e.target.value)}
            />
          </td>
          <td className="py-3 px-2 text-center">
            <div className="flex item-center justify-center">
              <button
                type="submit"
                className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
              >
                <HiOutlineSave />
              </button>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <ImCancelCircle onClick={handleCancelClick} />
              </div>
            </div>
          </td>
        </tr>
    </>
  );
};

export default PrinterEditableRow;
