import './App.css'
import Loader from './components/Loader'
import Astronaut from './components/Sections/Astronaut'
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
      <Astronaut />
    </>
  )
}

export default App
