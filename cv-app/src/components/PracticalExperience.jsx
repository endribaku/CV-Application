import { useState } from 'react';

const practicalExperience = {
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: null,
    dateUntil: null
}

function formatDate(value) {
    if (!value) return ""; // empty string or undefined/null
    const date = new Date(value);
    return isNaN(date) ? "" : date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function PracticalExperience( {isEditing} ) {
    const [initialPracticalExperience, setInitialPracticalExperience] = useState(practicalExperience);
    

    let fields = "";


    function handleChange(e, field) {
        setInitialPracticalExperience({...initialPracticalExperience, [field]: e.target.value});
    }
    
    if(isEditing) {
        fields = <>
                {
                    Object.keys(initialPracticalExperience).map(infoField => {
                        if(infoField.includes("date")) {
                            return <input type="date" 
                            key={infoField} 
                            value={formatDate(initialPracticalExperience[infoField])}
                            onChange={(e) => handleChange(e, infoField)}></input>
                        } else {
                            return <input key={infoField} 
                                    value={initialPracticalExperience[infoField]}
                                    placeholder={infoField.toUpperCase()}
                                    onChange={(e) => handleChange(e, infoField)}></input>
                        }
                    })
                }
                
            </>
    } else {
        fields = <>
                    {
                        Object.keys(initialPracticalExperience).map(infoField => {
                            return <div key={infoField}>
                                <p>{initialPracticalExperience[infoField]}</p>
                            </div>
                        })
                    }
        
                </>
    }


    return <>
            <h3>Practical Experience</h3>
            {fields}
            </>;
}

export default PracticalExperience;