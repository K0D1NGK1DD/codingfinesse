import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Navbar from "./Navbar"

import "../styles/components.css"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            <div className="layout-body">
                <div>{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;