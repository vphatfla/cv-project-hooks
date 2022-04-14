import PersonalInput from "./personalInput";
import PreviewDiv from "./previewDiv";
import {useState} from "react";
import ExperienceInput from "./experienceInput";

function Main() {
    // variable for personal information
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    // function to update name/address/phoneNumber/email in main.js from personalInput.js
    const updatePersionalInfo = (name,address,phoneNumber,email) => {
        setName(name);
        setAddress(address);
        setPhoneNumber(phoneNumber);
        setEmail(email);
    }

    // variable for experience
    const array = [
        []
    ];
    const [experience, setExperience] = useState(array);
    // function to update experience from experienceInput.js
    const updateExperience = (newExperience, index) =>{
        const ar = experience;
        ar[index] = newExperience;
        setExperience(experience => [...ar]);
    }
    return (
        <div>
            <div>
                <PersonalInput updateValues={updatePersionalInfo}/>
                
                
                {experience.map( (exp, index) => {
                    if (exp !== 0) 
                        return <ExperienceInput 
                                updateValues={updateExperience}
                                index = {index}
                                key = {index}
                                /> 
                    return false;
                } )}
                
            </div>
            
            <div>
                <PreviewDiv
                    name={name}
                    address={address}
                    phoneNumber={phoneNumber}
                    email={email}
                    experience={experience}
                />
            </div>
            
        </div>
    )
}

export default Main;