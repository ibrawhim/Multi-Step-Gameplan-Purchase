import {createSlice} from '@reduxjs/toolkit'

const initialData = () => {
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
    name: 'plan',
    initialState: {
        planData: initialData()
    },
    reducers: {
        handleNextStep: (state, action)=> {
            state.planData = {...state.planData, ...action.payload}
            state.planData.currentStep++
            localStorage.setItem("subscription", JSON.stringify(state.planData))
        },
    }
})

export const {handleNextStep} = slice.actions
export default slice.reducer