import React, { useEffect } from 'react'
import styles from './Display.module.css'

export const Display = ({
  result,
  inputValue,
  handleInputChange,
  resultHistory,
  setResultHistory
}) => {

useEffect(()=>{


},[resultHistory])


  return (
    <div className={styles.display}> 
 <div className={styles.displayHistory}>
 <div className={styles.historyItems}>
  <button className={styles.deleteBtn} onClick={()=>setResultHistory([])}></button>
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
