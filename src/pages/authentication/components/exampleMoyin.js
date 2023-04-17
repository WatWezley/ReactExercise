import React, {useState} from 'react';

function Moyin() {
    let initialState = {
        firstName: "",
        lastName: "",
        cohort:"",
        institution:"",
}

    const [firstName, setFirstName] = useState(" ")
    const [lastName, setLastName] = useState(" ")
    const [cohort, setCohort] = useState(" ")
    const [institution, setInstitution] = useState(" ")
   



const [data, setData] = useState(initialState);

function handleChange(event){
    if(event.target.name === 'firstName'){
        setFirstName(event.target.value)
    }
    else  if(event.target.name === 'lastName'){
        setLastName(event.target.value)
    }
    else  if(event.target.name === 'cohort'){
        setCohort(event.target.value)
    }
    else  if(event.target.name === 'institution'){
        setInstitution(event.target.value)
    }
    else{
        setData({
            ...data, [event.target.name]:event.target.value
        })
    }
}
    return (
        
        <React.Fragment>
          <div className='ptag'>
            <p className='one'>FirstName:{data.firstName}</p>
            <p className='two'>LastName:{data.lastName}</p>
            <p className='three'>Cohort:{data.cohort}</p>
            <p className='four'>Institution:{data.institution}</p> 
          </div>


          <label htmlFor = "fName">
            FirstName: <input type ="text" name = "firstName" id ="fName" value={firstName} onChange ={handleChange} />
          </label><br/><br/>

          <label htmlFor = "LName">
            LastName: <input type ="text" name = "lastName" id ="LName" value={lastName} onChange ={handleChange}/>
          </label><br/><br/>

          <label htmlFor = "Coh">
            Cohort: <input type ="text" name = "cohort" id ="coh" value={cohort} onChange={handleChange}/>
          </label><br/><br/>

          <label htmlFor = "inst">
            Institutiont: <input type ="text" name = "institution" id ="coh" value={institution} onChange ={handleChange}/>
          </label><br/><br/>



        </React.Fragment>
    )
}

export default Moyin