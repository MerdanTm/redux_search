import React from "react";
import Search from "./Search";

function Artticles({ articles, searchTerm }) {
  console.log(searchTerm);
  return (
    <div>
      <h2>Articles Component</h2>
      <ul>
        {articles
          .filter((article) =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((article) => (
            <li key={article.id}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Artticles;
