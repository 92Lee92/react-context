import { createContext, useContext } from "react";
import UserContext from "./ContestEx1";

function ContextEx3(){
    const user = useContext(UserContext);
    return(
        <>
            <h1>ComtextEx3</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    )
}

export default ContextEx3;