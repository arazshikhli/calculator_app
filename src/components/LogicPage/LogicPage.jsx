import React, { useEffect, useState } from 'react'
import { Display } from '../Display/Display';
import { Buttons } from '../Buttons/Buttons';
import{ calcSymbols} from '../../data/data';
import styles from './LoginPage.module.css'

export const LogicPage = () => {
    const [value,setValue]=useState('0');
    const [result,setResult]=useState(null)
    const [resultHistory,setResultHistory]=useState();
    const [inputValue, setInputValue] = useState('');
   

    useEffect(()=>{
//  console.log(resultHistory);
      calculateResult()

 
    },[value,result,inputValue])
      // // Обработчик для изменения значения input через пользовательский ввод
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // // Обработчик для изменения значения input через нажатие кнопки
  // const handleButtonClick = (newValue) => {
  //   setInputValue(newValue);
  // };
 
  const handleClick = (val) => {
    setInputValue(inputValue+val)
    setValue(value + val);
      const operands = value.split(/([+\-*/%])/);

  };


  const calculateResult = () => {
    try {
      const operands = value.split(/([+\-*/%])/);

      const percent=operands[operands.length-2];

      if(percent==='%'){
        operands[operands.length-3]*=0.1
        
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
      for(let i=0;i<operands.length;i++){
        if(operands[i]==='%'){

        }
      }


    const valueArray=inputValue.split('');
    const lastSymbol=valueArray[valueArray.length-1];
    const prevLastSymbol=valueArray[valueArray.length-2];
      const isPrevLast=prevLastSymbol==='+'||prevLastSymbol==='-'||prevLastSymbol==='/'||prevLastSymbol==='*'||prevLastSymbol==='%';
      const isLastSymb=lastSymbol==='+'||lastSymbol==='-'||lastSymbol==='/'||lastSymbol==='*'||lastSymbol==='%';
      console.log('isPrevLast: ', isPrevLast);
      console.log('islast: ', isLastSymb)
      if(isLastSymb&&isPrevLast){ 
          valueArray.splice(-2);
          console.log('value',valueArray)
          valueArray.push(lastSymbol);
          console.log(valueArray)
          setInputValue(valueArray.join(''))
      }

      
      
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
    console.log(inputValue);
    setValue(newData.join(''))
   }


  return (
    <div className={styles.content}>
        <div className={styles.divider}>
        <div className={styles.calculator}>
        <Display 
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        setInputValue={setInputValue}
        value={value} result={result} setValue={setValue}/>
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
        />
       </div>
</div>
    </div>
  )
}
