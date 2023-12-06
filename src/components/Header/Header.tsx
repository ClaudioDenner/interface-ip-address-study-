import style from './Header.module.css'
import iconArrow from '../../assets/images/icon-arrow.svg'
import {useState, useContext} from 'react'
import { ContextGlobal } from '../../context/ProviderContext'
import z from 'zod'




function Header() {

  const [input, setInput] = useState('')

  const context = useContext(ContextGlobal)
  const dados = context.dataAPI

  function search(){
    try{
      const ipv4 = z.string().ip({ version: "v4",message:"Por favor, insira um IP v4 válido." });
      ipv4.parse(input);
      query()
    }catch(error){
      alert('Digite um IP Válido')
      setInput('')
    }
  }
  function query(){
      context.setInput(input)
  }

  return (
    <div className={style.container}>
      
      <h1 className={style.title}>IP Address Tracker</h1>

      <div className={style.container_input}>
        <input className={style.input} type='text' placeholder='Search for any IP address or domain' onChange={(e)=>setInput(e.target.value)} value={input} />
        <button className={style.button} onClick={()=> search()} ><img src={iconArrow} /></button>
      </div>
      
      <div className={style.container_infos}>
        <div className={style.topic_info}>
          <h2 className={style.title_topic_info}>IP ADDRESS</h2>
          <h3 className={style.value_topic_info}>{dados? dados.ip : '----'}</h3>
        </div>

        <div className={style.topic_info}>
          <h2 className={style.title_topic_info}>LOCATION</h2>
          <h3 className={style.value_topic_info}>{dados? `${dados.location?.city}, ${dados.location?.region}, ${dados.location?.country} ${dados.location?.postalCode}` : '----'}</h3>
        </div>

        <div className={style.topic_info}>
          <h2 className={style.title_topic_info}>TIMEZONE</h2>
          <h3 className={style.value_topic_info}>{dados? `UTC ${dados.location?.timezone}`: '----' }</h3>
        </div>

        <div className={style.topic_info}>
          <h2 className={style.title_topic_info}>ISP</h2>
          <h3 className={style.value_topic_info}>{dados ? dados.isp : '----' }</h3>
        </div>

        
      </div>
      
    </div>
  )
}

export default Header