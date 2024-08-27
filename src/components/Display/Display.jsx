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
console.log(resultHistory);

},[resultHistory])


  return (
    <div className={styles.display}> 
 <div className={styles.displayHistory}>
 <div className={styles.historyItems}>
  <button onClick={()=>setResultHistory([])}>remove</button>
  {resultHistory.map(function(history,index){
    return(  <p className={styles.historyItem} key={index}>{history}</p>)
  
  })}
    </div>
 </div>
 <div className={styles.displayResult}>
    <p>{result}</p>
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
