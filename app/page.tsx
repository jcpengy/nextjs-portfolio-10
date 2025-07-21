'use client';
import React from "react";
import UXDesign from "./uxdesign/page";
import Footer from "./components/footer";
import DesktopNavbar from "./components/desktopNavbar";
import Header from "./header/page";

class Page extends React.Component<any, any>  {
    render() {
        return (
            <>
                <DesktopNavbar />
                <Header />
                <UXDesign />
                <Footer />
            </>
        )
    }
}

export default Page;
