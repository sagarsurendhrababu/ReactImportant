import { createContext, useReducer  } from "react";
import reducer from "../Reducer/Reducer";
import { Store } from "../Store/Store";

export const Context = createContext();

const Provider = (props)=>{
     const [state, dispatch] = useReducer(reducer, Store);
    return(        

        <Context.Provider value={[state, dispatch]}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider;
