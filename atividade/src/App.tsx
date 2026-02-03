import { useEffect, useState } from "react";
import type { Book } from "./types/Book.js";
import { getBooks, addBook, deleteBook, updateBook} from "./services/Api.js";
import { BookForm } from "./components/BookForm.js";
import { BookList} from "./components/bookList.js";

function App() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {
            const data = await getBooks();
            setBooks(data);
        } catch (error) {
            console.error("Erro ao buscar livros", error);
        }
    };

    const handleAddBook = async (book: Book) => {
        try {
            const newBook = await addBook(book);
            setBooks((prev) => [...prev, newBook]);
        } catch (error) {
            console.error("Erro ao adicionar livro", error);
        }
    };

    const handleDeleteBook = async (id: string) => {
        try {
            await deleteBook(id);
            setBooks((prev) => prev.filter((book) => book._id !== id));
        } catch (error) {
            console.error("Erro ao remover livro", error);
        }
    };

    const handleToggleStatus = async (book: Book) => {
        const updatedBook: Book = {
            ...book,
            status: book.status === "Lido" ? "Não lido" : "Lido",
        };

        try {
            await updateBook(updatedBook);
            setBooks((prev) =>
                prev.map((b) => (b._id === book._id ? updatedBook : b))
            );
        } catch (error) {
            console.error("Erro ao atualizar status", error);
        }
    };

    return (
        <div>
            <h1>Catálogo de Livros</h1>
            <BookForm onAdd={handleAddBook} />
            <BookList
                books={books}
                onDelete={handleDeleteBook}
                onToggleStatus={handleToggleStatus}
            />
        </div>
    );
}

export default App;
