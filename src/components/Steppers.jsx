import React from 'react'

const Steppers = ({ currentIndex }) => {

    <h1>hello</h1>
    const steps = [
        "Your Info",
        "Select Plan",
        "Add-Ons",
        "Summary"
    ]
    return (
        <>

            <div className='bg-sky-300 h-full'>
                {/* <div>
                    {
                        steps.map((item, i) => (
                          ))
                          
                        }
                </div> */}

                <div className='steps flex lg:flex-col justify-center lg:items-center'>
                    {
                      steps.map((item, i) => (
                        <div key={i} className='flex py-5 lg:w-40'>
                                <div className={`${currentIndex === i ? 'bg-white' : ''} w-[35px] text-center flex justify-center items-center mt-1 border h-[35px] rounded-full me-2`}>{i + 1}</div>
                                <div className='sm:hidden lg:block text-center'>
                                <div className='step1'>STEP{i + 1}</div>
                                <div>{item}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Steppers