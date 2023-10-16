import {createSlice} from '@reduxjs/toolkit'


const initialData =()=>   {

const item = window.localStorage.getItem('subscription')

return item ? JSON.parse(item) : {
        currentStep: 0,
        
        Name: '',
        Email: '',
        Phone: '',
        
        isYearPlanLength: '',
        planType: '',
        planAmount: 0,
        
        addOnTypes: [],
        addOnTotalAmount: 0
    }

}

export const slice = createSlice({
    name: 'gameplan',
    initialState: {
        planData: initialData()
    },
    reducers: {
        handleNextStep: (state, action)=> {
            state.planData = {...state.planData, ...action.payload}
            state.planData.currentStep++
            localStorage.setItem("subscription", JSON.stringify(state.planData))
        },

        handlePlanLength: (state, action) =>{
            state.planData.planLength = action.payload 
        },

        handlePreviousStep: (state, action)=> {
            state.planData.currentStep--
        },

        handleChange: (state, action)=> {
            state.planData.currentStep = 1
        },

        handleConfirm: (state, action)=> {
          state.planData.currentStep++  
        }
    }
})
export const  {handleNextStep, handlePlanLength, handlePreviousStep, handleChange, handleConfirm} = slice.actions

export default slice.reducer