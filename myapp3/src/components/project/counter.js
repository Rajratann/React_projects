import  React,{useState} from 'react';

const Counter = () => {

    const [count, setCount]=useState(0);

    const increment = ()=>{
        setCount(count +1);
    };
    const decrement = () => {
        setCount(count - 1);
      };
      const zero = () => {
        setCount(count === 0);
      };

    return(
        <div className='container '>
            <p><h1>Your Current Count is : {count}</h1></p><br></br> <br></br> 
            <p><h6>Error: Can not go bellow 0</h6></p>
            <br></br> <br></br>
            
            <div className='spacing'>
                    <button className='btn btn-primary' onClick={increment}>Increment</button>
                    <button className='btn btn-info' onClick={decrement}>Decrement</button> 
                    <button className='btn1 btn-success' onClick={zero}>Go Back to 0</button>
                    <br></br> <br></br> <br></br> 
            </div>
        </div>
    );
    
};

export default Counter;
