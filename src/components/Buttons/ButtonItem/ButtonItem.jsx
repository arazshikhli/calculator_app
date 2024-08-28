import React,{useContext} from 'react'
import styles from './ButtonItem.module.css'
import {ThemeContext}from '../../../data/ThemeProvider'

export const ButtonItem = ({value, setValue,valueType,type,
    handleClearLastSymbol,
    setResult,
    handleClick,
    setInputValue,
    calculateResult,
    addToHistory
  }) => {

    const {isDarkMode, toggleTheme } = useContext(ThemeContext);

        const selectFunction=()=>{
          switch (valueType) {
            case 'standard':{
                handleClick(value)
                break;}
                case 'result':{
                  addToHistory()
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
                case 'mode':
                toggleTheme()
                break;
            default:
                break;
          }
        }

  return (
   <button className={type==='number'?styles.numberBtn:(type==='mode'?(isDarkMode?styles.DarkBtn:styles.LightBtn):styles.symbolBtn) }
   onClick={selectFunction}
   >{type==='mode'?'':<span>{value}</span>}</button>
  )
}
