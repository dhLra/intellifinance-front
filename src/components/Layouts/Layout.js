import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <div></div>
            {children}
        </>
    );
}

export default Layout;