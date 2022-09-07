import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";

const EnterpriseForm = () => {
  const { enterprisesUrl } = useStateContext();

  const [formData, setFormData] = useState({
    id: "",
    business_name: "",
    address: "",
    physical_location: "",
    phone: "",
    email: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const addEnterpriseForm = {
      business_name: formData.business_name,
      address: formData.address,
      physical_location: formData.physical_location,
      phone: formData.phone,
      email: formData.email,
    };

    fetch(enterprisesUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addEnterpriseForm),
    })
      .then((response) => response.json())
      .then((newEnterprise) => {
        console.log(newEnterprise);
        setFormData({
          ...formData,
          business_name: "",
          address: "",
          physical_location: "",
          phone: "",
          email: "",
        });
      });
  }

  return (
    <div className="flex justify-center align-center">
      <form
        onSubmit={handleSubmit}
        className="flex bg-white rounded px-8 pt-6 pb-2 mb-4"
      >
        
          <div className="grid grid-rows-2">
            <div className="flex gap-x-8">
              <div className="mb-4 ">
                <label
                  className="flex text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Enterprises"
                >
                  Enterprise Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enterprise Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Land Reference"
                >
                  Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  type="text"
                  placeholder="Kawangware"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="value"
                >
                  Physical Location
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="physical_location"
                  value={formData.physical_location}
                  onChange={handleChange}
                  type="text"
                  placeholder="Rahimtula Building"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="value"
                >
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="0712 345 678"
                />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="you@example.com"
                />
              </div>
              <div className="flex items-center justify-between">
                <input
                  className="bg-[#E62953] hover:bg-[#FF2354] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  cursor-pointer"
                  id="submit"
                  value="Add Enterprise"
                  type="submit"
                />
              </div>
            </div>
          </div>
      </form>
    </div>
  );
};

export default EnterpriseForm;
