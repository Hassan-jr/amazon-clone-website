import React from 'react'
import './btn.css'

function btn(prop) {
  return (
    <div>
        <button className="btn">
         {prop.title}
        </button>

    </div>
  )
}

export default btn