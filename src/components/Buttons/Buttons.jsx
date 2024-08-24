
import { useContext, useEffect, useState } from 'react'
import styles from './Buttons.module.css'
// import { DataContext,ResultContext} from '../Context/DataContext'
import { ButtonItem } from './ButtonItem/ButtonItem'



export const Buttons=({  value,setValue,calcSymbols,  handleClick,  calculateResult,  handleClearLastSymbol}
)=>{


  // const handleClick=(e)=>{
  //   setValue(e.target.value)
  // }

  useEffect(()=>{

    // console.log('buttonValue, ', value);
    // console.log('numbers',numberButtons);
    
    
  })


    return <div className={styles.buttonsLayout}>

      <ul>
        {
          calcSymbols.map(function(number){
            return<ButtonItem key={number.index}
            setValue={setValue}
             value={number.value}
             handleClearLastSymbol={handleClearLastSymbol}
             handleClick={handleClick}
             calculateResult={calculateResult}
             valueType={number.operation}
             />
          })
        }

      </ul>
    </div>


}
