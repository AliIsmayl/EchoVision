import React from 'react'
import './DownloaderPage.scss'
import { LuBookOpen } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";
function DownloaderPage() {
    return (
        <section id='downloaderPage'>
            <div className="container">
                <div className="downloadpacket">
                    <div className="imgBox"><LuBookOpen /></div>
                    <div className="textBox">
                        <h1>Packet Name</h1>
                        <p>Active</p>
                    </div>
                    <button><IoMdDownload /></button>
                </div>
                <div className="downloadpacket">
                    <div className="imgBox"><LuBookOpen /></div>
                    <div className="textBox">
                        <h1>Packet Name</h1>
                        <p>Active</p>
                    </div>
                    <button><IoMdDownload /></button>
                </div>
                <div className="downloadpacket">
                    <div className="imgBox"><LuBookOpen /></div>
                    <div className="textBox">
                        <h1>Packet Name</h1>
                        <p>Active</p>
                    </div>
                    <button><IoMdDownload /></button>
                </div>
                <div className="downloadpacket">
                    <div className="imgBox"><LuBookOpen /></div>
                    <div className="textBox">
                        <h1>Packet Name</h1>
                        <p>Active</p>
                    </div>
                    <button><IoMdDownload /></button>
                </div>
                <div className="downloadpacket">
                    <div className="imgBox"><LuBookOpen /></div>
                    <div className="textBox">
                        <h1>Packet Name</h1>
                        <p>Active</p>
                    </div>
                    <button><IoMdDownload /></button>
                </div>
            </div>
        </section>
    )
}

export default DownloaderPage