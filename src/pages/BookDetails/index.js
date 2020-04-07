import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import Info from './info';
import GeneralScore from './GeneralScore';
import { getBook } from '../../services/books';
import { Container } from './styles';
import Scores from './Scores'
import Extra from './Extra'

function BookDetails() {
    const { isbn } = useParams();
    const [book, setBook] = useState({ isbn: null });

    useEffect(() => {
        const loadBook = async () => {
            const res = await getBook(isbn);
            setBook(res);
        };
        loadBook();
    }, [isbn]);


    return (
        <>
            {
                book.isbn && (
                    <Container>
                        <Info book={book} />
                        <GeneralScore book={book} />
                        <Scores book={book} />
                        <Extra book={book} />
                    </Container>
                )
            }
        </>
    )
}

export default BookDetails;