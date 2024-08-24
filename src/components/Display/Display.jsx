import React, { useEffect } from 'react'
import styles from './Display.module.css'

export const Display = ({value,result}) => {


useEffect(()=>{
  console.log('value, ',value);
  
})
  return (
    <div className={styles.display}> 

  <p>{value}</p>
    </div>
  )
}
