/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(1);
  const [article, setArticle] = useState("");

  function nextPage() {
    setCount(count + 1);
  }
  function previousPage() {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  }

  useEffect(() => {
    fetch("https://dummyjson.com/posts/" + count)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [count]);
  return (
    <>
      <main>
        <header>
          <p className="text-red">{count}</p>
          <button className="ini just" onClick={nextPage}>
            Next page
          </button>
          <button onClick={previousPage}>Previous Page</button>
        </header>
        <article>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </article>
      </main>
    </>
  );
}
