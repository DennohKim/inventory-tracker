import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const PrinterReadOnlyRow = ({ printer, handleEditClick }) => {
  const { printers, setPrinters, printersUrl } = useStateContext();

  const {
    id,
    model,
    lease_terms,
    payment_per_month,
    purchase_price,
    condition,
    enterprise_id,
    manufacturer_id,
  } = printer;

  function handlePrinterDelete(id) {
    const updatedPrinters = printers.filter((Printer) => Printer.id !== id);
    setPrinters(updatedPrinters);
  }

  function handleDeleteClick() {
    fetch(`${printersUrl}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => handlePrinterDelete(id));
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
            <span>{lease_terms} years</span>
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
            <span>{enterprise_id}</span>
          </div>
        </td>
        <td className="py-3 px-2 text-left">
          <div className="flex items-center">
            <div className="mr-2"></div>
            <span>{manufacturer_id}</span>
          </div>
        </td>

        {/* <td className="py-3 px-6 text-center">
          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
            Active
          </span>
        </td> */}
        <td className="py-3 px-2 text-center">
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <BiEdit onClick={(event) => handleEditClick(event, printer)} />
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

export default PrinterReadOnlyRow;
