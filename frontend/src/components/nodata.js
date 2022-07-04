import React from 'react'
import "./nodata.css"
import { SpinnerInfinity } from 'spinners-react';

function Nodata() {
  return (
    <div className="nodata">
      < SpinnerInfinity size = {100} />
        {/* <h1>NO DATA FETCHED</h1>
        <h3>PLEASE RELOAD THE PAGE</h3>
        <p>Loading...</p> */}
    </div>
  )
}

export default Nodata