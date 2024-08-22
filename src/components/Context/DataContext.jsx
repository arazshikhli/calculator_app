import React, { createContext, useState } from 'react';
import styles from './Context.module.css';

export  const DataContext = createContext();
export const ResultContext=createContext()


export default function DataProvider  ({ children }) {
    const [dataValue, setDataValue] = useState('');
    const [result,setResult]=useState('')

    return (<>
    <DataContext.Provider value={{dataValue,setDataValue}}>
        <ResultContext.Provider value={{result,setResult}}>
            {children}
        </ResultContext.Provider>
    </DataContext.Provider>    
    </>      

    );
};
