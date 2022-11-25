import { useState, createContext } from "react";
import ContextEx3 from "./ContextEx3"

const UserContext = createContext();

function ContextEx2() {
    const [user,setUser] = useState('hong');

    return(
        <>
            <h1>ContextEx2</h1>
            <ContextEx3/>
        </>
    )
}

export default ContextEx2;