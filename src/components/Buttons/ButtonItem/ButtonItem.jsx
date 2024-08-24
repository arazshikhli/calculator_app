import React from 'react'
import styles from './ButtonItem.module.css'

export const ButtonItem = ({value, setValue,valueType,type,
    handleClearLastSymbol,
    handleClick,
    calculateResult}) => {
        // console.log('button item value:  ',value);
        

        const selectFunction=()=>{
          switch (valueType) {
            case 'standard':{
                console.log('standard')
                handleClick(value)
                break;}

                case 'result':{
                    console.log('result')
                calculateResult()
                break;}

                case 'clear':
                    console.log('clear');
                    
             {   setValue('')}
                break;
                case 'delLast':
               {     
                console.log('delLast');  
                handleClearLastSymbol()}
                break;
          
            default:
                break;
          }
        }

  return (
   <button className={type==='number'?styles.numberBtn:styles.symbolBtn}
   onClick={selectFunction}
   
   >{value}</button>
  )
}
