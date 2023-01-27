import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

export default function SubmitForm() {
  const [count, setCount] = useState({})
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setCount(data)
      }
      )
    }, [])
    
    return (
      <div>
        <h1>
            SubmitForm
        </h1>    

        {(typeof count.users === 'undefined') ? 
          <p>Loading...</p> : 
          count.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        }
        <Link to={`/loading`}>
            <button>Submit</button>
        </Link>
    </div>

  )
}
