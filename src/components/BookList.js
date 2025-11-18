import React, { useEffect, useState } from 'react';
import { getBooks } from './services/BookService';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
