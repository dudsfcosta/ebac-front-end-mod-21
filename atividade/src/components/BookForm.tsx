import { useState, type FormEvent } from "react";
import type {Book, BookStatus} from "../types/Book.js";

interface BookFormProps {
    onAdd: (book: Book) => void;
}

export function BookForm({ onAdd }: BookFormProps) {
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [status, setStatus] = useState<BookStatus>("Não lido");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newBook: Book = { title, author, status };
        onAdd(newBook);

        setTitle("");
        setAuthor("");
        setStatus("Não lido");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Autor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value as BookStatus)}
            >
                <option value="Não lido">Não lido</option>
                <option value="Lido">Lido</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>
    );
}
