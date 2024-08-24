import React, { useEffect, useState } from 'react'
import { Display } from '../Display/Display';
import { Buttons } from '../Buttons/Buttons';
import{ calcSymbols} from '../../data/data';
import styles from './LoginPage.module.css'

export const LogicPage = () => {
    const [value,setValue]=useState('');
    const [result,setResult]=useState(null)

    useEffect(()=>{
        setValue(value)
    },[value])

  const handleClick = (val) => {
    if (result !== null) {
        if(val.value!==undefined){
            setValue(val.value);
        }

      setResult(null);
    } else {
       console.log(val)
      setValue(value + val);
    }
  };

  const calculateResult = () => {
    try {
      const operands = value.split(/([+\-*/])/);
      let calcResult = parseFloat(operands[0]);
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
      setValue(calcResult)
    } catch (error) {
      setResult('Error');
    }
  };
   const handleClearLastSymbol=()=>{
    const newData=value.split('');
    newData.pop()
    setValue(newData.join(''))
   }

  return (
    <div className={styles.content}>
        <div className={styles.calculator}>
        <Display value={value} result={result}/>
        <Buttons 
        value={value} 
        setValue={setValue}
        result={setResult}
        calcSymbols={calcSymbols}
        handleClick={handleClick}
        calculateResult={calculateResult}
        handleClearLastSymbol={handleClearLastSymbol}/>
        </div>
      
    </div>
  )
}
