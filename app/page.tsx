'use client';
import React from "react";
import GraphicDesign from "../app/graphicdesign/page";
import UXDesign from "./uxdesign/page";
import Contact from "./contact/page";
import Footer from "./components/footer";
import About from "./about/page";
import Cartoons from "./cartoons/page";
import DesktopNavbar from "./components/desktopNavbar";
import Header from "./header/page";
import FineArt from "./fineart/page";
import AboutSection from "./about-blurb/page";
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
