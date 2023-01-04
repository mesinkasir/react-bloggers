import React from 'react';
import Data from './data/Pos';
import { Link } from 'react-router-dom';
const Pos = () => (
  <>
    {Data.map((Data, key) => (
      <div className="row" key={Data.id}>
        <div className="col-md-6 p-1">
          <h1>
            <strong>
              <a href="/">{Data.title}</a>
            </strong>
          </h1>
          <h2>{Data.desc}</h2>
          <img
            className="img-fluid"
            width="100%"
            loading="lazy"
            height="100%"
            alt={Data.title}
            src={Data.img}
          />
        </div>
        <div className="col-md-6 p-3">
          <div className="ratio ratio-16x9 mt-1 mb-1">
            <iframe
              loading="lazy"
              src={Data.video}
              className="bunder"
              title={Data.title}
              allowfullscreen
            ></iframe>
          </div>
          <p>Spesifikasi : {Data.content}</p>
          <p>
            <strong>Price : {Data.price}</strong>
          </p>
          <a
            href={Data.order}
            className="btn btn-dark text-white"
            target="_blank"
          >
            Order {Data.title}
          </a>
        </div>
      </div>
    ))}
  </>
);

export default Pos;
