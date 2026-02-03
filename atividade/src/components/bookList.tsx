import type { Book } from "../types/Book.ts";
import { BookItem } from "./BookItem.js";

interface BookListProps {
    books: Book[];
    onDelete: (id: string) => void;
    onToggleStatus: (book: Book) => void;
}

export function BookList({ books, onDelete, onToggleStatus }: BookListProps) {
    return (
        <ul>
            {books.map((book) => (
                <BookItem
                    key={book._id}
                    book={book}
                    onDelete={onDelete}
                    onToggleStatus={onToggleStatus}
                />
            ))}
        </ul>
    );
}
