import type { Book } from "../types/Book.js";

interface BookItemProps {
    book: Book;
    onDelete: (id: string) => void;
    onToggleStatus?: (book: Book) => void;
}

export function BookItem({ book, onDelete, onToggleStatus }: BookItemProps) {
    return (
        <li>
            <strong>{book.title}</strong> - {book.author} | {book.status}
            <button onClick={() => book._id && onDelete(book._id)}>
                Remover
            </button>
            {onToggleStatus && (
                <button onClick={() => onToggleStatus(book)}>
                    Alternar Status
                </button>
            )}
        </li>
    );
}
