import { useState,createContext } from 'react';
import { TypeContextGlobal, ChildrenProvider } from '../types/TypesApp';
import { VALUE_DEAFULT_RESPONSE_API, VALUE_DEFAULT_CONTEXT } from '../types/ValuesDefaults';


export const ContextGlobal = createContext<TypeContextGlobal>(VALUE_DEFAULT_CONTEXT)

export default function ProviderContextGlobal({ children }:ChildrenProvider){

    const [input, setInput] = useState('')
    const [dataAPI, setDataAPI] = useState(VALUE_DEAFULT_RESPONSE_API)


    return  <ContextGlobal.Provider value={{input, setInput, dataAPI, setDataAPI}}>
                { children }
            </ContextGlobal.Provider>

    
}