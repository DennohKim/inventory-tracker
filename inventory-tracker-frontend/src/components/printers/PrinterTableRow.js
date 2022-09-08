import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import PrinterReadOnlyRow from "./PrinterReadOnlyRow";
import PrinterEditableRow from "./PrinterEditableRow";

const PrinterTableRow = () => {
  const { printers, setPrinters, editPrinterId, setEditPrinterId, printersUrl } =
    useStateContext();
  
    
  const [editFormData, setEditFormData] = useState({
    model: "",
    lease_terms: "",
    payment_per_month: "",
    purchase_price: "",
    condition: "",
    enterprise_id: "",
    manufacturer_id: "",
  });

  const handleEditClick = (event, printer) => {
    event.preventDefault();
    setEditPrinterId(printer.id);

    const formValues = {
        model: printer.model,
        lease_terms: printer.lease_terms,
        payment_per_month: printer.payment_per_month,
        purchase_price: printer.purchase_price,
        condition: printer.condition,
        enterprise_id: printer.enterprise_id,
        manufacturer_id: printer.manufacturer_id,
      
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditPrinterId(null);
  };

  function handleUpdateFormData(formValues) {
    const updatedFormValues = printers.map((printer) => {
      if(printer.id === formValues.id) {
        return formValues;
      } else {
        return printer;
      }
    })
    setPrinters(updatedFormValues)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const editPrinterForm = { 
        model: editFormData.model,
        lease_terms: editFormData.lease_terms,
        payment_per_month: editFormData.payment_per_month,
        purchase_price: editFormData.purchase_price,
        condition: editFormData.condition,
        enterprise_id: editFormData.enterprise_id,
        manufacturer_id: editFormData.manufacturer_id,
    }
  
    const handleUpdateFetch = () => {
      printers.map((printer) => {
        return (
          fetch(`${printersUrl}/${printer.id}`, {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify(editPrinterForm)
          })
          .then(response => response.json())
          .then(updatedPrinter => {
            handleUpdateFormData(updatedPrinter)
            
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
                    <tr className="bg-[#FDBFFF] text-[#130026] uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Id</th>
                      <th className="py-3 px-6 text-left">Model</th>
                      <th className="py-3 px-6 text-center">Lease<br/> Terms</th>
                      <th className="py-3 px-6 text-center">Monthly <br/>Payment</th>
                    <th className="py-3 px-6 text-center">Purchase <br/>Price</th>
                    <th className="py-3 px-6 text-center">Condition</th>
                    <th className="py-3 px-6 text-center">Enterprise</th>
                    <th className="py-3 px-6 text-center">Manufacturer</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {printers.map((printer) => (
                      <>
                        {editPrinterId === printer.id ? (
                          <PrinterEditableRow
                            key={printer.id}
                            editFormData={editFormData}
                            setEditFormData={setEditFormData}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <PrinterReadOnlyRow
                            printer={printer}
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

export default PrinterTableRow;
