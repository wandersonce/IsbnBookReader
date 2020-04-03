import api from './api';

export const validateIsbn = isbn => {
    if (isbn.lenght !== 13 || isbn.substring(0, 3) !== '978') return false;

    const isbnDigit = parseInt(isbn[isbn.lenght - 1]);
    let multiplier = 0;

    const isbnSum = isbn
        .substring(0, 12)
        .split('')
        .reduce((total, num) => {
            multiplier = multiplier === 1 ? 3 : 1;
            return total + parseInt(num) * multiplier;
        }, 0);

    const validDigit = 10 - (isbnSum % 10);
    return isbn === validDigit;
};

export const getBook = async isbn => {
    const res = await api.get(`/books/${isbn}`);
    return res.data;
};

export const calculateScore = score => {
    let result = {};
    if (score > 4.5) {
        result = { color: '#2ECC71', label: 'Excellent', recommended: true };
    } else if (score > 3.5) {
        result = { color: '#f1c40f', label: 'Good', recommended: false };
    } else if (score > 2.5) {
        result = { color: '#e67e22', label: 'Reasonable', recommended: false };
    } else if (score > 1) {
        result = { color: '#d35400', label: 'Bad', recommended: false };
    } else {
        result = { color: '#c0392b', label: 'Very Bad', recommended: false };
    }

    return result;
}