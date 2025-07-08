import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInformation from './components/GeneralInformation'
import Education from './components/Education'
import PracticalExperience from './components/PracticalExperience'

function EditButton({changeEdit, isEditing}) {
  return <button onClick={() => changeEdit()}>
    {!isEditing ? 'Edit' : 'Preview'}
  </button>


}

function App() {
  const [isEditing, setIsEditing] = useState(true);

  function changeEditStatus() {
    setIsEditing(!isEditing);
  }


  return <>
      <h1>CV</h1>
      <div className="information">
        <GeneralInformation isEditing={isEditing}></GeneralInformation>
        <Education isEditing={isEditing}></Education>
        <PracticalExperience isEditing={isEditing}></PracticalExperience>
      </div>
      <EditButton changeEdit={()=> changeEditStatus()} isEditing={isEditing}></EditButton>
  </>


}




export default App
