
import { useContext, useEffect, useState } from 'react'
import styles from './Buttons.module.css'
import { DataContext,ResultContext} from '../Context/DataContext'


export const Buttons=()=>{

const {dataValue,setDataValue}=useContext(DataContext)
const {result,setResult}=useContext(ResultContext)
// const includeSymbol=
// const [includeSmbl,setIncludeSmbl]=useState(dataValue.includes('+'|'-'|'/'|'*'))

// useEffect(()=>{

// },[includeSmbl])
  const handleClick = (value) => {
    if (result !== null) {
      setDataValue(value);
      setResult(null);
    } else {
      setDataValue(dataValue + value);
    }
  };
  const calculateResult = () => {
    try {
      const operands = dataValue.split(/([+\-*/])/);
      let calcResult = parseFloat(operands[0]);
      // console.log(dataValue.includes('+'|'-'|'/'|'*'))
      for (let i = 1; i < operands.length; i += 2) {
        const operator = operands[i];
        const nextOperand = parseFloat(operands[i + 1]);
    
        switch (operator) {
          case '+':
            calcResult += nextOperand;
            break;
          case '-':
            calcResult -= nextOperand;
            break;
          case '*':
            calcResult *= nextOperand;
            console.log(calcResult)
            break;
          case '/':
            calcResult /= nextOperand;
            break;
          default:
            break;
        }
      }


      setResult(calcResult);
      setDataValue(calcResult)
    } catch (error) {
      setResult('Error');
    }
  };

    return <div className={styles.buttonsLayout}>
       <ul className={styles.firstElements}>
       <button onClick={()=>handleClick('')} className={styles.operationButtons}>C</button>
       <button onClick={()=>handleClick('')} className={styles.operationButtons}>CE</button>
       <button onClick={()=>handleClick('')} className={styles.operationButtons}>C</button>
       </ul>
        <ul className={styles.secondElements}>
            <button onClick={()=>handleClick('7')} className={styles.numberButtons}>7</button>
       <button onClick={()=>handleClick('8')} className={styles.numberButtons}>8</button>
         <button onClick={()=>handleClick('9')} className={styles.numberButtons}>9</button>
          <button onClick={()=>handleClick('*')} className={styles.operationButtons}>x</button>
            <button onClick={()=>handleClick('4')} className={styles.numberButtons}>4</button>
          <button onClick={()=>handleClick('5')} className={styles.numberButtons}>5</button>
         <button onClick={()=>handleClick('6')} className={styles.numberButtons}>6</button>
          <button onClick={()=>handleClick('-')} className={styles.operationButtons}>-</button>
            <button onClick={()=>handleClick('1')} className={styles.numberButtons}>1</button>
            <button onClick={()=>handleClick('2')} className={styles.numberButtons}>2</button>
            <button onClick={()=>handleClick('3')} className={styles.numberButtons}>3</button>
            <button onClick={()=>handleClick(`+`)} className={styles.operationButtons}>+</button>
            <button onClick={()=>handleClick(``)} className={styles.numberButtons}>+/-</button>
            <button onClick={()=>handleClick('0')} className={styles.numberButtons}>0</button>
            <button onClick={()=>handleClick('.')} className={styles.numberButtons}>.</button>
            <button onClick={()=>calculateResult()} className={styles.resultButton}>=</button>
        </ul>
      
    </div>
}