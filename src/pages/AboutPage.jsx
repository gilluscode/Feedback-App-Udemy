import React from 'react'
import Card from '../Components/Shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this poject</h1>
            <p>This is a React app to leave feedback for a product or a services</p>
            <p>Version: 1.0.0</p>
            <p>
              <Link to='/'>Back to Home</Link>
            </p>
        </div>
        
    </Card>
  )
}

export default AboutPage