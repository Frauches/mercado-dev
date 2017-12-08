import React from 'react';

const LinkCategoria = ({categoria}) => {
    return (
        <a to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa ${categoria.icone} fa-4x`} aria-hidden="true"></i><br />
            {categoria.nomeCategoria}
        </a>

    );
}

export default LinkCategoria;