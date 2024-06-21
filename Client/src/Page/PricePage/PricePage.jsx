import React from 'react'
import './PricePage.scss'

function PricePage() {
    return (
        <section id='pricePage'>
            <div className="container">
                <div className="onePaket">
                    <h1>Standart Packet</h1>
                    <p>Includes up to 2 repairs per year</p>
                    <p> Use  mobile application </p>
                    <p>2 language  features</p>
                    <h6 style={{ color: "green" }}>Active</h6>
                    <div className="priceBox">
                        <p>$25</p>
                        <span>monthly</span>
                    </div>
                </div>
                <div className="onePaket">
                    <h1>Standart Packet</h1>
                    <p>Includes up to 2 repairs per year</p>
                    <p> Use  mobile application </p>
                    <p>2 language  features</p>
                    <h6 style={{ color: "red" }}>Deactive</h6>
                    <div className="priceBox">
                        <p>$25</p>
                        <span>monthly</span>
                    </div>
                </div>
                <div className="onePaket">
                    <h1>Standart Packet</h1>
                    <p>Includes up to 2 repairs per year</p>
                    <p> Use  mobile application </p>
                    <p>2 language  features</p>
                    <h6 style={{ color: "red" }}>Deactive</h6>
                    <div className="priceBox">
                        <p>$25</p>
                        <span>monthly</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricePage