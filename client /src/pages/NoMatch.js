import React from 'react'
import { Link } from 'react-router-dom';


export default function NoMatch() {
  return (
    <div>
        <h1>
            No Match Found
        </h1>    
        <Link to={`/loading`}>
            <button>Try Again?</button>
        </Link>
    </div>

  )
}
