import React, {useState} from "react"

function Input() {
    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <input
                type="text"
                onChange={handleChange}
                value={value}/>

            <h1>{value}</h1>
        </div>

    )
}

export default Input