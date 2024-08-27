import React, { useEffect, useState } from 'react'
import { Display } from '../Display/Display';
import { Buttons } from '../Buttons/Buttons';
import{ calcSymbols} from '../../data/data';
import styles from './LogicPage.module.css'

export const LogicPage = () => {
    const [value,setValue]=useState('');
    const [result,setResult]=useState(null)
    const [resultHistory,setResultHistory]=useState([]);
    const [inputValue, setInputValue] = useState('');
   
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
      console.log('operands',operands)

      for(let i=0;i<operands.length;i++){

        if(operands[i]===''){
          operands.splice(i,1)
          console.log('delete empty: ',operands)
        }
        const isLastSymbol=operands[operands.length-1]==='+'||operands[operands.length-1]==='-'||operands[operands.length-1]==='/'||operands[operands.length-1]==='*'||operands[operands.length-1]==='%'
        console.log('is Last: ',isLastSymbol);
        const isPrevLastSymbol=operands[operands.length-2]==='+'||operands[operands.length-2]==='-'||operands[operands.length-2]==='/'||operands[operands.length-2]==='*'||operands[operands.length-2]==='%'
        console.log("isPrev",isPrevLastSymbol);
        const lastSymbol=operands[operands.length-1]
        if(isLastSymbol&&isPrevLastSymbol){
  
          operands.splice(-2);
          operands.push(lastSymbol)
          setValue(operands.join(''))
          setInputValue(operands.join(''))
          console.log(operands);
          
        }


      }
      if(operands[operands.length-2]==='%'){
        let newPercent=Number(operands[0]*operands[operands.length-3]*0.01)
        operands.splice(operands.length-3,1,newPercent)
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
    
      const valueArray=calcResult.toString();
      // const lastSymbol=valueArray[valueArray.length-1];
      // const prevLastSymbol=valueArray[valueArray.length-2];
      // const isPrevLast=prevLastSymbol==='+'||prevLastSymbol==='-'||prevLastSymbol==='/'||prevLastSymbol==='*'||prevLastSymbol==='%';
      // const isLastSymb=lastSymbol==='+'||lastSymbol==='-'||lastSymbol==='/'||lastSymbol==='*'||lastSymbol==='%';
      // if(isLastSymb&&isPrevLast){ 

      //   valueArray.splice(valueArray.length-2,1)
      // }
      // setInputValue(valueArray.join(''))
      console.log(valueArray)
      console.log('calcRsult,',typeof(calcResult))

      setResult(calcResult);
  
    } catch (error) {
        console.log(error.message);
        
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

  //  if(resultHistory.length>2){
  //   resultHistory.shift()
  //   setResultHistory(resultHistory)
  //  }
  }

  const addToHistory=()=>{
    const history=[]
    const historyItem=value+'='+result;
    history.push(historyItem)
      refreshHistory(history)
    setValue('');
    setInputValue('')
    
  }
  
  return (
    <div className={styles.content}>
        <div className={styles.divider}>
        <div className={styles.calculator}>
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
