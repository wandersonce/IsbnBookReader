import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import { Container, Cover } from './styles'

const Info = ({ book }) => {
    return (
        <Container>
            <Cover src={book.coverUrl} />
            <h4 className="bookName" >{book.name}</h4>
            <div className="bookRating">
                <StarRatings rating={book.rating}
                    starRatedColor="#f1c40f"
                    starDimension="18px"
                    starSpacing="0"
                />{' '}
                ({book.rating})
            </div>
            <div className="price">
                <span className="discount">was ${Number(book.price).toFixed(2)}</span>
                {'  '}<b>now</b>{' '}
                <span>${Number(book.promotionalPrice).toFixed(2)}</span>
            </div>
        </Container>
    );
};

Info.prototype = {
    book: PropTypes.shape({
        name: PropTypes.string,
        rating: PropTypes.number,
        price: PropTypes.number,
        promotionalPrice: PropTypes.number,
        coverUrl: PropTypes.string
    }).isRequired
}

export default Info;