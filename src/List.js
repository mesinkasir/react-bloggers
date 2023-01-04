import React from 'react';
import SinglePage from './SinglePage';
import ArticleContent from './data/ArticleContent';
import { Link } from 'react-router-dom';
import ArticleList from './ArticleList';
const List = () => (
  <>
    <ArticleList articles={ArticleContent} />
  </>
);
export default List;
