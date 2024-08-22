import React, { createContext, useState } from 'react';
import styles from './Context.module.css'
export  const DataContext = createContext();



export default function DataProvider  ({ children }) {
    const [value, setValue] = useState('');
    console.log(value)
    return (<div className={styles.content}>
    <div className={styles.contextLayout}>
                  <DataContext.Provider value={{ value, setValue }}>
            {children}
        </DataContext.Provider>
        </div>
    </div>
    
  
    );
};


