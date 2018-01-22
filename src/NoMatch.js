import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () =>{
    return(
        <div>
            <p><strong>404 </strong>Page not found. Go to  <Link to="/">Home</Link> </p>          
        </div>
    )
}

export default NoMatch