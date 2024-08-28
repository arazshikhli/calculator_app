
import styles from './Buttons.module.css'
import { ButtonItem } from './ButtonItem/ButtonItem'
import {ThemeContext} from '../../data/ThemeProvider'
import { useContext } from 'react'

export const Buttons=({  
  setValue,calcSymbols, 
   handleClick,
     calculateResult,
     handleClearLastSymbol,
     result,
     setResult,
     setInputValue,
     addToHistory
    }
)=>{

const {isDarkMode}=useContext(ThemeContext)

    return (
      <ul className={styles.buttonsList}>
      {
        calcSymbols.map(function(number){
          
          return<ButtonItem key={number.index}
          setValue={setValue}
           value={number.value}
           handleClearLastSymbol={handleClearLastSymbol}
           handleClick={handleClick}
           calculateResult={calculateResult}
           valueType={number.operation}
           type={number.type}
           operation={number.operation}
           setResult={setResult}
           setInputValue={setInputValue}
           addToHistory={addToHistory}
           
           />
        })
      }

    </ul>
    )



}
