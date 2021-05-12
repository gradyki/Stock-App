import './App.css';
import { Switch, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Layout from './layout/Layout'
import Home from './screens/Home/Home'
import { eodUrl, latestUrl, dailyCloses} from './services/index'
import axios from 'axios'
import {dateFormat} from './services/utils'


function App() {
  const [apple, setApple] = useState('AAPL')
  const [microsoft, setMicrosoft] = useState(null)
  const [appleDay, setAppleDay] = useState(null)
  const [microsoftDay, setMicrosoftDay] = useState(null)
  const [ibm, setIbm]= useState(null)

  
  
  
  
  
  
  useEffect(() => {
    const getAppleEod = async () => {
      const respApple = await axios.get(`${eodUrl}${apple}`)
      setApple(respApple.data)
      const respMicrosoft = await axios.get(`${eodUrl}MSFT`)
      setMicrosoft(respMicrosoft.data)
      const respAppleDay = await axios.get(`${latestUrl}AAPL`)
      setAppleDay(respAppleDay.data)
      const respMicrosoftDay = await axios.get(`${latestUrl}MSFT`)
      setMicrosoftDay(respMicrosoftDay.data)
      const respIbm = await axios.get(`${dailyCloses}`)
      setIbm(respIbm.data)

  
    }
    getAppleEod()
  }, [])
  
  
  
  // let todaysDate = new Date()
  // let day = todaysDate.getDate()
  // let year = todaysDate.getFullYear()
  // let month = todaysDate.getMonth() +1

  // let toConvert = `${year}-${month<10 ?`0${month}`: `${month}`}-${day<10?`0${day}`: `${day}`}`
  // let yesterday = dateFormat(toConvert)

  // console.log('toconvert', toConvert)
  
  // console.log('date', yesterday)
  
  
  return (
    
    < div className="App" >
      {appleDay && microsoftDay && ibm &&
        <Layout>
          <Switch>
            <Route path='/'>
            <Home apple={apple} microsoft={microsoft} appleDay={appleDay} microsoftDay={microsoftDay} ibm={ibm}/>
            </Route>
          </Switch>
      </Layout>
      }
    </div >
      
  );

}

export default App;
