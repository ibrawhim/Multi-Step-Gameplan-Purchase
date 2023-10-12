import './index.css'
import Steppers from './components/Steppers'
import PersonalInfo from './pages/PersonalInfo'
import AddOn from './pages/AddOn'

function App() {

  return (
    <>
      <div className='flex border lg:w-[70%] mx-auto w-[60%] lg:mt-10 justify-between lg:flex-row flex-col'>
        <div className='lg:w-[30%] w-100'>
          <Steppers/>
        </div>
          <div className='w-[70%]'>
            <PersonalInfo/>
            {/* <AddOn/> */}
          </div>
      </div>
    </>
  )
}

export default App
