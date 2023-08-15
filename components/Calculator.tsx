'use client'
import { useState } from 'react'


export function Calculator ( props : any) {
    const [formData, setFormData] = useState({gt: "",basic: "", intricate: "", powerful: ""});

    const handleChange = (event : any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    
    const handleSubmit = (event : any) => {
        event.preventDefault();
        alert(`GT: ${formData.gt}, Basic: ${formData.basic}, Intricate: ${formData.intricate}, Powerful: ${formData.powerful}`
        );
        };

    return (
        <div className='bg-red-400 flex justify-center rounded-lg p-8 m-auto'>
        <div className='flex flex-col'>
          <p className='text-blue-800 pb-4'>{props.imbui}</p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <label htmlFor="gt">Gold Token</label>
            <input type="number" id="gt" name="gt" value={formData.gt} onChange={handleChange}/>
            <label htmlFor="basic">Basic</label>
            <input type="number" id="basic" name="basic" value={formData.basic} onChange={handleChange}/>
            <label htmlFor="intricate">Intricate</label>
            <input type="number" id="intricate" name="intricate" value={formData.intricate} onChange={handleChange}/>
            <label htmlFor="powerful">Powerful</label>
            <input type="number" id="powerful" name="powerful" value={formData.powerful} onChange={handleChange}/>
            <button className='bg-blue-500 hover:bg-blue-700 
                text-white font-bold py-2 rounded-lg w-32' type="submit">
                Calculate
            </button>
          </form>
        </div>
      </div>
    )
}