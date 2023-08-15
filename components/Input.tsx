import { useState } from "react"

export function Input( props : any) {
    const [value, setValue] = useState("")

    return (
        <div>
            <label className='pr-3' htmlFor="">{props.title}</label>
            <input onChange={ (event) => setValue(event.target.value)} type='number'/>
        </div>
    )
}