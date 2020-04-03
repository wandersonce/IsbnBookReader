import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { MdArrowForward } from 'react-icons/md';

import { getBook } from '../../../../services/books'
import { Container, Wrapper, Cover, Info, ActionButtons } from './styles';

function Results({ isbn }) {
    const [book, setBook] = useState();

    useEffect(() => {
        const loadBook = async () => {
            const res = await getBook(isbn);
            setBook(res);
        };
        loadBook();
    }, [isbn]);

    return (
        <Container>
            {book && ( // ! It will make a condition to just return the code  if the variable book have been loaded
                <Link to={`/book-details/${isbn}`}>
                    <Wrapper>
                        <Cover src={book.coverUrl} />
                        <Info>
                            <h4 className="bookName" >{book.name}</h4>
                            <div className="bookRating">
                                <StarRatings rating={book.rating}
                                    starRatedColor="#f1c40f"
                                    starDimension="18px"
                                    starSpacing="0"
                                />{' '}
                                {book.rating}
                            </div>
                            <div className="price">
                                <span className="discount">was ${Number(book.price).toFixed(2)}</span>
                                {'  '}<b>now</b>{' '}
                                <span>${Number(book.promotionalPrice).toFixed(2)}</span>
                            </div>
                        </Info>
                        <ActionButtons>
                            <span className="button">
                                <MdArrowForward size={32} color="#fff" />
                            </span>
                        </ActionButtons>
                    </Wrapper>
                </Link>
            )}
        </Container>
    );
}

Results.prototype = {
    isbn: PropTypes.string.isRequired,
};

export default Results;