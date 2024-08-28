import React, { useContext, useEffect } from 'react'
import styles from './Display.module.css'
import { ThemeContext } from '../../data/ThemeProvider'
export const Display = ({
  result,
  inputValue,
  handleInputChange,
  resultHistory,
  setResultHistory
}) => {

useEffect(()=>{


},[resultHistory])

const {isDarkMode}=useContext(ThemeContext)

  return (
    <div className={isDarkMode?styles.displayDark:styles.displayLight}> 
 <div className={styles.displayHistory}>
 <div className={styles.historyItems}>
<div className={styles.displayButtons}>
<button className={styles.deleteBtn} onClick={()=>setResultHistory([])}></button>
<button className={styles.DarkModeBtn}></button>
</div>

  {resultHistory.map(function(history,index){
    return(  <p className={styles.historyItem} key={index}>{history}</p>)
  })}
    </div>
 </div>
 <div className={styles.displayResult}>
  {isNaN(result)?<p>0</p>:<p>{result}</p>}
 </div>
 <div className={styles.displayInput}>

 <input
type='text'
value={inputValue}
onChange={handleInputChange}
className={styles.dataInput}
/>  
</div>
    </div>
  )
}
