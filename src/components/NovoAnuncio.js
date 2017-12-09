import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';

export default class NovoAnuncio extends Component {

    render(){
        return (
            <div>
                <HeaderInterno/>
                <div className="container" style={{paddingTop: '120px'}}>
                    <h1>Novo Anúncio</h1>
                    <form onSubmit={null}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input ref={((ref) => this.nome = ref)} type="text" className='form-control' placeholder="Nome" id="nome"/>
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