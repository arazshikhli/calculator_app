import React, { useEffect, useState } from 'react'
import { Display } from '../Display/Display';
import { Buttons } from '../Buttons/Buttons';
import { type } from '@testing-library/user-event/dist/type';

export const LogicPage = () => {
    const [value,setValue]=useState('');
    const [result,setResult]=useState(null)

    useEffect(()=>{
        setValue(value)
    },[value])

    const numberButtons=[{
        index:0,value:'1',type:'number',operation:'standard'
    },
    {
        index:1,value:'2',type:'number',operation:'standard'
    },
    {
        index:2,value:'3',type:'number',operation:'standard'
    },
    {
        index:3,value:'4',type:'number',operation:'standard'
    },
    {
        index:4,value:'5',type:'number',operation:'standard'
    },
    {
        index:5,value:'6',type:'number',operation:'standard'
    },
    {
        index:6,value:'7',type:'number',operation:'standard'
    },
    {
        index:7,value:'8',type:'number',operation:'standard'
    },
    {
        index:8,value:'9',type:'number',operation:'standard'
    },
    ,
    {
        index:9,value:'0',type:'number',operation:'standard'
    },
    ,
    {
        index:10,value:'+',type:'symbol',operation:'standard'
    },
    ,
    {
        index:11,value:'-',type:'symbol',operation:'standard'
    },
    ,
    {
        index:12,value:'/',type:'symbol',operation:'standard'
    },
    ,
    {
        index:13,value:'=',type:'symbol',operation:'result'
    },
    
    {
        index:14,value:'%',type:'symbol',operation:'standard'
    },
    {
        index:15,value:'c',type:'symbol',operation:'clear'
    },
    {
        index:16,value:'del',type:'symbol',operation:'delLast'
    },
    
]



  const handleClick = (val) => {
    console.log('handleClick: ')
    console.log('HandleClick result: ',result)
    if (result !== null) {
        if(val.value!=undefined){
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
      setValue(calcResult)
    } catch (error) {
      setResult('Error');
    }
  };
   const handleClearLastSymbol=()=>{
    console.log('clearLastResult')
    const newData=value.split('');
    newData.pop()
    setValue(newData.join(''))
   }

  return (
    <div className='layout'>
        <Display value={value} result={result}/>
        <Buttons 
        value={value} 
        setValue={setValue}
        result={setResult}
        numberButtons={numberButtons}
        handleClick={handleClick}
        calculateResult={calculateResult}
        handleClearLastSymbol={handleClearLastSymbol}

        />
    </div>
  )
}
