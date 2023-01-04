import React from 'react';
import Data from '../data/Data';
import { Link } from 'react-router-dom';
const Header = () => (
  <div className="col-md-12 p-3">
    {Data.map((Data) => (
      <div className="mt-5 row" key={Data.id}>
        <Link to="/" className="text-center col-md-12">
          <h1>
            <strong> {Data.title}</strong>
          </h1>
        </Link>
        <div className="col-md-12 text-center">
          <h2>{Data.description}</h2>
          <p>
            <a href={Data.url} class="text-light btn btn-dark">
              {Data.download}
            </a>
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default Header;
