import React, { useState } from 'react'
import { handleNextStep } from '../redux/plan'
import { useDispatch, useSelector } from 'react-redux'
import {SiApplearcade}  from 'react-icons/si'
import {IoLogoGameControllerA} from 'react-icons/io'
import {GrGamepad}  from 'react-icons/gr'
import '../index.css'


const Selectplan = () => {
  const store = useSelector(state => state.planData)
  // console.log(store);

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
      isYearPlanLength: false,
      planType: '',
      planAmount: 0,
  })

    const availablePlan = ([
      {
          name: 'Arcade',
          monthly: 9,
          yearly: 90,
          image: <SiApplearcade/>,
          bg: 'bg-red-500'
      },
      {
          name: 'Advanced',
          monthly: 12,
          yearly: 120,
          image: <IoLogoGameControllerA/>,
          bg: 'bg-yellow-500'
        },
        {
          name: 'Pro',
          monthly: 15,
          yearly: 150,
          image: <GrGamepad/>,
          bg: 'bg-blue-500'
        },
  ])
  return (
    <>
        <div>
            <h1 className='text-2xl font-bold lg:py-4 py-2'>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-4 grid-cols-1 border'>
              {
                availablePlan.map((item,i)=>(
                      <button key={i} className='border flex flex-col lg:h-[140px] rounded-xl'>
                        <div className={item.bg}>{item.image}</div>
                        <div className='flex '>{item.name}</div>
                        <div>{formData?.isYearPlanLength ? item.yearly + '$' : item.monthly + '$'}/ {formData?.isYearPlanLength ? "year" : "month"}</div>
                      </button>
                ))
              }
            </div>


            <div className='flex justify-center items-center w-100 h-[56px] mt-[25px] rounded-xl bg-sky-100'>
                    <p className='mt-3'>Monthly</p>
                    <label className='check w-[40px] h-[20px] cursor-pointer inline-block relative overflow-hidden mt-4 mr-2.5 ml-2.5 '>
                        <input type="checkbox" checked={formData.isYearPlanLength} onChange={(e) => setFormData({ ...formData, isYearPlanLength: e.target.checked, planType: '', planAmount: 0 })} className='absolute top-[-30px] left-[-30px] w-0 h-0' id='checkbox' name='planLength' />
                        <span className='absolute top-0 left-0 bottom-0 right-0 bg-sky-900 rounded-[20px] '></span>
                    </label>
                    <p className='mt-3'>Yearly</p>

            </div>
        </div>
    </>
    
  )
}

export default Selectplan