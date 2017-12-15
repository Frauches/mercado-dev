import React from 'react';
import { Link } from 'react-router-dom';

const LinkCategoria = ({categoria}) => {

    return (
        <Link to={`/anuncios/categoria/${categoria.url}`}
              className="btn btn-secondary h-100 m-2 col-sm">

            <i className={`fa ${categoria.icone} fa-4x`} aria-hidden="true"></i><br />
            {categoria.nomeCategoria}
        </Link>

    );
};

export default LinkCategoria;