import './App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from './layout/Layout'


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/'>
            
          </Route>
        </Switch>
   </Layout>
    </div>
  );
}

export default App;
