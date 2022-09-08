import React, { useState } from 'react'
import { useStateContext } from '../../context/ContextProvider';


const ManufacturerForm = () => {

  const{ manufacturersUrl } = useStateContext();

  const [formData, setFormData ] = useState({
    company_name: "",
   

  });

  function handleChange(event){
    event.preventDefault();
    setFormData({...formData, [event.target.name]: event.target.value},)
  }

  function handleSubmit(event){
    event.preventDefault();

    const addManufacturerForm = { 
    company_name: formData.company_name,
    }

    fetch(manufacturersUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addManufacturerForm)

    })
    .then(response => response.json())
    .then(newManufacturer => {
      console.log(newManufacturer)
      setFormData({...formData,  company_name: ""})
    })
  }


  return (
    <div className='flex justify-center align-center'>
        <form onSubmit= {handleSubmit} className="flex bg-white rounded px-8 pt-6 pb-2 mb-4">
                <div className="flex gap-x-8">
                  <div className="mb-4 ">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="Manufacturers">
                      Company Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="company_name" value={formData.company_name} onChange={handleChange} type="text" placeholder="Full Name"/>
                  </div>
                  <div className="flex items-center justify-between">
                  <input className="bg-[#130026] hover:bg-[#130026] text-[#F05AF6] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  cursor-pointer" id="submit" value="Add Manufacturer" type="submit"/>
                </div>
                </div>
              </form>
    </div>
  )
}

export default ManufacturerForm;