import ExperienceReview from "./experienceReivew";

function PreviewDiv(props) {
    const {address, name, phoneNumber,email,
        experience    
    } = props;
    return(
        <div className="previewDiv">
            <div className="personalInfoReview">
                <div className="leftSide">
                    <p>{address}</p>
                </div>

                <div className="midSide">
                    <p id="name">{name}</p>
                </div>

                <div className="rightSide">
                    <p>{phoneNumber}</p>
                    <p>{email}</p>
                </div>

            </div>

            <div className="experienceReview">
                {   
                    experience.map( (exp, index) => {
                        if (exp!==0) return <ExperienceReview exp = {exp} key={index}/>
                        return false;
                    })
                }
            </div>
        </div>
    )
}

export default PreviewDiv;