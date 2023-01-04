import React from 'react';
import Data from '../data/Data';
import Limo from '../cover/programtoko.svg';
const Cover = () => (
  <>
    {Data.map((data) => (
      <div className="row">
        <img
          className="img-fluid col-md-6 p-1"
          width="100%"
          height="100%"
          alt={data.title}
          src={Limo}
        />
        <div className="col-md-6 p-3 p-md-5">
          <h3>
            <strong>{data.intro}</strong>
          </h3>
          <p>{data.text}</p>
        </div>
      </div>
    ))}
  </>
);

export default Cover;
