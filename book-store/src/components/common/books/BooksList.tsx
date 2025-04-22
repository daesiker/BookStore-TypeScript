import React from 'react'
import styled from 'styled-components';
import BookItem from './BookItem';
import { Book } from '../../../models/book.model';

const dummyBook: Book = {
    id: 1,
    title: "dummy Book",
    img: 5,
    category_id: 1,
    summary: "Dummy Summary",
    author: "Dummy Author",
    price: 10000,
    likes: 1,
    form: "paperback",
    isbn: "Dummy ISBM",
    detail: "Dummy Detail",
    pages: 100,
    contents: "Dummy Contents",
    pubDate: "2021-01-01"
}


const BooksList = () => {
  return (
    <BooksListStyle>
        <BookItem book={dummyBook}/>
    </BooksListStyle>
    
  )
}

const BooksListStyle = styled.div``;

export default BooksList