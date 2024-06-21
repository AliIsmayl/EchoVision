import React from 'react'
import './HomePage.scss'
import Logo from '../../../img/Screenshot 2024-06-20 201738.png'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section id='homePage'>
      <div className="buttonsForm">
        <img src={Logo} alt="" />
        <Link to={"inform"}>
          <button>Information</button>
        </Link>
        <Link to={"pakets"}>
          <button>Packets</button>
        </Link>
        <Link to={'download'}>
          <button>Downloader</button>
        </Link>
        <Link to={"partner"}>
          <button>Partner</button>
        </Link>
      </div>
    </section>
  )
}

export default HomePage