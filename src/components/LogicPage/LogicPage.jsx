import React, { useEffect, useState,useContext } from 'react'
import { Display } from '../Display/Display';
import { Buttons } from '../Buttons/Buttons';
import{ calcSymbols, isSymbol} from '../../data/data';
import styles from './LogicPage.module.css'
import {ThemeContext}from '../../data/ThemeProvider'

export const LogicPage = () => {
    const [value,setValue]=useState('');
    const [result,setResult]=useState(null)
    const [resultHistory,setResultHistory]=useState([]);
    const [inputValue, setInputValue] = useState('');
    const {isDarkMode}=useContext(ThemeContext)
 
    useEffect(()=>{
      calculateResult()
    },[value,result,inputValue])


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (val) => {
    setInputValue(inputValue+val)
    setValue(value + val);
  };
  const calculateResult = () => {
    try {
      let operands = value.split((/([+\-*/%])/) );
      if(operands[operands.length-2]==='%'){
        let newPercent=Number(operands[0]*operands[operands.length-3]*0.01)
        operands.splice(operands.length-3,1,newPercent)
      }
      for(let i=0;i<operands.length;i++){

        if(operands[i]===''){
          operands.splice(i,1)
        }
        const isLastSymbol=isSymbol(operands,1);
        const isPrevLastSymbol=isSymbol(operands,2)
   
        const lastSymbol=operands[operands.length-1]
        if(isLastSymbol&&isPrevLastSymbol){
  
          operands.splice(-2);
          operands.push(lastSymbol)
          setValue(operands.join(''))
          setInputValue(operands.join(''))         
        }


      }
    
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

          default:
            break;
        }
      }
    

      setResult(calcResult);
  
    } catch (error) {
        
      setResult('Error');
    }
  };
   const handleClearLastSymbol=()=>{
    const newData=value.split('');
    newData.pop()  
    setInputValue(newData.join(''))
    setValue(newData.join(''))
   }

 
  const refreshHistory=(newHistory)=>{
    setResultHistory(prevHistory=>[...prevHistory,newHistory])
  }

  const addToHistory=()=>{
    const history=[]
    if(isNaN(result)){return}
    const historyItem=value+'='+result;
    history.push(historyItem)
      refreshHistory(history)
      console.log(history);
      
      console.log(resultHistory.length)
  if(resultHistory.length>=5){
    resultHistory.shift();
    setResultHistory(resultHistory)
  }
      
    setValue('');
    setInputValue('')
    
  }
  
  return (
    <div className={styles.content}>
        <div className={styles.divider}>
        <div className={isDarkMode?styles.calculator:styles.calculatorDark}>
        <Display 
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        setInputValue={setInputValue}
        value={value} 
        result={result} 
        setValue={setValue}
        resultHistory={resultHistory}
        setResultHistory={setResultHistory}
        />
        <Buttons 
        value={value} 
        setValue={setValue}
        result={result}
        setResult={setResult}
        setInputValue={setInputValue}
        calcSymbols={calcSymbols}
        handleClick={handleClick}
        calculateResult={calculateResult}
        handleClearLastSymbol={handleClearLastSymbol}
        addToHistory={addToHistory}
        />
       </div>
</div>
    </div>
  )
}
