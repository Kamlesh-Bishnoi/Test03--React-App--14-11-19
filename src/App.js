import React from 'react';
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Header from './components/Header'
import About from './components/About'
import Team from './components/Team'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer';
class App extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
      <div className="App">
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route path={'/About'} component={About} />
            <Route path={'/Team'} component={Team} />
            <Route path={'/Portfolio'} component={Portfolio} /> 
         
            <Route path={'/Contact'} component={Contact} />
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          </Switch>
          <Footer />
        </Router>

      </div>
    );
  }
}
export default App;
