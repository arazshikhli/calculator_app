


export const calcSymbols=[
    {
        index:0,value:'c',type:'symbol',operation:'clear'
    },
    {
        index:1,value:'del',type:'symbol',operation:'delLast'
    },
    {
    index:2,value:'%',type:'symbol',operation:'standard'
},
{
    index:3,value:'/',type:'symbol',operation:'standard'
},
{
    index:4,value:'7',type:'number',operation:'standard'
},
{
    index:5,value:'8',type:'number',operation:'standard'
},
,
{
    index:6,value:'9',type:'number',operation:'standard'
},
,
{
    index:7,value:'*',type:'symbol',operation:'standard'
},
{
    index:8,value:'4',type:'number',operation:'standard'
},
{
    index:9,value:'5',type:'number',operation:'standard'
},
{
    index:10,value:'6',type:'number',operation:'standard'
},
{
    index:11,value:'-',type:'symbol',operation:'standard'
},

    {
    index:12,value:'1',type:'number',operation:'standard'
},
{
    index:13,value:'2',type:'number',operation:'standard'
},
{
    index:14,value:'3',type:'number',operation:'standard'
},
{
    index:15,value:'+',type:'symbol',operation:'standard'
},
{
    index:16,value:'@',type:'mode',operation:'mode'
},
{
    index:17,value:'0',type:'number',operation:'standard'
},
,
{
    index:18,value:'.',type:'symbol',operation:'standard'
},
{
    index:19,value:'=',type:'symbol',operation:'result'
}

]


export const isSymbol=(operands,count)=>{
return operands[operands.length-count]==='+'||operands[operands.length-count]==='-'||operands[operands.length-count]==='/'||operands[operands.length-count]==='*'||operands[operands.length-count]==='%'
}