import React from 'react';
import './spinner.css';

const Spinner = () => {

  return (
    <div className="spinner lds-css ng-scope">
      <div className="lds-ellipsis">
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;