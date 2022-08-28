import React from 'react'
import Footer from '../../components/footer/Footer.js'
import GetProperty from '../../components/getProperty/GetProperty.js'
import Slider from "../../components/Slider.js"
export default function Home() {
    return (
        <div>
            <Slider />
            <GetProperty />
            <Footer />
        </div>
    )
}
