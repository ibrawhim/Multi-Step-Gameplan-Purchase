import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange, handleNextStep, handlePreviousStep } from '../redux/plan'


const Summary = () => {
    const [summary, setSummary] = useState({

        isYearPlanLength: false,
        planType: '',
        planAmount: 0,

        addOnTypes: [],
        addOnTotalAmount: 0
    })
    // var a  = 0

    // const  g = useRef(2)


    useEffect(() => {
        setSummary((prev) => ({ ...store }))
    }, [])

    // g.current = 3
    useEffect(() => {
      let totalAddOn = 0
        store.addOnTypes?.map(item=>{
            if(store.isYearPlanLength){
                totalAddOn += Number(item.yearly)
            }else{
                totalAddOn += Number(item.monthly)
            }
            // return item
        })
        console.log(totalAddOn)

        setSummary(prev => ({...prev, addOnTotalAmount: totalAddOn}))
        // setCounter(1)
        // setCounter(prev=> prev + 2)
    }, [])

    const store = useSelector(state => state.planData)
    // console.log(store);

    const dispatch = useDispatch()

    const handlePrevious = () => {
        dispatch(handlePreviousStep())
    }
    const handleNext = () => {
        dispatch(handleNextStep())
    }

    const change = () => {
        dispatch(handleChange())
    }
    return (
        <>
        <div>

            <div>
                <h1 className='text-4xl mt-5 font-bold '>Finishing up</h1>
                <p className='mt-5 '>Double-check if everything looks OK before confirming.</p>
            </div>
            <div className="border bg-gray-100 rounded">
                <div>
                    <div className='flex justify-between '>
                        {
                            <div className='my-2 mx-2'>
                                <span className='text-1xl font-bold'>{summary.planType}</span>
                                <span className='text-1xl font-bold'>{summary.isYearPlanLength ? '(Yearly)' : '(monthly)'}</span>
                                <p><button className='text-blue-900 ' onClick={change}>change</button></p>
                            </div>
                        }
                        <p className='mr-4 font-bold'>${summary?.planAmount}/{!summary?.isYearPlanLength ? "mo" : "yr"}</p>
                    </div>
                    {
                        summary.addOnTypes.map((item, i) => (
                            <div key={i} className="flex justify-between my-2 mx-2">
                                <p className='text-1xl font-bold'>{item.name}</p>
                                <p className='text-1xl font-bold mr-4' htmlFor="" >${summary?.isYearPlanLength ? item?.yearly : item?.monthly}/ {summary?.isYearPlanLength ? "yr" : "mo"}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex lg:ms-10 mt-5">
                <p className='font-bold text-2xl'>Total</p>
                <span className="lg:ms-80 font-bold ms-40 text-2xl">${summary?.addOnTotalAmount + summary?.planAmount}</span>
            </div>

            <div className='lg:flex flex lg:gap-0 gap-[120px] mt-10'>
                <button className='text-xl' onClick={handlePrevious}>Back</button>
                <button onClick={handleNext} className='bg-blue-800 text-white rounded lg:ms-96 ms-26 lg:mt-0 lg:p-3 p-2 lg:w-[25%] w-[105px]'>CONFIRM</button>
            </div>
        </div>
        </>
    )
}

export default Summary