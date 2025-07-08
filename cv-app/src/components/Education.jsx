import { useState } from 'react';

const educationExperience = {
    schoolName: "",
    studyTitle: "",
    dateOfStudy: "",
}

function Education({isEditing}) {
    const [initialEducation, setInitialEducation] = useState(educationExperience);

    let fields = "";

    
    if(isEditing) {
        fields = <>
                    {
                        Object.keys(initialEducation).map(infoField => {
                            return <input key={infoField} 
                            placeholder={infoField.toUpperCase()} 
                            value={initialEducation[infoField]}
                            onChange={(e) => setInitialEducation({...initialEducation, [infoField]: e.target.value })}></input>
                        })
                    }
                </>
    } else {
        fields = <>
                    {
                        Object.keys(initialEducation).map(infoField => {
                            return <div key={infoField}>
                                <p>{initialEducation[infoField]}</p>
                            </div>
                        })
                    }
                </>
    }

    return <>
            <h3>Educational Experience</h3>
            {fields}
            </>
}

export default Education;

