import React from 'react';
import ArticleContent from './data/ArticleContent';
import { Helmet } from 'react-helmet';
const SinglePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find((article) => article.name === name);
  return (
    <>
      <Helmet>
        <html lang="id" />
        <meta
          name="google-site-verification"
          content="Xi3WpckDbMBvm1pdlc5XukNoA9uWDmnExIiOeaTOxq0"
        />
        <title>{article.title}</title>
        <meta content={article.desc} name="description" />
        <meta content={article.title} property="og:title" />
        <meta content={article.desc} property="og:description" />
        <meta content={article.img} property="og:image" />
        <meta content="https://axcora.com/getaxcoracms" property="og:author" />
        <meta content={article.title} name="facebook:title" />
        <meta content="website" property="og:type" />
        <meta
          content="https://www.facebook.com/mesinkasircomplete"
          property="facebook:author"
        />
        <meta content={article.img} name="facebook:image" />
        <meta content={article.title} property="og:site_name" />
        <meta content={article.desc} property="facebook:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://twitter.com/hockeycomp"
          property="twitter:author"
        />
        <link rel="apple-touch-icon" href={article.img} />

        <link href={article.img} rel="icon" type="image/x-icon" />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta content={article.img} name="twitter:image" />
        <meta content={article.desc} name="twitter:description" />
        <meta content={article.title} name="twitter:title" />
      </Helmet>
      <div className="p-1">
        <div className="border p-1 bunder">
          <img
            className="img-fluid bunder"
            width="100%"
            height="100%"
            alt={article.title}
            src={article.img}
          />
          <main className="card-content p-3 p-md-5">
            <h1>
              <strong>
                <a href="/"> {article.title}</a>{' '}
              </strong>
            </h1>
            <h2>{article.desc}</h2>
            <p className="dotted" />
            {article.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
