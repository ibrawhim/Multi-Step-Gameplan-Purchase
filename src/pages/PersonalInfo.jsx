import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const PersonalInfo = () => {

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)


  return (
    <>
    <div className=' lg:px-14 flex justify-center items-center lg:sm-0 sm-20'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address and phone number.</p>
        <div className='py-5'>
          <label htmlFor="">Name</label><br />
          <input className='lg:w-full w-[70%] border border-black py-2 rounded' {...register("firstName")} />
          <p>{errors.firstName?.message}</p>
        </div>
        <div className='py-5'>
          <label htmlFor="">Email Address</label><br />
          <input className='lg:w-full w-[70%] border border-black py-2 rounded' {...register("age")} />
          <p>{errors.age?.message}</p>
        </div>
        <div className='py-5'>
          <label htmlFor="">Phone</label><br />
          <input className='lg:w-full w-[70%] border border-black py-2 rounded' {...register("age")} />
          <p>{errors.age?.message}</p>

        </div>
        <button className='bg-black text-white' type='submit'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default PersonalInfo