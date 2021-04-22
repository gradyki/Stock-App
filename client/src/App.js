import './App.css';
import { Switch, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Layout from './layout/Layout'
import Home from './screens/Home/Home'
import { eodUrl, key2} from './services/index'
import axios from 'axios'


function App() {
  const [apple, setApple] = useState('AAPL')
  const [microsoft, setMicrosoft] = useState('MSFT')
  const [quote, setQuote] = useState(null)
  const [date, setDate] = useState('2021-04-21')
  const [appleDay, setAppleDay] = useState(null)
  
  
  
  
  
  useEffect(() => {
    const getAppleEod = async () => {
      const respApple = await axios.get(`${eodUrl}${apple}`)
      setApple(respApple.data)
      const respMicrosoft = await axios.get(`${eodUrl}${microsoft}`)
      setQuote(respMicrosoft.data)
      const respAppleDay = await axios.get(`https://api.polygon.io/v1/open-close/AAPL/${date}?unadjusted=true&apiKey=${key2}`)
      setAppleDay(respAppleDay)

  
    }
    getAppleEod()
  }, [])
  
  
  
  
  
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/'>
            <Home apple={apple} quote={quote}/>
          </Route>
        </Switch>
   </Layout>
    </div>
  );
}

export default App;
