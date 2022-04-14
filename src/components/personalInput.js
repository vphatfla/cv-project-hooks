import { useEffect, useState } from "react";
import InputFieldRender from "./inputFieldRender";

function PersonalInput(props) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    //update everytime state(s) change
    useEffect( () => {
        props.updateValues(name,address,phoneNumber,email);
    })

    return(
        <div className="personalInfoInput">
            <h2>Personal Information</h2>
            <InputFieldRender nameOfInput="Name" setValue={setName}/>
            <InputFieldRender nameOfInput="Address" setValue={setAddress}/>
            <InputFieldRender nameOfInput="Phone Number" setValue={setPhoneNumber}/>
            <InputFieldRender nameOfInput="Email" setValue={setEmail}/>            
        </div>
    )
}

export default PersonalInput;