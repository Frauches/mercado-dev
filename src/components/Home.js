import React, {Component} from 'react';
import AnuncioHome from './AnuncioHome';
import LinkCategoria from './LinkCategoria';
import HeaderHome from './HeaderHome';
import base from '../base';

export default class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            categorias: [],
            anuncios: []
        }

        base.bindToState('categorias', {
            context: this,
            state: 'categorias'
        });

        base.bindToState('anuncios', {
            context: this,
            state: 'anuncios',
            queries: {
                limitToLast: 3
            }
        });
    }
    render(){
        let index = 0;
        return(
            <div>
                <HeaderHome/>
                <div className="container">
                    <h3>Últimos Anúncios</h3>
                    <div className="row">
                        {this.state.anuncios.map( (anuncio, indice) => {
                            return <AnuncioHome key={indice} anuncio={{
                                nome: anuncio.nome,
                                descricao: anuncio.descricao,
                                preco: anuncio.preco,
                                imagem: anuncio.foto
                            }}/>;

                        })}
                    </div>

                    <h3>Categorias</h3>
                    <div className="row">
                        {this.state.categorias.map( (cat, indice) => {
                            return [
                                <LinkCategoria key={indice} categoria={{icone: cat.icon, nomeCategoria: cat.categoria}}/>,
                                ++index%4 === 0 && <div key={'c'+indice} className="w-100"></div>
                            ]
                        })}
                    </div>
                </div>
            </div>
        );
    }
}