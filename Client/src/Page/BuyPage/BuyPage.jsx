import React from 'react'
import './BuyPage.scss'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

function BuyPage() {
    return (
        <section id='buyPage'>
            <div className="container">
                <div className="informBox">
                    <p>These glasses detect objects using Object Recognition Technology. Then, through Audio Feedback technology, they convey what they see as sound to visually impaired individuals. Additionally, these glasses stand out with a Text Reading function. This function allows detecting words in different languages, besides the native language, which certainly facilitates user input to information. Charging of the glasses is carried out via rechargeable batteries. One of its superior features compared to its competitors is its special Azerbaijani Friendly Software provision.</p>
                </div>
                <div className="contactBox">
                    <div className="iconBox">
                        <p><FaInstagram /></p>
                        <h5>buyurudakn</h5>
                    </div>
                    <div className="iconBox">
                        <p><FaFacebookF /></p>
                        <h5>buyurudakn</h5>
                    </div>
                    <div className="iconBox">
                        <p><MdOutlinePhone /></p>
                        <h5>buyurudakn</h5>
                    </div>
                </div>
                <div className="mapBox">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mercator_projection_Square.JPG/640px-Mercator_projection_Square.JPG" alt="" />
                </div>
            </div>
        </section>
    )
}

export default BuyPage