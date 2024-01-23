import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset,incrementByAmount } from '../redux/counterSlice'


function Counter() {
const [amount,setAmount]=useState("")

  const dispatch=useDispatch()

  const count = useSelector((state)=>state.counter.count)

const handleIncrement=()=>{
  if(amount==""){
    alert("please provide value")
  }else{
    //update state in store
    dispatch(incrementByAmount(Number(amount)))
  }
}
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center text-white align-items-center'>
        <div className='d-flex border rounded justify-content-center  align-items-center p-5 w-25 flex-column'>
           
           <h1 style={{fontSize:'80px'}}>{count}</h1>
           <div className='w-100 d-flex justify-content-between mt-5 '>
            <button className='btn btn-warning' onClick={()=>dispatch(increment())}>Increment</button>
            <button className='btn btn-info ' onClick={()=>dispatch(decrement())}>Decrement</button>
            <button className='btn btn-danger ' onClick={()=>dispatch(reset())}>Reset</button>
           </div>
           <div className="d-flex mt-5">
<input type="text" className='form-control' placeholder='Enter amount to be incremented' onChange={e=>setAmount(e.target.value)}/>

<button className='btn btn-success ms-3' onClick={handleIncrement} >Increment Amount</button>
           </div>
        </div>
    </div>
  )
}

export default Counter