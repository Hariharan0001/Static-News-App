import React, { useState, useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Body({ val }) {
  const [articles, setArticles] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [articlesToShow, setArticlesToShow] = useState(15);

  useEffect(() => {
    if (val && val.length > 0) {
      setArticles(val);
    }
  }, [val]);

  useEffect(() => {
    console.log("From Body", articles);
  }, [articles]);

  const handleShowMore = () => {
    setShowMore(true);
    setArticlesToShow(articles.length);
  };

  return (
    <>
      <div id="body">
        {articles.map((article, index) => (
          <div key={index} id="card">
            <h3 id="article">{article.title}</h3>
            <p id="description">{article.content}</p>
          </div>
        ))}
      </div>
      <div id="showmore" className="text-center">
        {!showMore && (
          <button onClick={handleShowMore} className="btn btn-primary showmore">
            Show more
          </button>
        )}
      </div>
    </>
  );
}

export default Body;
