import React, { Component } from 'react';
import Home from './components/Home';
import NovoAnuncio from './components/NovoAnuncio';
import Footer from './components/Footer';
import base from './base';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CategoriaHome from "./components/CategoriaHome";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            categorias: []
        };

        base.bindToState('categorias', {
            context: this,
            state: 'categorias'
        });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path='/' exact render={ () => <Home categorias={this.state.categorias}/>}/>
                    <Route path='/novo-anuncio' exact render={ () => <NovoAnuncio categorias={this.state.categorias}/> }/>
                    <Route path='/anuncios/categoria/:categoriaUrl' exact component={CategoriaHome}/>
                    <Footer/>
                </div>
            </Router>
        );
  }
}

export default App;
