
import Header from './containers/Header.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import './App.css';
import ProductDetail from "./containers/ProductDetail";

const basePath = process.env.PUBLIC_URL || '/';

function App() {
  return (
      <div className="App">
        <Router basename={basePath}>
          <Header />
          <Switch>
            <Route path ="/" exact component={ProductListing} />
            <Route path="/product/:productId" component={ProductDetail} />
            <Route>404 Not Found !</Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
