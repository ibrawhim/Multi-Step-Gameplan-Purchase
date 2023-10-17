import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { handleNextStep } from '../redux/plan'
import { useDispatch, useSelector } from 'react-redux'



const PersonalInfo = () => {
  const store = useSelector((state) => state.planData)

  const schema = yup

  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()
  
  const {register, handleSubmit, setValue, formState: { errors },} = useForm({ resolver: yupResolver(schema), })


  useEffect(() => {
        if (store) {
            setValue("Name", store.Name)
            setValue("Email", store.Email)
            setValue("Phone", store.Phone)
        }
    }, [])




  const dispatch = useDispatch()
  const onSubmit = (data) => {
    let form = {...store, ...data}
    console.log(form);
    dispatch(handleNextStep(form))
  }


  return (
    <>
    <div className=' lg:px-14 flex'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-bold py-5 text-xl'>Personal Info</h1>
        <p>Please provide your name, email address and phone number.</p>
        <div className='py-5'>
          <label htmlFor="">Name</label><br />
          <input className='w-full  border border-black py-2 rounded' {...register("firstName")} />
          <p>{errors.firstName?.message}</p>
        </div>
        <div className='py-5'>
          <label htmlFor="">Email Address</label><br />
          <input className='w-full  border border-black py-2 rounded' {...register("age")} />
          <p>{errors.age?.message}</p>
        </div>
        <div className='py-5'>
          <label htmlFor="">Phone</label><br />
          <input className='w-full  border border-black py-2 rounded' {...register("age")} />
          <p>{errors.age?.message}</p>

        </div>
        <button className='bg-black text-white' type='submit'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default PersonalInfo