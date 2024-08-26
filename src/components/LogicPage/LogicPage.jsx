import React, { useEffect, useState } from 'react'
import { Display } from '../Display/Display';
import { Buttons } from '../Buttons/Buttons';
import{ calcSymbols} from '../../data/data';
import styles from './LoginPage.module.css'

export const LogicPage = () => {
    const [value,setValue]=useState('0');
    const [result,setResult]=useState(null)
    const [resultHistory,setResultHistory]=useState();
    

    useEffect(()=>{
//  console.log(resultHistory);
 
    },[value,result])


    
  const handleClick = (val) => {


    setValue(value + val);
      const operands = value.split(/([+\-*/%])/);

  };


  const calculateResult = () => {
    try {
      const operands = value.split(/([+\-*/%])/);

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
            break;
          case '/':
            calcResult /= nextOperand;
            break;
            case'%':{
                // console.log('operands[i]: ',operands[i-1])
               if(operands[i-1]==='+'||operands[i-1]==='-'||operands[i-1]==='/'||operands[i-1]==='*') {
                // console.log('percent')
                break;
               }

            }

          default:
            break;
        }
      }

      setResult(calcResult);
      setValue('0');

        operands.push('=');
        operands.push(calcResult.toString());
        const newItem=operands;
        setResultHistory(prevItems=>{
         
                return [...prevItems,newItem]
         
        })
  
    } catch (error) {
        console.log(error.message);
        
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
        <div className={styles.divider}>
        <div className={styles.calculator}>
        <Display value={value} result={result} setValue={setValue}/>
        <Buttons 
        value={value} 
        setValue={setValue}
        result={result}
        setResult={setResult}
        calcSymbols={calcSymbols}
        handleClick={handleClick}
        calculateResult={calculateResult}
        handleClearLastSymbol={handleClearLastSymbol}
        />
       </div>
</div>
    </div>
  )
}
