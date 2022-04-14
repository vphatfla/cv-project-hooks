import { useState } from "react";
function InputFieldRender(props) {
    const [value, setValue] = useState("");

    
    const handleChange = (e) => {
        e.preventDefault();
        props.setValue(e.target.value);
        setValue(e.target.value);
    }
    return (
        <div>
            <form>
                <label>
                    {props.nameOfInput}
                    <input 
                        type='text'
                        value={value}
                        onChange={handleChange}/>
                </label>               
            </form>
        </div>
    )
}

export default InputFieldRender;