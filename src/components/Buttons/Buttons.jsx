
import styles from './Buttons.module.css'
import { ButtonItem } from './ButtonItem/ButtonItem'


export const Buttons=({  
  setValue,calcSymbols, 
   handleClick,
     calculateResult,
     handleClearLastSymbol,
     result,
     setResult
    }
)=>{



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
           />
        })
      }

    </ul>
    )



}
