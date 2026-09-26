import axios from "axios";
import type {Book} from "../types/Book.js";

const API_URL = "https://crudcrud.com/api/0a24c703936f4bc48da4cbb0d144c45f/livros";

export const getBooks = async (): Promise<Book[]> => {
    const response = await axios.get<Book[]>(API_URL);
    return response.data;
};

export const addBook = async (book: Book): Promise<Book> => {
    const response = await axios.post<Book>(API_URL, book);
    return response.data;
};

export const deleteBook = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateBook = async (book: Book): Promise<void> => {
    const { _id, ...data } = book;
    await axios.put(`${API_URL}/${_id}`, data);
};
