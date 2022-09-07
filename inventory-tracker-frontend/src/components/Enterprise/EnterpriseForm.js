import React, { useState } from 'react'
import { useStateContext } from '../../context/ContextProvider';


const EnterpriseForm = () => {

  const{ EnterprisesUrl } = useStateContext();

  const [formData, setFormData ] = useState({
    name: "",
    location: "",
    phone:"",
    email:"",
   

  });

  function handleChange(event){
    event.preventDefault();
    setFormData({...formData, [event.target.name]: event.target.value},)
  }

  function handleSubmit(event){
    event.preventDefault();

    const addEnterpriseForm = { 
    name: formData.name,
    location: formData.location,
    phone: formData.phone,
    email: formData.email}

    fetch(EnterprisesUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addEnterpriseForm)

    })
    .then(response => response.json())
    .then(newEnterprise => {
      console.log(newEnterprise)
      setFormData({...formData,  name: "", location: "", phone:"", email:""})
    })
  }


  return (
    <div className='flex justify-center align-center'>
        <form onSubmit= {handleSubmit} className="flex bg-white rounded px-8 pt-6 pb-2 mb-4">
                <div className="flex gap-x-8">
                  <div className="mb-4 ">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="Enterprises">
                      Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Land Reference">
                      Location
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="location" value={formData.location} onChange={handleChange} type="text" placeholder="Kawangware"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="value">
                      Phone
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="phone" value={formData.phone} onChange={handleChange}  type="number" placeholder="0712 345 678"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" value={formData.email} onChange={handleChange} type="text" placeholder="you@example.com"/>
                  </div>
                  <div className="flex items-center justify-between">
                  <input className="bg-[#E62953] hover:bg-[#FF2354] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  cursor-pointer" id="submit" value="Add Enterprise" type="submit"/>
                </div>
                </div>
              </form>
    </div>
  )
}

export default EnterpriseForm;