import React, { Component } from 'react'
import Contact from '../../component/Contact/Contact'
import Experiece from '../../component/Experiece/Experiece'
import FooterWeb from '../../component/Footer/Footer'
import Navbars from '../../component/Navbar/Navbar'
import SlideCover from '../../component/SlideBar/SlideCover'

class homePage extends Component {

    render() {

        return (
            <div>
                <Navbars />
                <SlideCover />
                <Contact/>
                <Experiece/>
                <FooterWeb/>
            </div>
        )
    }
}

export default homePage
