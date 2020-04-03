import React from 'react';
import PropTypes from 'prop-types';

import { calculateScore } from '../../../services/books';
import { Container } from './styles';

function GeneralScore({ book }) {
    const { color, label, recommended } = calculateScore(book.score);
    return (
        <Container scoreColor={color}>
            <div className="score">
                <span className="summaryScoreValue">{book.score}</span>
                <span>{label}</span>
            </div>

            <p className="scoreComment">Recommend by editor</p>
        </Container>
    )
}

GeneralScore.prototype = {
    book: PropTypes.shape({
        score: PropTypes.number,
    }).isRequired
};

export default GeneralScore;