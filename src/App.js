import React, { Component } from 'react';
import Home from './components/Home';
import NovoAnuncio from './components/NovoAnuncio';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path='/' exact component={Home}/>
                    <Route path='/novo-anuncio' exact component={NovoAnuncio}/>
                    <Footer/>
                </div>
            </Router>
        );
  }
}

export default App;
