import React, { useContext, useEffect } from 'react'
import styles from './Display.module.css'
import {DataContext,ResultContext} from '../Context/DataContext'
export const Display = () => {
    const {dataValue}=useContext(DataContext);
    const {result,setResult}=useContext(ResultContext)

    useEffect(()=>{
      setResult(result)
    },[])

  return (
    <div className={styles.display}> 
    
    <p>Result: {result?<span>{result}</span>:''}</p>
    
    <p className={styles.display}>value: {dataValue}</p>
    {/* {
      result?<div><p>{dataValue}</p>
      <p>{result}</p>
      </div>:<div><p>{''}</p><p>{dataValue}</p></div>
    } */}

    </div>
  )
}
