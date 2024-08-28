import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const App = () => {
  return (
    <div className='main'>

    <div className='app-main'>
      <div>

        <h1>Amaan Ansari</h1>
        <h2>Created a React App for a Demo Signup</h2>
        <br></br>
        <p>The features/libraries used in the project are mentioned below:</p>
        <ul>
          <li>React Router Dom(For navigating through Web Pages)</li>
          <li>BrowserRouter</li>
          <li>Router and Routes</li>
          <li>State Management using UseState</li>
          <li>Form Validation</li>
          <li>Downloadable Results</li>
          <li>The results are logged in the console as well</li>
        </ul>

        <ul>
          <li>Responsive Website</li>
          <li>Decent CSS through various internet sources</li>
        </ul>

        <p>Limitations</p>

        <ul>
          <li className='limit'>Database was not used</li>
          <li className='limit'>Use of Database may have been used to store all the submitted data at one place</li>
          <li className='limit'>A Seperate page for admin to access all the uploaded Data could be created through it</li>
        </ul>
      </div>

      <button className='sign-up-button'>
      <Link to='/resume'>Sign Up for the Internship</Link>
      </button>
    </div>

    </div>
  )
}

export default App
