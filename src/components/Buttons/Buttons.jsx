
import { useContext, useState } from 'react'
import styles from './Buttons.module.css'
import { DataContext} from '../Context/DataContext'



export const Buttons=()=>{

    const {value,setValue}=useContext(DataContext)
    
const [btnValue,setBtnValue]=useState('');


const handleButtonClick = (value) => {
    setInput(input + value);
  };

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
            <button className={styles.button} onClick={()=>setValue('')}>C</button>
            <button className={styles.button}>del</button>
            <button className={styles.button}>1/x</button>
            <button className={styles.button}>x2</button>
            <button className={styles.button}>2/x</button>
            <button className={styles.button}>/</button>
            <button onClick={handleButtonClick} className={styles.button}>7</button>
            <button  onClick={()=>setValue(value+'8')}  className={styles.button}>8</button>
            <button  onClick={()=>setValue(value+'9')} className={styles.button}>9</button>
            <button className={styles.button}>x</button>
            <button onClick={()=>setBtnValue(btnValue+'4')} className={styles.button}>4</button>
            <button onClick={()=>setBtnValue(btnValue+'5')} className={styles.button}>5</button>
            <button onClick={()=>setBtnValue(btnValue+'6')} className={styles.button}>6</button>
            <button className={styles.button}>-</button>
            <button onClick={()=>setBtnValue(btnValue+'1')} className={styles.button}>1</button>
            <button onClick={()=>setBtnValue(btnValue+'2')} className={styles.button}>2</button>
            <button onClick={()=>setBtnValue(btnValue+'3')} className={styles.button}>3</button>
            <button onClick={()=>setBtnValue(btnValue+'3')}  className={styles.button}>+</button>
            <button className={styles.button}>+/-</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>.</button>
            <button className={styles.button}>=</button>
        </div>
        <div>{btnValue}</div>
    </div>
}