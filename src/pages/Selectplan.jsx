import React, { useEffect, useState } from 'react'
import { handleNextStep, handlePreviousStep } from '../redux/plan'
import { useDispatch, useSelector } from 'react-redux'
import {SiApplearcade}  from 'react-icons/si'
import {IoLogoGameControllerA} from 'react-icons/io'
import {LiaGamepadSolid}  from 'react-icons/lia'
import '../index.css'


const Selectplan = () => {
  const store = useSelector(state => state.planData)
  // console.log(store);

  
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
          image: <LiaGamepadSolid/>,
          bg: 'bg-blue-500'
        },
      ])
      
      const dispatch = useDispatch()

      useEffect(() => {
        setFormData((prev) => ({ ...store }))
      }, [])

      const handlePrevious = () => {
          dispatch(handlePreviousStep())
      }
      const handleSubmit = () => {
          const { planType, planAmount  } = formData
          if (planType && planAmount) {
              dispatch(handleNextStep(formData))
          }
      }
      const updateForm = (id) => {
          const newPlan = availablePlan[id]
          setFormData({
              ...formData, planType: newPlan.name,
              planAmount: formData.isYearPlanLength ? newPlan.yearly : newPlan.monthly,
          })
      }

  return (
    <>
        <div>
            <h1 className='text-2xl font-bold lg:py-4 py-2'>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className='grid lg:grid-cols-3 lg:gap-6 lg:w-[430px] gap-2  grid-cols-1'>
              {
                availablePlan.map((item,i)=>(
                      <button key={i} className={`border flex lg:flex-col lg:gap-0 lg:h-[160px] cursor-pointer h-[70px] w-full lg:w-full rounded-xl px-2 hover:border-black ${item.name === formData.planType ? 'border-black border-1' : ''}` } onClick={() => updateForm(i)}>
                        <div className={item.bg} style={{marginTop: '12px', marginLeft: '5px', borderRadius: '100%', padding: '10px', color:'white'}}>{item.image}</div>
                        <div className='lg:mt-6'>
                          <div className='flex'>{item.name}</div>
                          <div className='flex lg:mb-5'>{formData?.isYearPlanLength ? item.yearly + '$' : item.monthly + '$'}/ {formData?.isYearPlanLength ? "year" : "month"}</div>
                        {formData.isYearPlanLength && <span className="yeartype">2 months free</span>}
                        </div>
                      </button>
                ))
              }
            </div>


            <div className='flex justify-center items-center lg:w-[430px] w-full h-[56px] mt-[25px] rounded-xl bg-sky-100'>
                    <p className='mt-3'>Monthly</p>
                    <label className='check w-[40px] h-[20px] cursor-pointer inline-block relative overflow-hidden mt-4 mr-2.5 ml-2.5 '>
                        <input type="checkbox" checked={formData.isYearPlanLength} onChange={(e) => setFormData({ ...formData, isYearPlanLength: e.target.checked, planType: '', planAmount: 0 })} className='absolute top-[-30px] left-[-30px] w-0 h-0' id='checkbox' name='planLength' />
                        <span className='absolute top-0 left-0 bottom-0 right-0 bg-sky-900 rounded-[20px] '></span>
                    </label>
                    <p className='mt-3'>Yearly</p>

            </div>

            <div className='lg:flex flex justify-between lg:gap-0 gap-[120px] mt-10'>
                <button className='text-xl' onClick={handlePrevious}>Back</button>
                <button onClick={handleSubmit} className='bg-[#921445] text-white rounded lg:ms-96 ms-26 lg:mt-0  p-2 lg:w-[25%] w-[105px]'>CONFIRM</button>
            </div>
        </div>
    </>
    
  )
}

export default Selectplan