import './App.css';
import { Switch, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Layout from './layout/Layout'
import Home from './screens/Home/Home'
import { appleEodUrl } from './services/index'
import axios from 'axios'


function App() {
  const [apple, setApple] = useState(null)
  
  useEffect(() => {
    const getAppleEod = async () => {
      const respApple = await axios.get(`${appleEodUrl}`)
      setApple(respApple.data)
  
    }
    getAppleEod()
    console.log('inside useEffect' , apple)
  }, [])
  
  console.log('outside useeffect', apple)

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
   </Layout>
    </div>
  );
}

export default App;
