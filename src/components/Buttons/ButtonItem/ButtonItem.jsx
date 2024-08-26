import React from 'react'
import styles from './ButtonItem.module.css'

export const ButtonItem = ({value, setValue,valueType,type,operation,
    handleClearLastSymbol,
    setResult,
    handleClick,
    setInputValue,
    calculateResult}) => {
        const selectFunction=()=>{
          switch (valueType) {
            case 'standard':{
                handleClick(value)
                break;}
                case 'result':{
                calculateResult()
                break;}
                case 'clear':                   
             {  
               setValue('')
                  setResult('')
                  setInputValue('')
             }
                break;
                case 'delLast':
               {     
                handleClearLastSymbol()}
                break;
            
            default:
                break;
          }
        }

  return (
   <button className={type==='number'?styles.numberBtn:styles.symbolBtn  }
   onClick={selectFunction}
   
   >{value}</button>
  )
}
