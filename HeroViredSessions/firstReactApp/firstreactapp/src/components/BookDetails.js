import React from 'react'

function BookDetails({ books }) {
    return (
      <div className="book-details">
        {books.map((book, index) => (
          <div key={index} className="book">
            <h2>{index + 1}. {book.name}</h2>
            <p>Author: {book.author}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    );
  }
  

export default BookDetails