import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3047/books");
      const data = await res.json();
      setBooks(() => data.books);
    })();
  }, []);
  return (
    <>
      <div>
        {books.map((book, index) => {
          return (
            <>
              <div className="imageField">
                <img src={book.url} alt={book.title} />
              </div>
              <div key={index} className="textField">
                <p>
                  <h2>{book.title}</h2>
                  <h2>
                    by {book.author.firstName} {book.author.lastName}
                  </h2>
                </p>
                <p>People who have bought this book:</p>
                <ul>
                  {book.customers.map((customer, index) => {
                    return (
                      <>
                        <li>
                          {customer.firstName} {customer.lastName} (
                          {customer.email})
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export { Books };
