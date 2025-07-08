import { useState } from 'react';

const GeneralInfo = {
    name: "",
    email: "",
    phoneNumber: ""
}




function GeneralInformation( {isEditing} ) {
    const [generalInfo, setgeneralInfo] = useState(GeneralInfo);

    let fields = "";
    //fields
    if(isEditing) {
        fields = <>
                    {
                        Object.keys(generalInfo).map(infoField => {
                        return <input key={infoField} 
                        placeholder={infoField.toUpperCase()} 
                        value={generalInfo[infoField]}
                        onChange={(e) => setgeneralInfo({...generalInfo, [infoField]: e.target.value })}></input>
                    })}
                </>
    } else {
        fields = <>
                    {
                        Object.keys(generalInfo).map(infoField => {
                            return <div key={infoField}>
                                <p>{generalInfo[infoField]}</p>
                            </div>
                        })
                    }
        
                </>
    }

    return <>
        <h3>General Information</h3>
        {fields}
        </>;

}

export default GeneralInformation;
