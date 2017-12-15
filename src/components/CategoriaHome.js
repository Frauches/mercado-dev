import React, { Component } from 'react';
import base from '../base';

export default class CategoriaHome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            anuncios: []
        }

        base.bindToState('anuncios', {
            context: this,
            state: 'anuncios',
        });
    }

    render(){
        console.log(this.state.anuncios);
        return(
            <div>
                {
                    Object.keys(this.state.anuncios).map( key => {
                        const anuncio = this.state.anuncios[key];
                        return (<h1 key={key}>TEST WITH {anuncio.descricao}</h1>);
                    })
                }
            </div>
        );
    }
}