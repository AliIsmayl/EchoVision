import React from 'react'
import './PartnerPage.scss'
import { Link } from 'react-router-dom'

function PartnerPage() {
    return (
        <section id='partnerPage'>
            <div className="container">
                <div className="partnerLink">
                    <Link className='link' to={"https://sabahhub.com/"}>
                        <img src="https://startupschool.az/uploads/partners/032f036b3e4616f3bc7df7db6b67084d.png" alt="" />
                    </Link>
                </div>
                <div className="partnerLink">
                    <Link className='link' to={"https://sabah.edu.az/"}>
                        <img src="https://sabah.edu.az/M0/mainlogo/20240120_104505_1705733105_762c0a1f99.png" alt="" />
                    </Link>
                </div>
                <div className="partnerLink">
                    <Link className='link' to={"https://aztu.edu.az/az"}>
                        <img src="https://sso.aztu.edu.az/Content/Login/images/aztu_logo_az.png" alt="" />
                    </Link>
                </div>
                <div className="partnerLink">
                    <Link className='link' to={"https://edu.gov.az/"}>
                        <img src="https://edu.gov.az/uploads/elm-tehsil-naziriyi-logo.png" alt="" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PartnerPage