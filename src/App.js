/*import Events from'./Events'
import ClassCompedxonent from'./ClassComponent'
import PropsExample from './PropsExample'
import stateExample from './stateExample'*/
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'

function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
{/*<stateExample/>
   <section>
   <PropsExample name="sai" age="19"/>
    <PropsExample name="timmy"age="19"/>
    <p>Good afternoon</p>
    <h1>heading tag</h1>
    <img src="https://www.epw.in/system/files/Pawan_Kalyan_Featured.jpg"width="40%"alt="pawankalyan"/>
    <ClassComponent/>   
   </section>*/}
   </div>
  )
}
export default App
