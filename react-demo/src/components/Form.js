import { useState } from 'react'

export const Form=()=>{
    const [userName, setUserName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Form data is ${userName}`)
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <button type='submit' >Submit</button>
    </form>
}