import React, {useState} from 'react';

function Counter(){ 

    // Using Arrays

    // const [arr, setArr] = useState([])

    // function addPlus() {
    //     setArr(prevArr => [...prevArr, "+"])
    // }

    // function addMinus() {
    //     setArr(prevArr => [...prevArr, "-"])
    // }

    // return(
    //     <div>
    //         <button onClick={addMinus}> - </button>
    //         <button onClick={addPlus}> + </button>
    //         {arr.toString()}
    //     </div>
    // )
}

export default Counter












// Solution

//     const [cart, setCart] = useState({
//     item: "Apple",
//     quantity: 0});

// function addApple(){
//     setCart(prevCart => ({
//         ...prevCart,
//         quantity: prevCart.quantity + 1,
//     }))
// }

// function subtractApple(){
//     setCart(prevCart => ({
//         ...prevCart,
//         quantity: prevCart.quantity - 1,
//     }))
// }

// return(
//          <div>
//              <button onClick={subtractApple}> - </button>
//              {cart.quantity}
//              {cart.item}
//              <button onClick={addApple}> + </button>
//          </div>

// );

    // const [counter, setCounter] = useState(0)
    // function incrementCounter(){
    //     setCounter(counter + 1)
    // }

    // function decrementCounter(){
    //     setCounter((prevCounter)=> prevCounter -1 )
    //     setCounter((prevCounter)=> prevCounter -1 ) best practice if you want to start from previous value is to use callback
    //     call back is () => {}
    // }
    // return(
    //     <div>
    //         <button onClick={decrementCounter}> - </button>
    //         {counter}
    //         <button onClick={incrementCounter}> + </button>
    //     </div>
    // )