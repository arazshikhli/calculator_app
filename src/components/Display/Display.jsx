import React, { useContext, useEffect } from 'react'
import styles from './Display.module.css'
// import {DataContext,ResultContext} from '../Context/DataContext'
export const Display = ({value,result}) => {


useEffect(()=>{
  console.log('value, ',value);
  
})
  return (
    <div className={styles.display}> 

  <p style={{color:'black'}}>{value}</p>
    </div>
  )
}
