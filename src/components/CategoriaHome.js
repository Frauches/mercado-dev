import React, { Component } from 'react';
import Anuncio from './Anuncio';
import base from '../base';
import HeaderInterno from "./HeaderInterno";

export default class CategoriaHome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            anuncios: {}
        }
    }

    componentWillMount(){
        base.bindToState('anuncios', {
            context: this,
            state: 'anuncios',
            queries: {
                orderByChild: 'categoria',
                equalTo: this.props.match.params.categoriaUrl,
            }
        });
    }

    render(){
        const ShowAnuncios = () => {
            console.log(Object.keys(this.state.anuncios).length);
            if(Object.keys(this.state.anuncios).length > 0){
                return (
                    Object.keys(this.state.anuncios).map((key) => {
                        const anuncio = this.state.anuncios[key];
                        return (
                            <Anuncio key={key} anuncio={anuncio}/>
                        );
                    })
                );
            } else {
                return (<h1 style={{margin: '0 auto', textAlign: 'center'}}>Não existem anúncios para esta categoria</h1>);
            }
        };
        return(
            <div className="container">
                <HeaderInterno/>
                <div className="row" style={{paddingTop: '150px'}}>
                    <ShowAnuncios/>
                </div>
            </div>
        )
    }
}