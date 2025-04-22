import { render, screen } from "@testing-library/react";

import { BookStoreThemeProvider } from "../../context/themeContext";
import BookItem from "./BookItem";
import { Book } from "../../../models/book.model";


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

describe("Title 컴포넌트 테스트", () => {
    it('렌더 여부', () => {
        const { getByText, getByAltText } = render(
            <BookStoreThemeProvider>
                <BookItem book={dummyBook} />
            </BookStoreThemeProvider>
        )

        expect(getByText(dummyBook.title)).toBeInTheDocument();
        
    });

    

})