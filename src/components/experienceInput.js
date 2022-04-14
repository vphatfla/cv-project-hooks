import { useEffect, useState } from "react";
import InputFieldRender from "./inputFieldRender";

function ExperienceInput (props) {
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [description, setDescription] = useState('');

    useEffect( () => {
        const newList = {
            position: position,
            company: company,
            city: city,
            from: from,
            to: to,
            description: description
        }
        props.updateValues(newList, props.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position, company, city, from,to,description])
    return(
        <div className="experienceInput">
            <InputFieldRender nameOfInput="Position" setValue={setPosition}/>
            <InputFieldRender nameOfInput="Company" setValue={setCompany}/>
            <InputFieldRender nameOfInput="City" setValue={setCity}/>
            <InputFieldRender nameOfInput="From" setValue={setFrom}/>
            <InputFieldRender nameOfInput="To" setValue={setTo}/>
            <InputFieldRender nameOfInput="Description" setValue={setDescription}/>
        </div>
    )
}

export default ExperienceInput;