import React from 'react'
import './DownloaderPage.scss'
import { BsBox2Fill } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
function DownloaderPage() {
    return (
        <section id='downloaderPage'>
            <div className="container">
                <div className="downloadpacket">
                    <div className="imgBox" ><BsBox2Fill /></div>
                    <div className="textBox">
                        <h1>Packet Name</h1>
                        <p style={{color:"red"}}>Deactive</p>
                    </div>
                    <button><IoMdDownload /></button>
                </div>
                <div className="downloadpacket">
                    <div className="imgBox" ><BsBox2Fill /></div>
                    <div className="textBox">
                        <h1>Packet Name</h1>
                        <p style={{color:"red"}}>Deactive</p>
                    </div>
                    <button><IoMdDownload /></button>
                </div>
                <div className="downloadpacket">
                    <div className="imgBox" ><BsBox2Fill /></div>
                    <div className="textBox">
                        <h1>Packet Name</h1>
                        <p style={{color:"red"}}>Deactive</p>
                    </div>
                    <button><IoMdDownload /></button>
                </div>
                <div className="downloadpacket">
                    <div className="imgBox" ><BsBox2Fill /></div>
                    <div className="textBox">
                        <h1>Packet Name</h1>
                        <p style={{color:"red"}}>Deactive</p>
                    </div>
                    <button><IoMdDownload /></button>
                </div>
                <div className="downloadpacket">
                    <div className="imgBox" ><BsBox2Fill /></div>
                    <div className="textBox">
                        <h1>Packet Name</h1>
                        <p style={{color:"red"}}>Deactive</p>
                    </div>
                    <button><IoMdDownload /></button>
                </div>
            </div>
        </section>
    )
}

export default DownloaderPage