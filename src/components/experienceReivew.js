function ExperienceReview (props) {
    const {exp} = props;
    const position = exp.position;
    const company = exp.company;
    const city = exp.city;
    const from = exp.from;
    const to = exp.to;
    const description = exp.description;
    return (
        <div className="experienceSection">

            <div className="topSide">

                <div className="leftSide">
                    <p>{position}</p>
                </div>

                <p>{company}</p>

                <div className="rightSide">
                    <p>{from}-{to}</p>
                    <p>{city}</p>
                </div>

            </div>

            <div className="botSide">
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ExperienceReview;