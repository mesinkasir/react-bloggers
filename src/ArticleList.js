import React from 'react';
import { Link } from 'react-router-dom';
import Cover from './widget/Cover';
const ArticleList = ({ articles }) => (
  <div className="row">
    <Cover />
    {articles.map((article, key) => (
      <div className="col-md-4 p-1 mt-3" key={article.id}>
        <Link to={`/article/${article.name}`}>
          <div className="border row ms-3 me-3 bunder">
            <div className="col-md-12 p-3">
              <img
                className="img-fluid bunder"
                loading="lazy"
                width="100%"
                height="100%"
                alt="{article.title}"
                src={article.thumb}
              />
            </div>
            <section className="p-3">
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0, 180)}...</p>
            </section>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

export default ArticleList;
