import React from "react"
import Navbar from "./Navbar"

type LayoutProps = {
    children : React.ReactNode
}

const Layout = ({ children } : LayoutProps)=>{
    return(<div className="theme-bg flex flex-row">
        <Navbar />
        {children}
    </div>)
}

export default Layout