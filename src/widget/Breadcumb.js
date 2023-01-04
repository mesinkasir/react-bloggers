import React from 'react';
import Data from '../data/Data';
import { Link } from 'react-router-dom';
const Breadcumb = () => (
  <>
    {Data.map((Data, key) => (
      <nav key={Data.id} aria-label="breadcrumb col-12">
        <ol className="breadcrumb border-bottom">
          <li className="breadcrumb-item bg-dark p-1">
            <Link className="text-light" to={Data.menu1url}>
              {Data.menu1}
            </Link>
          </li>
          <li className="breadcrumb-item bg-dark p-1">
            <Link className="text-light" to={Data.menu2url}>
              {Data.menu2}
            </Link>
          </li>
          <li className="breadcrumb-item bg-dark p-1">
            <Link className="text-light" to={Data.menu3url}>
              {Data.menu3}
            </Link>
          </li>
          <li className="breadcrumb-item bg-dark p-1">
            <Link className="text-light" to={Data.menu4url}>
              {Data.menu4}
            </Link>
          </li>
        </ol>
      </nav>
    ))}
  </>
);

export default Breadcumb;
