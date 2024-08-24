import React from 'react'



export const ButtonItem = ({value, setValue,valueType,
    handleClearLastSymbol,
    handleClick,
    calculateResult}) => {
        // console.log('button item value:  ',value);
        

        const selectFunction=()=>{
          switch (valueType) {
            case 'standard':{
                console.log('standard')
                handleClick(value)
                break;}

                case 'result':{
                    console.log('result')
                calculateResult()
                break;}

                case 'clear':
                    console.log('clear');
                    
             {   setValue('')}
                break;
                case 'delLast':
               {     
                console.log('delLast');  
                handleClearLastSymbol()}
                break;
          
            default:
                break;
          }
        }

  return (
   <button
   onClick={selectFunction}
   
   >{value}</button>
  )
}
