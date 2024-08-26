import React, { useEffect } from 'react'
import styles from './Display.module.css'

export const Display = ({value,result,setValue}) => {

useEffect(()=>{

},[value,setValue])
  return (
    <div className={styles.display}> 
<p>Value:{value}</p>
<p>Result:{result}</p>
    </div>
  )
}
