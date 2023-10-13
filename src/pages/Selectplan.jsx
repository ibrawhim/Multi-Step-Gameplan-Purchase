import React from 'react'
import { handleNextStep } from '../redux/plan'
import { useDispatch, useSelector } from 'react-redux'

const Selectplan = () => {
    const dispatch = useDispatch()
  return (
    <>
        <div>
            <div>Select Plan</div>
            {/* <button onClick={()=>dispatch(handleNextStep)}>Go</button> */}
        </div>
    </>
    
  )
}

export default Selectplan