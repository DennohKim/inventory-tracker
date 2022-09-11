import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";

const PrinterForm = () => {
  const { printersUrl, manufacturers, enterprises, printers, setPrinters } = useStateContext();

  const [formData, setFormData] = useState({
    model: "",
    lease_terms: "",
    payment_per_month: "",
    purchase_price: "",
    condition: "",
    enterprise_id: "",
    manufacturer_id: "",
  });

  function handleAddPrinters(newPrinter){
    setPrinters([...printers, newPrinter]);
  }

  function handleChange(event) {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const addPrinterForm = {
      model: formData.model,
      lease_terms: formData.lease_terms,
      payment_per_month: formData.payment_per_month,
      purchase_price: formData.purchase_price,
      condition: formData.condition,
      enterprise_id: formData.enterprise_id,
      manufacturer_id: formData.manufacturer_id,
    };

    fetch(printersUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addPrinterForm),
    })
      .then((response) => response.json())
      .then((newPrinter) => {
        handleAddPrinters(newPrinter);
        setFormData({
          ...formData,
          model: "",
          lease_terms: "",
          payment_per_month: "",
          purchase_price: "",
          condition: "",
          enterprise_id: "",
          manufacturer_id: "",
        });
      });
  }

  return (
    <div className="flex justify-center align-center">
      <form
        onSubmit={handleSubmit}
        className="flex bg-white rounded px-8 pt-6 pb-2 mb-4"
      >
        <div className="grid ">
          <div>
            <div className="flex gap-x-8">
              <div className="mb-4 ">
                <label
                  className="flex text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Printers"
                >
                  Model
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  type="text"
                  placeholder="Model"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lease_terms"
                >
                  Lease Terms
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="lease_terms"
                  value={formData.lease_terms}
                  onChange={handleChange}
                  type="text"
                  placeholder="Years"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="payment_per_month"
                >
                  Monthly Payments
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="payment_per_month"
                  value={formData.payment_per_month}
                  onChange={handleChange}
                  type="number"
                  placeholder="2000"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="purchase_price"
                >
                  Purchase Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="purchase_price"
                  value={formData.purchase_price}
                  onChange={handleChange}
                  type="number"
                  placeholder="20000"
                />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="condition"
                >
                  Condition
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  type="text"
                  placeholder="Good"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Enterprise"
                >
                  Enterprise
                </label>
                {/* <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="condition"
                  value={formData.enterprise_id}
                  onChange={handleChange}
                  type="number"
                  placeholder=""
                /> */}
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                >
                  {enterprises.map(function (enterprise) {
                    return (
                      <option value={formData.enterprise_id}>{enterprise.business_name}</option>
                    );
                  })}
              </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Enterprise"
                >
                  Manufacturer
                </label>
                {/* <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="condition"
                  value={formData.manufacturer_id}
                  onChange={handleChange}
                  type="number"
                  placeholder=""
                /> */}
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                >
                  {manufacturers.map(function (manufacturer) {
                    return (
                      <option value={formData.manufacturer_id}>{manufacturer.company_name}</option>
                    );
                  })}
              </select>
              </div>
              <div className="flex items-center justify-between">
                <input
                  className="bg-[#130026] hover:bg-[#130026] text-[#F05AF6] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  cursor-pointer"
                  id="submit"
                  value="Add Printer"
                  type="submit"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PrinterForm;
