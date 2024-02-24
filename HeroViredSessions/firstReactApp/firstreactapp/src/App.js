import { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';

// Sample dataset of books
const booksData = [
  { name: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A novel about racial injustice in the American South.' },
  { name: '1984', author: 'George Orwell', description: 'A dystopian novel about surveillance and government control.' },
  { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A critique of the American Dream in the 1920s.' },
  { name: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', description: 'A multi-generational story of the Buendía family.' },
  { name: 'A Brief History of Time', author: 'Stephen Hawking', description: 'A landmark volume in science writing by one of the great minds of our time.' },
  { name: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'A novel about teenage rebellion and alienation.' },
  { name: 'Pride and Prejudice', author: 'Jane Austen', description: 'A romantic novel of manners.' },
  { name: 'The Diary of a Young Girl', author: 'Anne Frank', description: 'The writings from the Dutch-language diary kept by Anne Frank.' },
  { name: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'A fantasy novel and prelude to the Lord of the Rings.' },
  { name: 'Beloved', author: 'Toni Morrison', description: 'A novel inspired by the African-American experience.' },
];

function App() {

  // State variable for the counter
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1>Books Details</h1>
      <BookDetails books={booksData} /> */}
      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
