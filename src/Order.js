import React from 'react';
import Data from './data/Order';
const Order = () => (
  <>
    {Data.map((Data, key) => (
      <div className="row">
        <div className="col-md-6 p-3">
          <h1>
            <strong>
              <a href="/">{Data.title}</a>
            </strong>
          </h1>
          <h2>{Data.description}</h2>
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
          <h3>{Data.pricing}</h3>
          <p>
            <strong>
              {Data.desktop} - {Data.server}
            </strong>
            <br />
            {Data.servertext}
            <br />
            <strong>{Data.serverprice}</strong>
            <br />
            <a href={Data.serverlink} className="btn btn-dark text-white">
              Order {Data.server}
            </a>
          </p>
          <p>
            <strong>
              {Data.desktop} - {Data.client}
            </strong>
            <br />
            {Data.clienttext}
            <br />
            <strong>{Data.clientprice}</strong>
            <br />
            <a href={Data.clientlink} className="btn btn-dark text-white">
              Order {Data.client}
            </a>
          </p>
          <p>
            <strong>
              {Data.webapp} - {Data.std}
            </strong>
            <br />
            {Data.stdtext}
            <br />
            <strong>{Data.stdprice}</strong>
            <br />
            <a href={Data.stdtlink} className="btn btn-dark text-white">
              Order {Data.std}
            </a>
          </p>
          <p>
            <strong>
              {Data.webapp} - {Data.pro}
            </strong>
            <br />
            {Data.protext}
            <br />
            <strong>{Data.proprice}</strong>
            <br />
            <a href={Data.protlink} className="btn btn-dark text-white">
              Order {Data.pro}
            </a>
          </p>
          <p>{Data.content}</p>
          <p>{Data.bank}</p>
          <p>{Data.norek}</p>
          <p>{Data.account}</p>
          <a href={Data.confirm} className="btn btn-dark text-white">
            Konfirmasi Order
          </a>
        </div>
      </div>
    ))}
  </>
);

export default Order;
