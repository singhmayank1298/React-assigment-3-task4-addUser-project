import { useState } from "react"
import './NewForm.css'

const NewForm=(props)=>{
  
const [enterUser,setenterUser]=useState('')
const [enterAge,setenterAge]=useState('')

const UserNameHendeler=(e)=>{
    setenterUser(e.target.value)
    console.log(enterUser)

}

const AgeHendeler=(e)=>{
setenterAge(e.target.value)
}

const SubmitHendeler=(e)=>{
    e.preventDefault()
    const ObjList={
     User:enterUser,
     Age:enterAge,
     key:Math.random()
    }
    console.log(ObjList)
    props.ListItem(ObjList)
    setenterUser('')
    setenterAge('')
}

return(<div className="new-expense">
    <form className= "new-expense__controls">
        <div>
        <label>User Name</label>
        <input onChange={UserNameHendeler} value={enterUser} type="text"></input>
        </div>
        <div>
        <label>Age (Year)</label>
        <input onChange={AgeHendeler} value={enterAge} type="text"></input>
        </div>
        <button type="submit" onClick={SubmitHendeler}>Add User</button>

    </form>
</div>)
}

export default NewForm