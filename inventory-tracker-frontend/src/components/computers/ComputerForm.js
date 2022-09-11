import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";

const ComputerForm = () => {
  const { computersUrl, computers,clients, setComputers } = useStateContext();

  const [formData, setFormData] = useState({
    model: "",
    core: "",
    disk_space: "",
    lease_terms: "",
    payment_per_month: "",
    purchase_price: "",
    condition: "",
    client_id: "",
  });

  function handleAddComputers(newComputer){
    setComputers([...computers, newComputer]);
  }

  function handleChange(event) {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const addComputerForm = {
      model: formData.model,
      core: formData.core,
      disk_space: formData.disk_space,
      ram: formData.ram,
      lease_terms: formData.lease_terms,
      payment_per_month: formData.payment_per_month,
      purchase_price: formData.purchase_price,
      condition: formData.condition,
      client_id: formData.client_id,
    };

    fetch(computersUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addComputerForm),
    })
      .then((response) => response.json())
      .then((newComputer) => {
        handleAddComputers(newComputer);
        setFormData({
          ...formData,
          model: "",
          core: "",
          disk_space: "",
          ram: "",
          lease_terms: "",
          payment_per_month: "",
          purchase_price: "",
          condition: "",
          client_id: "",
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
                  htmlFor="Computers"
                >
                  Computer Model
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
                  htmlFor="Cores"
                >
                  No. of Cores
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="core"
                  value={formData.core}
                  onChange={handleChange}
                  type="text"
                  placeholder="No. of Cores"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="disk_space"
                >
                  Disk Space
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="disk_space"
                  value={formData.disk_space}
                  onChange={handleChange}
                  type="string"
                  placeholder="500GB HDD"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ram"
                >
                  RAM
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="ram"
                  value={formData.ram}
                  onChange={handleChange}
                  type="text"
                  placeholder="8GB"
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
            </div>
            <div className="flex gap-x-8">
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
                  htmlFor="client"
                >
                  Client
                </label>
                {/* <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="condition"
                  value={formData.client_id}
                  onChange={handleChange}
                  type="number"
                  placeholder=""
                /> */}
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                >
                  {clients.map(function (client) {
                    return (
                      <option value={formData.client_id}>{client.name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="flex items-center justify-between">
                <input
                  className="bg-[#130026] hover:bg-[#130026] text-[#F05AF6] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  cursor-pointer"
                  id="submit"
                  value="Add Computer"
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

export default ComputerForm;
