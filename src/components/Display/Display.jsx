import React, { useContext } from 'react'
import styles from './Display.module.css'
import {DataContext} from '../Context/DataContext'
export const Display = () => {
    const {value,setValue}=useContext(DataContext)

  return (
    <div className='display'> 
    <p className={styles.display}>value: {value}</p>

    </div>
  )
}
