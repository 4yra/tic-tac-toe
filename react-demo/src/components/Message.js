import { useState } from "react"


export const Message = (props) => {
    const [message, setMessage] = useState('Welcom Visitor')
    return (
    <>
        <h1>{message}</h1>
        <button onClick={() => setMessage('Thanks')}>Visit</button>
    </>
    )
}