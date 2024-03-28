import './App.css'
import Loader from './components/Loader'
import MilkyWay from './components/Sections/MilkyWay'
import NLOArrived from './components/Sections/NLOArrived'
import PeopleAreComing from './components/Sections/PeopleAreComing'

function App() {

  return (
    <>
      <Loader />
      <MilkyWay />
      <PeopleAreComing />
      <NLOArrived />
    </>
  )
}

export default App
