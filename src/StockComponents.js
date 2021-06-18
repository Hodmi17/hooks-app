import React, {useState, useEffect } from 'react';
import './Stock.css'
function StockComponent(){
    const[count, setCount]= useState(0);
    useEffect(() =>{
        console.log("count changed");
    },[count])
    return(
        <div>
        <h1>StockComponent{count}</h1> 
        <button onClick={() => setCount(count+1)}> Click to increment </button>
        <button onClick={() => setCount(count-1)}> Click to decrement</button>
        <button onClick={() => setCount(0)}> Reset </button>
        </div>
    )
}
export default StockComponent;


// vision:
// Go through the numbers
// find the consecutive number in the Array

// var input=[1,2,3,4,7,9,10,11,12,14],
// range=0
// for(var i = 0; i<input.length; i++)
// if{input[i]>con}
// for ( var i = 1; i < array.length; i++){
//     if ( array[i] < range){
//         range = array[i];
        
//     }
// }
// else if (array[i] > range){
//     result.push(range);
    

// console.log(result);
// return result;
// };