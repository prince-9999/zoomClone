import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {

  const router = useNavigate();
  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
          <h2 className='zooom'>Zooom</h2>
        </div>
        <div className='navlist'>

          <p onClick={() => {
            router("/aljk23")
          }}>join as guest</p>


          <p onClick={() => {
             router("/auth")
          }}>Register</p>


          <div role='button'>
            <p onClick={() => {
               router("/auth")
            }}>login</p>
          </div>

        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1 className='mainHeading'><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

          <p>Feel together even when you're miles apart ❤️</p>

          <div className='btnSection'>

            <div role='button'>
              <Link to={"/auth"}>Get Started</Link>
            </div>

            <div className='guest' role='button'>
              <p onClick={() => {
                router("/aljk23")
              }}>join as guest</p>
            </div>

          </div>

        </div>
        <div>

          <img src="/mobile.png" alt="" />

        </div>
      </div>


    </div>
  )
}
