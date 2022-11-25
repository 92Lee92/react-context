import { useState, createContext } from "react";
import ContextEx2 from "./ContextEx2";

const UserContext = createContext();

function ContextEx1() {
    const [user,setUser] = useState('hong');

    return(
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <ContextEx2/>
        </UserContext.Provider>
    )
}
export default ContextEx1;