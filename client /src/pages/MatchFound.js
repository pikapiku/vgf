import React from 'react'
import { Link } from 'react-router-dom';


export default function MatchFound() {
  return (
    <div>
        <h1>
            Match Found
        </h1>    
        <button>Accept</button>

        <Link to={`/loading`}>
            <button>Try Again?</button>
        </Link>


    </div>
    )
}
