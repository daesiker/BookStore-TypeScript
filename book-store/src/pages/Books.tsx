import React from 'react'
import Title from '../components/common/Title'
import styled from 'styled-components'
import BooksFilter from '../components/common/books/BooksFilter'
import BooksList from '../components/common/books/BooksList'
import BooksEmpty from '../components/common/books/BooksEmpty'
import { Pagination } from '../components/common/books/Pagination'

const Books = () => {
    return (
        <>
            <Title size='large'>도서 검색 결과</Title>
            <BooksStyle>
                <BooksFilter />
                <BooksList />
                <BooksEmpty />
                <Pagination />
            </BooksStyle>
        </>
    )
}


const BooksStyle = styled.div``;

export default Books

