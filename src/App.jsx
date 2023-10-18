import './index.css'
import Steppers from './components/Steppers'
import PersonalInfo from './pages/PersonalInfo'
import Addon from './pages/Addon'
import { useSelector } from 'react-redux'
import Summary from './pages/Summary'
import Selectplan from './pages/Selectplan'
import Thank from './pages/Thank'

function App() {

  const currentIndex = useSelector(state => state.planData.currentStep)
  console.log(currentIndex);


  return (
    <>
      <div className='flex border font-sans lg:h-[90vh]  shadow lg:mx-20 lg:mt-10 justify-between lg:flex-row flex-col'>
        <div className='steppers lg:w-[30%] w-100'>
          <Steppers currentIndex={currentIndex}/>
        </div>
          <div className='flex justify-center lg:mx-0 mx-10 px-5 shadow py-6 shadow  lg:w-[70%] lg:h-[100vh] h-[80vh]'>
          {currentIndex === 0 &&
            (<PersonalInfo />
            )}
            {currentIndex === 1 &&
            (<Selectplan/>
            )}
          {currentIndex === 2 &&
            (<Addon />
            )}
          {currentIndex === 3 &&
            (<Summary/>)
          }
          {currentIndex === 4 && 
            (<Thank/>)
          }
          </div>
      </div>
    </>
  )
}

export default App
