import React, { useEffect } from 'react'
import styles from './Display.module.css'

export const Display = ({
  result,
  inputValue,
  handleInputChange
}) => {

useEffect(()=>{

},[inputValue])

  return (
    <div className={styles.display}> 
 <div className={styles.displayHistory}>
 </div>
 <div className={styles.displayResult}>
    <p>{result}</p>
 </div>
 <div className={styles.displayInput}>
 </div>

<div className=''>
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
