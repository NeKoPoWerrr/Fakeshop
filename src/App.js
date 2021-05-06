
import './App.css';
import Header from './containers/Header.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductListing from './containers/ProductListing';

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path ="/" exact component={ProductListing} />
            <Route path ="/product/:productId" exact component={ProductListing} />
            <Route>404 Not Found !</Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
