import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div>

        <h1>About page</h1>

        <button><Link to="dashboard">Dashboard</Link></button>
        <button><Link to="profile">Profile</Link></button>
        <Outlet />

      </div>


    </>

  )
}

export default About