// import React, { useContext, useState } from 'react'
// import styles from './Buttons.module.css'
// import { DataContext } from '../Context/DataContext'
// export const Buttons = () => {

//     const {updateData}=useContext(DataContext)
//     const [inputValue,setInputValue]=useState('')

//     const handleChange=(event)=>{
//         setInputValue(event.target.value)
//     }

//     const handleSubmit=()=>{
//         updateData(inputValue)
//         setInputValue('')
//     }

//   return (
//     <div>
//     <input type="text" value={inputValue} onChange={handleChange} />
//     <button onClick={handleSubmit}>Update Data</button>
//   </div>
//   )
// }
import { useState } from 'react'
import styles from './Buttons.module.css'

export const Buttons=()=>{


const [btnValue,setBtnValue]=useState('');

const handleClick=()=>{
    

}

    return <div className={styles.buttonsLayout}>
        {/* <ul>
            {
             numbers.map(function(number){
                return (<li key={number}><input className={styles.numberBtn} type='button' value={number}/></li>)
             })
            }
        </ul> */}
        <div className={styles.buttonsContainer}>
            <input
            
            type='button' className={styles.button} value='%'/>
            <button className={styles.button}>CE</button>
            <button className={styles.button}>C</button>
            <button className={styles.button}>del</button>
            <button className={styles.button}>1/x</button>
            <button className={styles.button}>x2</button>
            <button className={styles.button}>2/x</button>
            <button className={styles.button}>/</button>
            <button onClick={()=>setBtnValue(btnValue+'7')} className={styles.button}>7</button>
            <button onClick={()=>setBtnValue(btnValue+'8')} className={styles.button}>8</button>
            <button onClick={()=>setBtnValue(btnValue+'9')} className={styles.button}>8</button>
            <button className={styles.button}>x</button>
            <button className={styles.button}>4</button>
            <button className={styles.button}>5</button>
            <button className={styles.button}>6</button>
            <button className={styles.button}>-</button>
            <button className={styles.button}>1</button>
            <button className={styles.button}>2</button>
            <button className={styles.button}>3</button>
            <button className={styles.button}>+</button>
            <button className={styles.button}>+/-</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>.</button>
            <button className={styles.button}>=</button>
        </div>
        <div>{btnValue}</div>
    </div>
}