import './App.css'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import { useContext, useEffect, useState } from 'react'
import { ContextGlobal } from './context/ProviderContext'
import { BounceLoader } from 'react-spinners'




function App() {
  const [isLoading, setLoad] = useState(true)
  const context = useContext(ContextGlobal)
  const input = context.input
  const setDataAPI = context.setDataAPI
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_SpX1WQkbd062I2TQYT2tfSCgK5j81&ipAddress=${input}`

  useEffect(()=>{
    setLoad(true)
    fetch(url)
      .then((response)=> response.json())
      .then((json)=> setDataAPI(json))
      .then(()=> setLoad(false))
      .catch((error)=>{console.log(error)})
      

    
  },[url,setDataAPI])

  return (

      <div className='app'>
        <Header />
        {
          !isLoading ? <Map /> : <div style={{width:'100%', height:'70vh', display:'flex', alignItems:'center', justifyContent:'center'}}><BounceLoader color="#5B7CE6" /></div>
        }
      </div>

  )

  
}

export default App
