import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import base, {storage} from '../base';
import { Redirect } from 'react-router-dom';
export default class NovoAnuncio extends Component {

    constructor(props){
        super(props);
        this.state = {
            success: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        const file =  this.foto.files[0];
        const { name } = file;
        const ref = storage.ref(name);

        ref.put(file)
            .then( img => {
                const novoAnuncio = {
                    nome: this.nome.value,
                    descricao: this.descricao.value,
                    preco: this.preco.value,
                    telefone: this.telefone.value,
                    vendedor: this.vendedor.value,
                    categoria: this.categoria.value,
                    foto: img.metadata.downloadURLs[0]
                };

                base.push('anuncios', {data: novoAnuncio}).then( () => {
                    this.setState({
                        success: true
                    });
                });
            });

        return false;
    }
    render(){
        if(this.state.success){
            return <Redirect to='/'/>
        }
        return (
            <div>
                <HeaderInterno/>
                <div className="container" style={{paddingTop: '120px'}}>
                    <h1>Novo Anúncio</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="foto">Foto</label>
                            <input ref={((ref) => this.foto = ref)} type="file" className='form-control' placeholder="Foto" id="foto"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input ref={((ref) => this.nome = ref)} type="text" className='form-control' placeholder="Nome" id="nome"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="categoria">Categoria</label>
                            <select ref={((ref) => this.categoria = ref)} className='form-control' placeholder="Nome" id="nome">
                                {
                                    this.props.categorias.map( (categoria, indice) => <option value={categoria.url} key={categoria.url}>{categoria.categoria}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <input ref={((ref) => this.descricao = ref)} type="text" className='form-control' placeholder="Descrição" id="descricao"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="preco">Preço</label>
                            <input ref={((ref) => this.preco = ref)} type="text" className='form-control' placeholder="Preço" id="preco"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input ref={((ref) => this.telefone = ref)} type="text" className='form-control' placeholder="Telefone" id="telefone"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="vendedor">Vendedor</label>
                            <input ref={((ref) => this.vendedor  = ref)} type="text" className='form-control' placeholder="Vendedor" id="vendedor"/>
                        </div>

                        <button type='submit' className='btn btn-primary'>Salvar Anúncio</button>
                    </form>
                </div>
            </div>
        );
    }
}