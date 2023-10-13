import './index.css'
import Steppers from './components/Steppers'
import PersonalInfo from './pages/PersonalInfo'
import AddOn from './pages/AddOn'
import { useSelector } from 'react-redux'
import Summary from './pages/Summary'
import Selectplan from './pages/Selectplan'
import Thank from './pages/Thank'

function App() {

  const currentIndex = useSelector(state => state.planData.currentStep)
  console.log(currentIndex);


  return (
    <>
      <div className='flex border lg:w-[70%] mx-auto w-[60%] lg:mt-10 justify-between lg:flex-row flex-col'>
        <div className='lg:w-[30%] w-100'>
          <Steppers currentIndex={currentIndex}/>
        </div>
          <div className='w-[70%]'>
          {/* <PersonalInfo /> */}
          {currentIndex === 0 &&
            (<PersonalInfo />
            )}
            {currentIndex === 1 &&
            (<Selectplan/>
            )}
          {currentIndex === 2 &&
            (<AddOn />
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
