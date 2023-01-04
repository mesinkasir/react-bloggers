import React from 'react';
import Data from './data/About';
const Demo = () => (
  <>
    {Data.map((Data, key) => (
      <div className="col-md-12 p-3">
        <h1>
          <strong>
            <a href="/demo">{Data.title}</a>
          </strong>
        </h1>
        <h2>{Data.description}</h2>
        <div className="ratio ratio-16x9 mt-3 mb-5">
          <iframe
            src={Data.video}
            className="bunder"
            title={Data.title}
            allowfullscreen
          ></iframe>
        </div>
        <p>{Data.content}</p>
        <div className="ratio ratio-16x9 mt-3 mb-5">
          <iframe
            src={Data.video2}
            className="bunder"
            title={Data.title}
            allowfullscreen
          ></iframe>
        </div>
        <p>{Data.step3}</p>
      </div>
    ))}
  </>
);

export default Demo;
