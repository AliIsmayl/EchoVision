import React from 'react'
import './BuyPage.scss'
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
function BuyPage() {
    return (
        <section id='buyPage'>
            <div className="container">
                <div className="informBox">
                    <p>These glasses detect objects using Object Recognition Technology. Then, through Audio Feedback technology, they convey what they see as sound to visually impaired individuals. Additionally, these glasses stand out with a Text Reading function. This function allows detecting words in different languages, besides the native language, which certainly facilitates user input to information. Charging of the glasses is carried out via rechargeable batteries. One of its superior features compared to its competitors is its special Azerbaijani Friendly Software provision.</p>
                </div>
                <div className="contactBox">
                    <a href="https://www.instagram.com/echovision2024/">
                        <div className="iconBox">
                            <p><FaInstagram /></p>
                            <h5>echovision2024</h5>
                        </div>
                    </a>

                    <a href="tel:077 336 95 55">
                        <div className="iconBox">
                            <p><MdOutlinePhone /></p>
                            <h5>+994 77 336 95 55</h5>
                        </div>
                    </a>

                    <a href='mailto:echovisioncompany@gmail.com'>
                        <div className="iconBox">
                            <p><CiMail /></p>
                            <h5 style={{ fontSize: "10px" }}>echovisioncompany@gmail.com</h5>
                        </div>
                    </a>

                </div>
                <div className="mapBox">
                    <div className="mapIcon"><RiMapPin2Fill /></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mercator_projection_Square.JPG/640px-Mercator_projection_Square.JPG" alt="" />
                </div>
            </div>
        </section>
    )
}

export default BuyPage