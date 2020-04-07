import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Extra = ({ book }) => {
    return (
        <>
            <Container>
                <span className="title">Tecnologies:</span>
                <p>{book.tecnologies && book.tecnologies.join(', ')}</p>
            </Container>
            <Container>
                <span className="title">Requiriments:</span>
                <p>{book.requirements && book.requirements.join(', ')}</p>
            </Container>
            <Container>
                <span className="title">Description:</span>
                <p>{book.description}</p>
            </Container>
        </>
    )
}

Extra.prototype = {
    book: PropTypes.shape({
        description: PropTypes.string,
        tecnologies: PropTypes.array,
        requirements: PropTypes.array,
    }).isRequired
}

export default Extra;