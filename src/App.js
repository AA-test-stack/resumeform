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

        <p>Database Configurations</p>

        <ul>
          <li>Connected through Node.js</li>
          <li>Express</li>
          <li>CORS</li>
          <li>The data gets stored in a backend file named formData.json which is private and not displayed on the browser</li>
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
