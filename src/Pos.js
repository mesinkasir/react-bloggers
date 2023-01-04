import React from 'react';
import Data from './data/About';
const Pos = () => (
  <>
    {Data.map((Data, key) => (
      <div className="col-md-12 p-3">
        <h3>
          POS
          <a href="/pos">{Data.title}</a>
        </h3>
        <p>{Data.description}</p>
        <p>{Data.content}</p>
        <p>{Data.step1}</p>
        <p>{Data.step2}</p>
        <p>{Data.step3}</p>
        <p>{Data.step4}</p>
        <p>{Data.step5}</p>
        <p>{Data.step6}</p>
        <p>{Data.step7}</p>
      </div>
    ))}
  </>
);

export default Pos;
